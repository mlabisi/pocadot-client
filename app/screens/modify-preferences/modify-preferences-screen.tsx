import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, FlatList, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
  Screen,
  Button,
  Header,
  Icon,
  ParsedText,
  Spacer,
  Text,
  PreferencesGrid,
} from "../../components"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import SearchBar from "react-native-dynamic-search-bar"
import { useQuery } from "../../models"
import { load, save } from "../../utils/storage"
import BottomSheet from "react-native-gesture-bottom-sheet"
import { Divider } from "@rneui/base"
import Swipeable from "react-native-gesture-handler/Swipeable"

const { height } = Dimensions.get("window")
const headerHeight = height * 0.2

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.black,
  textTransform: "uppercase",
  textAlign: "center",
  padding: 5,
}

const SUBTITLE: TextStyle = {
  color: color.palette.black,
  fontSize: 10,
  textAlign: "center",
}

const SEARCH: ViewStyle = {
  backgroundColor: color.fill,
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderRadius: 10,
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
}

const LINK_TEXT: TextStyle = {
  fontSize: 15,
  fontWeight: "300",
  color: color.palette.lavender,
}
const SELECTED_CT: TextStyle = {
  ...LINK_TEXT,
  fontWeight: "bold",
}

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.white,
}

const CHEVRON: ImageStyle = {
  alignItems: "center",
  width: 10,
}

const ROW_CONTAINER: ViewStyle = {
  paddingHorizontal: 10,
  alignItems: "flex-start",
  height: 45,
}

const ITEM: TextStyle = {
  padding: 10,
  color: color.palette.black,
}

const DELETE_CONTAINER: ViewStyle = {
  margin: 0,
  alignContent: "center",
  justifyContent: "center",
  width: 70,
}

const DELETE_BUTTON: ViewStyle = { backgroundColor: color.error, flex: 1 }

export const ModifyPreferencesScreen: FC<
  StackScreenProps<NavigatorParamList, "modifyPreferences">
> = observer(function ModifyPreferencesScreen({ navigation }) {
  const [selectedItems, setSelectedItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [query, setQuery] = useState("")
  const [isRestored, setIsRestored] = useState(false)

  const restoreSelected = async () => {
    try {
      const selected = await load("selectedItems")
      if (selected) setSelectedItems(selected)
    } finally {
      setIsRestored(true)
    }
  }

  useEffect(() => {
    if (!isRestored) restoreSelected()
  }, [isRestored])

  // ref
  const sheetRef = useRef<BottomSheet>(null)

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    sheetRef.current?.show()
  }, [])

  // render
  let row: Array<any> = []
  let prevOpenedRow

  const handleDelete = async (item) => {
    item.selected = !item.selected
    setSelectedItems(() => selectedItems.filter((found) => found.id !== item.id))
    await save("selectedItems", selectedItems)
  }

  const renderItem = ({ item, index }, onClick) => {
    const closeRow = (index) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close()
      }
      prevOpenedRow = row[index]
    }

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View style={DELETE_CONTAINER}>
          <Button style={DELETE_BUTTON} onPress={onClick} tx="common.delete"></Button>
        </View>
      )
    }

    return (
      <Swipeable
        renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, onClick)}
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightThreshold={-100}
      >
        <View style={ROW_CONTAINER}>
          <Text style={ITEM}> {item.name ?? item.stageName} </Text>
        </View>
        <Divider />
      </Swipeable>
    )
  }

  const { data, loading } = useQuery((store) =>
    store.queryPreferencesFeed(
      {},
      `
        id
        ... on Idol {
            stageName
        }
        ... on Group {
            name
        }`,
    ),
  )

  if (loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.ok"} />
        </View>
      </SafeAreaView>
    )
  }

  if (!query.length && !filteredItems.length) setFilteredItems(data.preferencesFeed)

  const searchFilterFunction = (text) => {
    setQuery(text)

    if (text.length === 0) {
      setFilteredItems(data.preferencesFeed)
    } else {
      setFilteredItems(
        data.preferencesFeed.filter((item) => {
          // @ts-ignore - Talent is guaranteed to be either a Group (with `name`) or Idol (with `stageName`)
          const { name, stageName } = item
          const label = (name ?? stageName).toUpperCase()
          const textData = text.toUpperCase()

          return label.indexOf(textData) > -1
        }),
      )
    }
  }

  return (
    <SafeAreaView style={ROOT}>
      <Screen preset={"fixed"}>
        <View style={HEADER}>
          <Header
            headerHeight={headerHeight}
            headerTx="modifyPreferences.title"
            leftTx={"modifyPreferences.cancel"}
            rightTx={"modifyPreferences.save"}
            onLeftPress={() => navigation.goBack()}
            onRightPress={async () => {
              navigation.pop()
              navigation.navigate("listings")
              alert("Saved modifications")
              await save("selectedItems", selectedItems)
            }}
            titleStyle={TITLE}
            style={HEADER}
            textStyle={LINK_TEXT}
          >
            <Text tx="modifyPreferences.subtitle" style={SUBTITLE} />
            <Spacer n={0.5} />
            <SearchBar
              style={SEARCH}
              placeholder="Search"
              onPress={() => null}
              onClearPress={() => searchFilterFunction("")}
              onChangeText={searchFilterFunction}
            />
          </Header>
        </View>
        <PreferencesGrid
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          filteredItems={filteredItems}
        />

        <Button onPress={handlePresentModalPress} style={BUTTON}>
          <Icon icon="chevronUp" style={CHEVRON} />
          <ParsedText
            tx="preferences.label"
            txOptions={{ selectedCt: selectedItems.length }}
            style={LINK_TEXT}
            parse={[{ pattern: /(\d+)/, style: SELECTED_CT }]}
          />
        </Button>
        <BottomSheet ref={sheetRef} draggable={true} hasDraggableIcon={true} height={height * 0.8}>
          <Text tx="preferences.title" style={TITLE} />
          <FlatList
            data={selectedItems}
            keyExtractor={(item) => item.id}
            renderItem={(v) =>
              renderItem(v, async () => {
                await handleDelete(v.item)
              })
            }
          />
        </BottomSheet>
      </Screen>
    </SafeAreaView>
  )
})

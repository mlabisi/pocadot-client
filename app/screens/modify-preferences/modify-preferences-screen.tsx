import React, { FC, useCallback, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { FlatGrid } from "react-native-super-grid"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Header, Icon, ParsedText, PreferenceCard, Spacer, Text } from "../../components"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import SearchBar from "react-native-dynamic-search-bar"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useQuery } from "../../models"
import { load, save } from "../../utils/storage"
import BottomSheet from "react-native-gesture-bottom-sheet"
import { Divider } from "@rneui/base"
import Swipeable from "react-native-gesture-handler/Swipeable"

const headerHeight = 75 * 2

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}
const GRID: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
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

const ROW_CONTAINER: ViewStyle = {
  paddingHorizontal: 10,
  alignItems: "flex-start",
  height: 45,
}

const ITEM: TextStyle = {
  padding: 10,
  color: color.palette.black,
}

const CHEVRON: ImageStyle = {
  alignItems: "center",
  width: 10,
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

  // this causes too many re-renders for some reason
  // setFilteredItems(data.preferencesFeed)

  const searchFilterFunction = (text) => {
    if (text.length === 0) {
      setFilteredItems(data.preferencesFeed)
    } else {
      setFilteredItems(
        data.preferencesFeed.filter((item) => {
          // @ts-ignore - Talent is guaranteed to be either a Group (with `name`) or Idol (with `stageName`)
          const { name, stageName } = item
          const label = name ?? stageName
          const textData = text.toUpperCase()

          return label.indexOf(textData) > -1
        }),
      )
    }
  }
  load("selectedItems").then((storedSelections) => {
    // Set the initial value
    setSelectedItems(storedSelections ?? [])
  })

  return (
    <SafeAreaView style={ROOT}>
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
            onChangeText={searchFilterFunction}
          />
        </Header>
      </View>
      <FlatGrid
        style={GRID}
        keyExtractor={(item) => item.id}
        maxItemsPerRow={2}
        data={filteredItems.map((item) => {
          return { ...item, selected: !!selectedItems.find((found) => found.id === item.id) }
        })}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={async () => {
              if (item.selected) {
                item.selected = !item.selected
                setSelectedItems(() => selectedItems.filter((found) => found.id !== item.id))
              } else {
                item.selected = !item.selected
                setSelectedItems((prev) => [...prev, item])
              }

              await save("selectedItems", selectedItems)
            }}
          >
            <PreferenceCard item={item} />
          </TouchableWithoutFeedback>
        )}
      />
      {
        <>
          <Button onPress={handlePresentModalPress} style={BUTTON}>
            <Icon icon="chevronUp" style={CHEVRON} />
            <ParsedText
              tx="preferences.label"
              txOptions={{ selectedCt: selectedItems.length }}
              style={LINK_TEXT}
              parse={[{ pattern: /(\d+)/, style: SELECTED_CT }]}
            />
          </Button>
          <BottomSheet ref={sheetRef} draggable={true} hasDraggableIcon={true} height={700}>
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
        </>
      }
    </SafeAreaView>
  )
})

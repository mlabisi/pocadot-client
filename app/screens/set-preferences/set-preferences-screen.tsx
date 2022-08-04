import React, { FC, useCallback, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
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
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet"

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

const SELECTED_CONTAINER: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const ITEM_CONTAINER: ViewStyle = {
  padding: 6,
  margin: 6,
  backgroundColor: "#eee",
}

const CHEVRON: ImageStyle = {
  alignItems: "center",
  width: 10,
}

export const SetPreferencesScreen: FC<StackScreenProps<NavigatorParamList, "setPreferences">> =
  observer(function SetPreferencesScreen({ navigation }) {
    const [selectedItems, setSelectedItems] = useState([])

    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)

    // variables
    const snapPoints = useMemo(() => ["75%"], [])

    // callbacks
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present()
    }, [])
    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index)
    }, [])

    // render
    const renderItem = useCallback(({ item }) => <Text style={LINK_TEXT}>{item.name}</Text>, [])

    const { data } = useQuery((store) =>
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

    const [filteredItems, setFilteredItems] = useState(data.preferencesFeed)

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
        <BottomSheetModalProvider>
          <View style={HEADER}>
            <Header
              headerHeight={headerHeight}
              headerTx="setPreferences.title"
              leftTx={"setPreferences.back"}
              rightTx={selectedItems.length > 0 ? "setPreferences.save" : "setPreferences.skip"}
              onLeftPress={() => navigation.goBack()}
              onRightPress={async () => {
                navigation.navigate("listings")
                alert("Saved selections")
                await save("selectedItems", selectedItems)
              }}
              titleStyle={TITLE}
              style={HEADER}
              textStyle={LINK_TEXT}
            >
              <Text tx="setPreferences.subtitle" style={SUBTITLE} />
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
          {selectedItems.length > 0 && (
            <>
              <Button onPress={handlePresentModalPress} style={BUTTON}>
                <Icon icon="chevronUp" style={CHEVRON} />
                <ParsedText
                  tx="setPreferences.selected"
                  txOptions={{ selectedCt: selectedItems.length }}
                  style={LINK_TEXT}
                  parse={[{ pattern: /(\d+)/, style: SELECTED_CT }]}
                />
              </Button>
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                style={ITEM_CONTAINER}
              >
                <BottomSheetFlatList
                  data={selectedItems}
                  keyExtractor={(item) => item.id}
                  renderItem={renderItem}
                  contentContainerStyle={SELECTED_CONTAINER}
                />
              </BottomSheetModal>
            </>
          )}
        </BottomSheetModalProvider>
      </SafeAreaView>
    )
  })

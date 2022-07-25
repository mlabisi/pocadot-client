import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { FlatGrid } from "react-native-super-grid"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, PreferenceCard, Spacer, Text } from "../../components"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import SearchBar from "react-native-dynamic-search-bar"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { useQuery } from "../../models"
import SkeletonContent from "react-native-skeleton-content"
import { load } from "../../utils/storage"

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

export const SetPreferencesScreen: FC<StackScreenProps<NavigatorParamList, "setPreferences">> =
  observer(function SetPreferencesScreen({ navigation }) {
    const [selectedItems, setSelectedItems] = useState([])

    const { loading, data } = useQuery((store) =>
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
      return <SkeletonContent containerStyle={{ flex: 1, width: 300 }} isLoading={loading} />
    }

    load("selected").then((storedSelections) => {
      // Set the initial value
      setSelectedItems(storedSelections)
    })

    return (
      <SafeAreaView style={ROOT}>
        <View style={HEADER}>
          <Header
            headerHeight={headerHeight}
            headerTx="setPreferences.title"
            leftTx={"setPreferences.back"}
            rightTx={"setPreferences.skip"}
            onLeftPress={() => navigation.goBack()}
            onRightPress={() => navigation.navigate("welcome")}
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
              onChangeText={(text) => console.log(text)}
            />
          </Header>
        </View>
        <FlatGrid
          style={GRID}
          keyExtractor={(item) => item.id}
          maxItemsPerRow={2}
          data={data.preferencesFeed.map((item) => {
            return { ...item, selected: false }
          })}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                if (item.selected) {
                  setSelectedItems(() => selectedItems.filter((found) => found.id !== item.id))
                  item.selected = !item.selected
                } else {
                  setSelectedItems((prev) => [...prev, item])
                  item.selected = !item.selected
                }
              }}
            >
              <PreferenceCard item={item} />
            </TouchableWithoutFeedback>
          )}
        />
      </SafeAreaView>
    )
  })

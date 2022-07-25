import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { FlatGrid } from "react-native-super-grid"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, PreferenceCard, Spacer, Text } from "../../components"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import SearchBar from "react-native-dynamic-search-bar"

const headerHeight = 75 * 2

const ROOT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.black,
}
const SUBTITLE: TextStyle = {
  ...TITLE,
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

export const SetPreferencesScreen: FC<StackScreenProps<NavigatorParamList, "setPreferences">> =
  observer(function SetPreferencesScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const data = new Array(100).fill({})

    return (
      <SafeAreaView style={ROOT}>
        <View style={HEADER}>
          <Header
            headerHeight={headerHeight}
            headerTx="setPreferences.title"
            leftIcon="back"
            onLeftPress={() => navigation.goBack()}
            titleStyle={TITLE}
            style={HEADER}
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
          maxItemsPerRow={2}
          data={data}
          renderItem={({ item }) => (
            <View>
              <PreferenceCard item={item} />
            </View>
          )}
        />
      </SafeAreaView>
    )
  })

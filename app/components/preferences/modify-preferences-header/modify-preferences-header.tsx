import * as React from "react"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import SearchBar from "react-native-dynamic-search-bar"
import { Header, Text } from "../../index"
import { headerHeight, LINK_TEXT, SEARCH, SUBTITLE, TITLE, HEADER, ROOT } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { RootStoreContext, useQuery } from "../../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { View } from "react-native"

export interface PreferencesHeaderProps {
  modifyPreferences?: boolean
}

/**
 * Describe your component here
 */
export const ModifyPreferencesHeader = observer(function ModifyPreferencesHeader() {
  const { filteredPreferences, setFilteredPreferences } = useContext(RootStoreContext)
  const { preferencesQuery, setPreferencesQuery } = useContext(RootStoreContext)

  const navigation = useNavigation()

  const { data, loading } = useQuery((store) =>
    store.queryPreferencesFeed({}, (feed) =>
      feed.idol((idol) => idol.stageName).group((group) => group.name),
    ),
  )

  if (loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.loading"} />
        </View>
      </SafeAreaView>
    )
  }

  if (!preferencesQuery.length && !filteredPreferences.length)
    setFilteredPreferences(data.preferencesFeed.map((i) => i.id))

  const searchFilterFunction = (text) => {
    setPreferencesQuery(text)

    if (text.length === 0) {
      setFilteredPreferences(data.preferencesFeed.map((i) => i.id))
    } else {
      setFilteredPreferences(
        data.preferencesFeed
          .filter((item) => {
            // @ts-ignore - Talent is guaranteed to be either a Group (with `name`) or Idol (with `stageName`)
            const { name, stageName } = item
            const label = (name ?? stageName).toUpperCase()
            const textData = text.toUpperCase()

            return label.indexOf(textData) > -1
          })
          .map((i) => i.id),
      )
    }
  }

  return (
    <Header
      headerHeight={headerHeight}
      headerTx="modifyPreferences.title"
      leftTx={"modifyPreferences.cancel"}
      rightTx={"modifyPreferences.save"}
      onLeftPress={() => navigation.goBack()}
      onRightPress={async () => {
        navigation.goBack()
      }}
      titleStyle={TITLE}
      style={HEADER}
      textStyle={LINK_TEXT}
    >
      <Text tx="modifyPreferences.subtitle" style={SUBTITLE} />
      <SearchBar
        style={SEARCH}
        placeholder="Search"
        onPress={() => null}
        onClearPress={() => searchFilterFunction("")}
        onChangeText={searchFilterFunction}
      />
    </Header>
  )
})

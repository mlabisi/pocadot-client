import * as React from "react"
import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import SearchBar from "react-native-dynamic-search-bar"
import { headerHeight, LINK_TEXT, SEARCH, SUBTITLE, TITLE, HEADER } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { RootStoreContext, useQuery } from "../../../../models"
import { Header } from "../../common/header/header"
import { Text } from "../../common/text/text"

export interface PreferencesHeaderProps {
  modifyPreferences: boolean
}

/**
 * Describe your component here
 */
export const PreferencesHeader = observer(function PreferencesHeader({
  modifyPreferences,
}: PreferencesHeaderProps) {
  const {
    selectedPreferences,
    filteredPreferences,
    setFilteredPreferences,
    preferencesQuery,
    setPreferencesQuery,
  } = useContext(RootStoreContext)
  const {} = useContext(RootStoreContext)
  const [data, setData] = useState([])

  const navigation = useNavigation()

  const feedQuery = useQuery((store) =>
    store.queryPreferencesFeed({}, (feed) =>
      feed.idol((idol) => idol.stageName).group((group) => group.name),
    ),
  )

  useEffect(() => {
    if (!!feedQuery.data && !data.length) {
      setData(feedQuery.data.preferencesFeed)
      setFilteredPreferences(data)
    }
  }, [setData, feedQuery, data])

  useEffect(() => {
    if (!preferencesQuery.length && !filteredPreferences.length) setFilteredPreferences(data)
  }, [preferencesQuery, setFilteredPreferences, data])

  const searchFilterFunction = (text) => {
    setPreferencesQuery(text)

    if (text.length === 0) {
      setFilteredPreferences(data)
    } else {
      setFilteredPreferences(
        data.filter((item) => {
          // @ts-ignore - Talent is guaranteed to be either a Group (with `name`) or Idol (with `stageName`)
          const { name, stageName } = item
          const label = (name ?? stageName).toUpperCase()
          const textData = text.trim().toUpperCase()

          return label.indexOf(textData) > -1
        }),
      )
    }
  }

  return (
    <Header
      headerHeight={headerHeight}
      headerTx={`${modifyPreferences ? "modify" : "set"}Preferences.title`}
      leftTx={`common.${modifyPreferences ? "back" : "cancel"}`}
      rightTx={
        modifyPreferences
          ? "modifyPreferences.save"
          : selectedPreferences.length > 0
          ? "setPreferences.save"
          : "setPreferences.skip"
      }
      onLeftPress={() => {
        setPreferencesQuery("")
        setFilteredPreferences([])
        navigation.goBack()
      }}
      onRightPress={() => {
        setPreferencesQuery("")
        setFilteredPreferences([])

        // @ts-ignore "tabs" will be available if we are in modify mode
        modifyPreferences ? navigation.goBack() : navigation.navigate("tabs")
      }}
      titleStyle={TITLE}
      style={HEADER}
      textStyle={LINK_TEXT}
    >
      <Text tx={`${modifyPreferences ? "modify" : "set"}Preferences.subtitle`} style={SUBTITLE} />
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

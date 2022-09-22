import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Header } from "../../common/header/header"
import { Text } from "../../common/text/text"
import { HEADER, HEADER_CONTENT, headerHeight, TITLE, SEARCH } from "./styles"
import SearchBar from "react-native-dynamic-search-bar"

export const ChatsHeader = observer(function ChatsHeader() {
  const searchFilterFunction = (text) => {
    // setChatsQuery(text)
    //
    // if (text.length === 0) {
    //   setFilteredChats(data)
    // } else {
    //   setFilteredChats(
    //     data.filter((item) => {
    //       // @ts-ignore - Talent is guaranteed to be either a Group (with `name`) or Idol (with `stageName`)
    //       const { name, stageName } = item
    //       const label = (name ?? stageName).toUpperCase()
    //       const textData = text.toUpperCase()
    //
    //       return label.indexOf(textData) > -1
    //     }),
    //   )
    // }
  }

  return (
    <Header headerHeight={headerHeight} style={HEADER}>
      <View style={HEADER_CONTENT}>
        <Text tx={"chats.title"} preset={"header"} style={TITLE} />
        <SearchBar
          style={SEARCH}
          placeholder="Search"
          onPress={() => null}
          onClearPress={() => searchFilterFunction("")}
          onChangeText={searchFilterFunction}
        />
      </View>
    </Header>
  )
})

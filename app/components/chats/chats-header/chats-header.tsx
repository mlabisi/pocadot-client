import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Header, Text } from "../../index"
import { HEADER, HEADER_CONTENT, headerHeight, TITLE } from "./styles"

export const ChatsHeader = observer(function ChatsHeader() {
  return (
    <Header headerHeight={headerHeight} style={HEADER}>
      <View style={HEADER_CONTENT}>
        <Text tx={"chats.title"} preset={"header"} style={TITLE} />
      </View>
    </Header>
  )
})

import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { AutoImage, Header, Text } from "../../../index"
import { HEADER, HEADER_CONTENT, headerHeight, PROFILE_PIC } from "./styles"

const otherPic = require("./otherProfilePic.png.png")

export const ViewProfileHeader = observer(function MyProfileHeader() {
  return (
    <Header headerHeight={headerHeight} style={HEADER}>
      <View style={HEADER_CONTENT}>
        <AutoImage source={otherPic} style={PROFILE_PIC} />
        <Text text={"@papagowon"} preset={"header"} />
      </View>
    </Header>
  )
})

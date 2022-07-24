import * as React from "react"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { color } from "../../theme"
import { Text } from "../text/text"
import { AutoImage } from "../auto-image/auto-image"
import { Spacer } from "../spacer/spacer"

const defaultImage = require("./stayc.png")
const dimensions = 170

const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  width: dimensions,
  height: dimensions,
  alignItems: "center",
  maxWidth: "25%",
}
const SELECTED_CONTAINER: ViewStyle = {
  ...CONTAINER,
  borderColor: color.primary,
  borderWidth: 2,
  borderRadius: 10,
}

const FEATURED_IMAGE: ImageStyle = {
  width: dimensions - 5,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  flex: 0.75,
  zIndex: -1,
  alignSelf: "center",
}

const LABEL_CONTAINER: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 0.25,
  width: dimensions - 5,
  alignItems: "center",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
}
const LABEL: TextStyle = {
  fontSize: 14,
  color: color.palette.black,
}

/**
 * Displays an idol/group's default picture, label, and frame depending on whether or not the talent has been selected
 */
export const PreferenceCard = function PreferenceCard({ item }) {
  const { featuredImage = defaultImage, label = "STAYC", selected = false } = item

  return (
    <View style={selected ? SELECTED_CONTAINER : null}>
      <View style={CONTAINER}>
        <AutoImage source={featuredImage} style={FEATURED_IMAGE} />
        <View style={LABEL_CONTAINER}>
          <Spacer n={0.4} />
          <Text text={label} style={LABEL} />
          <Spacer n={0.4} />
        </View>
      </View>
    </View>
  )
}

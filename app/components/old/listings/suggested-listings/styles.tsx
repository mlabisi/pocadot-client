import { Dimensions, TextStyle, ViewStyle } from "react-native"
import { color } from "../../../../theme"

const { width } = Dimensions.get("window")

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

export const CONTAINER: ViewStyle = {
  position: "relative",
  alignSelf: "center",
  width,
}

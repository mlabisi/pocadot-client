import { Dimensions, TextStyle, ViewStyle } from "react-native"
import { color } from "../../../theme"

const { width } = Dimensions.get("window")

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

export const CONTENT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

export const ROW: ViewStyle = {
  backgroundColor: color.palette.lavenderFill,
  flexDirection: "row",
  width,
}

export const TITLE: TextStyle = {
  color: color.palette.lavender,
  fontSize: 16,
}

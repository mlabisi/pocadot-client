import { color } from "../../../theme"
import { TextStyle, ViewStyle } from "react-native"

export const ROOT: ViewStyle = {
  backgroundColor: color.primary,
  flex: 8,
  flexDirection: "column",
  alignItems: "center",
}

export const SCREEN: ViewStyle = {
  ...ROOT,
}

export const BUTTON_CONTAINER: ViewStyle = {
  flex: 3,
  flexDirection: "row",
  alignItems: "center",
}

export const BUTTON: ViewStyle = {
  backgroundColor: color.palette.white,
  borderRadius: 100,
}

export const HEADER_TEXT: TextStyle = {
  color: color.palette.white,
  fontSize: 70,
  flex: 1,
}

export const BUTTON_TEXT: TextStyle = {
  color: color.palette.lavender,
}

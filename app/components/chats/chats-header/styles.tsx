import { Dimensions, TextStyle, ViewStyle } from "react-native"
import { color, spacing } from "../../../theme"

const { height } = Dimensions.get("window")
export const headerHeight = height * 0.2

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const HEADER: ViewStyle = {
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundColor: color.palette.white,
}
export const HEADER_CONTENT: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
  flexDirection: "column",
  paddingBottom: 15,
}
export const SEARCH: ViewStyle = {
  backgroundColor: color.fill,
  margin: spacing[4],
  borderRadius: 10,
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
}
export const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

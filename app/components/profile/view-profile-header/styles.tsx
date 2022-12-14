import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color } from "../../../theme"

const { height } = Dimensions.get("window")
export const headerHeight = height * 0.7

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const HEADER: ViewStyle = {
  height: 0,
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundColor: color.palette.white,
}
export const HEADER_CONTENT: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
  flexDirection: "column",
  paddingBottom: 15,
  justifyContent: "center",
  alignItems: "center",
}

export const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

export const PROFILE_PIC: ImageStyle = {
  width: 120,
  height: 120,
  borderRadius: 100,
}

import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color } from "../../../theme"

const { height } = Dimensions.get("window")
export const headerHeight = height * 0.5

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const HEADER: ViewStyle = {
  height: 75,
  flexDirection: "row",
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
  color: color.palette.black,
  padding: 15,
  textAlign: "center",
}

export const LINKS: TextStyle = {
  color: color.palette.black,
  textAlign: "center",
  fontSize: 13,
}

export const PROFILE_PIC: ImageStyle = {
  width: 120,
  height: 120,
  borderRadius: 100,
}

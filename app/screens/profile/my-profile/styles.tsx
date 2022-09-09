import { Dimensions, TextStyle, ViewStyle, ImageStyle } from "react-native"
import { color, spacing } from "../../../theme"

const { width, height } = Dimensions.get("window")
export const headerHeight = height * 0.3

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

export const CONTENT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

export const ROW: ViewStyle = {
  padding: spacing[4],
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width,
}

export const CELL: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "relative",
  width,
}

export const TITLE: TextStyle = {
  color: color.palette.black,
  padding: 15,
  textAlign: "center",
}

export const LINK: TextStyle = {
  ...TITLE,
  textDecorationLine: "underline",
  fontSize: 10,
}

export const HEADER: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-end",
  backgroundColor: color.palette.white,
}
export const HEADER_CONTENT: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
  flexDirection: "column",
  padding: 15,
  justifyContent: "center",
  alignItems: "center",
}
export const BUTTON_STYLE: ViewStyle = {
  borderStyle: "solid",
  borderColor: color.primary,
  width: width * 0.25,
  borderRadius: 100,
  alignSelf: "center",
  marginTop: spacing[4],
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

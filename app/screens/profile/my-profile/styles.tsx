import { Dimensions, TextStyle, ViewStyle } from "react-native"
import { color, spacing } from "../../../theme"

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
}

export const LINK: TextStyle = {
  ...TITLE,
  textDecorationLine: "underline",
  fontSize: 10,
}

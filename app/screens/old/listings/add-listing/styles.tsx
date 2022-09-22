import { Dimensions, TextStyle, ViewStyle } from "react-native"
import { color, spacing } from "../../../../theme"

export const { height, width } = Dimensions.get("window")
export const headerHeight = height * 0.15

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  height,
}

export const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}
export const HEADER_TEXT: TextStyle = {
  color: color.palette.lavender,
}
export const TITLE: TextStyle = {
  color: color.palette.black,
  textTransform: "uppercase",
  textAlign: "center",
  fontWeight: "500",
  paddingBottom: spacing[4],
  backgroundColor: color.palette.white,
}

export const FORM_CONTAINER: ViewStyle = {
  flex: 1,
  padding: spacing[4],
}
export const BUTTON_STYLE: ViewStyle = {
  borderRadius: 0,
  borderStyle: "solid",
  borderColor: color.primary,
  width,
  alignSelf: "center",
  marginVertical: spacing[4],
}

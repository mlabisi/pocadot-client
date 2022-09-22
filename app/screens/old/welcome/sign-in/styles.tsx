import { color, spacing } from "../../../../theme"
import { ImageStyle, TextStyle, ViewStyle } from "react-native"

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
}

export const SCREEN: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  paddingHorizontal: 15,
}

export const BUTTON_CONTAINER: ViewStyle = {
  flex: 0.1,
  flexDirection: "column",
  alignItems: "center",
}

export const BUTTON: ViewStyle = {
  backgroundColor: color.palette.lavender,
  borderRadius: 100,
}

export const LINK_BUTTON: ViewStyle = {
  backgroundColor: color.transparent,
}

export const LINK_TEXT: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: color.palette.lavender,
}

export const FORM_ROW: TextStyle = {
  borderColor: color.palette.lavender,
  paddingVertical: 0,
}

export const FORM_LABEL: TextStyle = {
  color: color.palette.black,
  alignSelf: "center",
}

export const DESCRIPTION: TextStyle = {
  color: color.palette.gray,
  alignSelf: "center",
}

export const INPUT: TextStyle = {
  color: color.palette.gray,
}

export const POCADOT_CIRCLE: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 100,
  height: 100,
}

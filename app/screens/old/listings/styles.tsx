import { Dimensions, TextStyle, ViewStyle } from "react-native"
import { color, spacing } from "../../../theme"

const { height } = Dimensions.get("window")
export const headerHeight = height * 0.2

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

export const HEADER_CONTENT: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
  flexDirection: "row",
  paddingBottom: 15,
}

export const HEADER_TEXT: TextStyle = {
  color: color.palette.lavender,
  fontSize: 15,
}

export const CONTENT: ViewStyle = { flex: 1, alignItems: "center" }

export const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

export const SEGMENT_TITLE: TextStyle = {
  fontSize: 12,
}

export const TABS_CONTAINER: ViewStyle = {
  flex: 1,
  height: 25,
  paddingRight: 15,
}

export const FLOATING_BUTTON_CONTAINER: ViewStyle = {
  position: "absolute",
  bottom: spacing[4],
  right: spacing[4],
}

export const ACTIVE_TAB: ViewStyle = { backgroundColor: color.primary }

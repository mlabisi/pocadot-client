import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color, spacing } from "../../../../theme"

export const { height } = Dimensions.get("window")
export const headerHeight = height * 0.3

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
export const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}

export const TITLE: TextStyle = {
  color: color.palette.black,
  textTransform: "uppercase",
  textAlign: "center",
}

export const SUBTITLE: TextStyle = {
  color: color.palette.black,
  fontSize: 10,
  textAlign: "center",
  paddingBottom: spacing[4],
}

export const SEARCH: ViewStyle = {
  backgroundColor: color.fill,
  marginBottom: spacing[4],
  borderRadius: 10,
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
}

export const LINK_TEXT: TextStyle = {
  fontSize: 15,
  fontWeight: "300",
  color: color.palette.lavender,
}
export const SELECTED_CT: TextStyle = {
  ...LINK_TEXT,
  fontWeight: "bold",
}

export const BUTTON: ViewStyle = {
  backgroundColor: color.palette.white,
}

export const CHEVRON: ImageStyle = {
  alignItems: "center",
  width: 10,
}

export const ROW_CONTAINER: ViewStyle = {
  paddingHorizontal: 10,
  alignItems: "flex-start",
  height: 45,
}

export const ITEM: TextStyle = {
  padding: 10,
  color: color.palette.black,
}

export const DELETE_CONTAINER: ViewStyle = {
  margin: 0,
  alignContent: "center",
  justifyContent: "center",
  width: 70,
}

import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color } from "../../../theme"

const dimensions = 170

export const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  width: dimensions,
  height: dimensions,
}
export const SHADOW: ViewStyle = {
  shadowColor: "#171717",
  shadowOffset: { width: -2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
}
export const SELECTED_CONTAINER: ViewStyle = {
  borderColor: color.primary,
  borderWidth: 2,
  borderRadius: 15,
  width: dimensions + 2,
}

export const FEATURED_IMAGE: ImageStyle = {
  width: dimensions - 5,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  flex: 0.75,
  zIndex: -1,
  alignSelf: "center",
}

export const LABEL_CONTAINER: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 0.25,
  width: dimensions - 5,
  alignItems: "center",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
}
export const LABEL: TextStyle = {
  fontSize: 14,
  color: color.palette.black,
  fontWeight: "400",
}

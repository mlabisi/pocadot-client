import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color, spacing } from "../../../theme"

const { width } = Dimensions.get("window")
const dimensions = width * 0.75

export const CONTAINER: ViewStyle = {
  flex: 0.5,
  flexDirection: "column",
  alignSelf: "center",
  width: dimensions,
  height: dimensions,
  marginVertical: spacing[4],
}
export const SHADOW: ViewStyle = {
  shadowColor: "#171717",
  shadowOffset: { width: -2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
}
export const OVERLAY: ViewStyle = {
  backgroundColor: color.palette.lavenderFill,
  width: dimensions,
  height: dimensions,
  zIndex: 1,
  borderRadius: 10,
  justifyContent: "center",
}
export const OVERLAY_TEXT: TextStyle = {
  fontSize: 16,
  color: color.palette.black,
  textAlign: "center",
  justifyContent: "center",
  margin: spacing[2],
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
  justifyContent: "center",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
}
export const LABEL: TextStyle = {
  fontSize: 22,
  fontWeight: "500",
  letterSpacing: -0.44,
  color: color.palette.black,
  textAlign: "center",
}

import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color, spacing } from "../../../../theme"

export const { height, width } = Dimensions.get("window")
export const headerHeight = height * 0.15

export const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
export const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}

export const IMAGE: ImageStyle = {
  width: width / 2.5,
  flex: 0.75,
  zIndex: -1,
  alignSelf: "center",
}

export const HEADER_TEXT: TextStyle = {
  color: color.palette.lavender,
}
export const DESC_TEXT: TextStyle = {
  ...HEADER_TEXT,
  paddingHorizontal: spacing[4],
}
export const BUTTON_TEXT: TextStyle = {
  ...DESC_TEXT,
  fontSize: 16,
  color: color.palette.white,
}

export const CELL: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "relative",
  width,
}

export const ROW: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width,
}

export const TITLE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  paddingHorizontal: spacing[4],
  width,
}

export const IDOL_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  position: "relative",
  paddingHorizontal: 0,
}

export const DIVIDER: ViewStyle = {
  borderWidth: 0.75,
  borderStyle: "solid",
  borderColor: color.primary,
  width: width - spacing[4] * 2,
  height: 1,
  alignSelf: "center",
  marginTop: spacing[4],
}

export const BUTTON_STYLE: ViewStyle = {
  borderRadius: 0,
  borderStyle: "solid",
  borderColor: color.primary,
  width,
  alignSelf: "center",
  marginVertical: spacing[4],
}
export const FAVED_BADGE: ViewStyle = {
  backgroundColor: color.palette.white,
  shadowColor: color.palette.black,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 1,
  width: 23,
  height: 23,
  borderRadius: 100,
  justifyContent: "center",
  alignContent: "center",
}
export const FAVED_ICON: ImageStyle = {
  width: 14,
  height: 14,
  alignSelf: "center",
}

export const LISTING_IDOL: TextStyle = {
  fontSize: 22,
  fontWeight: "500",
  letterSpacing: -0.44,
  color: color.palette.black,
  textAlign: "center",
}

export const TEXT: TextStyle = {
  fontSize: 20,
  fontWeight: "400",
  letterSpacing: -0.2,
  color: color.palette.black,
  textAlign: "left",
  justifyContent: "center",
  paddingLeft: spacing[4],
  paddingRight: spacing[2],
  paddingVertical: spacing[3],
}

export const DETAIL_TEXT: TextStyle = {
  fontSize: 20,
  fontWeight: "400",
  letterSpacing: -0.2,
  color: color.palette.black,
  textAlign: "center",
  justifyContent: "center",
  paddingLeft: spacing[4],
}

export const TAGS_CONTAINER: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  padding: spacing[0],
  paddingTop: spacing[1],
}
export const TAG: ViewStyle = {
  paddingVertical: 4,
  paddingHorizontal: 12,
  marginLeft: 4,
  justifyContent: "center",
  alignSelf: "center",
  borderRadius: 100,
  backgroundColor: color.palette.mint,
}
export const TAG_TEXT: TextStyle = {
  fontSize: 6,
  fontWeight: "600",
  letterSpacing: 0.1,
  color: color.palette.black,
  textAlign: "center",
  justifyContent: "center",
}

export const LISTED_BY: TextStyle = {
  fontSize: 14,
  color: color.palette.gray,
}
export const NAME: TextStyle = {
  fontSize: 22,
  color: color.palette.black,
}

export const DETAIL_CONTAINER: ViewStyle = {
  ...ROW,
  borderRadius: 10,
  backgroundColor: color.palette.offGray,
  height: 40,
  width: width - spacing[4] * 2,
  alignSelf: "center",
  alignItems: "center",
  marginVertical: spacing[1],
}

export const MESSAGE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingTop: spacing[4],
}

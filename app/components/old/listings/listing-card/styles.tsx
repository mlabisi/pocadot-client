import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color } from "../../../../theme"

export const CARD_CONTAINER: ViewStyle = {
  justifyContent: "center",
  display: "flex",
  padding: 10,
  margin: 15,
  width: 160,
  height: 240,
  borderRadius: 15,
  backgroundColor: color.palette.white,
  shadowColor: color.palette.black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  elevation: 8,
}

export const TAGS_CONTAINER: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  margin: 10,
}

export const TAG: ViewStyle = {
  paddingHorizontal: 10,
  paddingVertical: 2,
  marginLeft: 2,
  justifyContent: "center",
  alignSelf: "center",
  borderRadius: 100,
  backgroundColor: color.palette.mint,
}

export const CARD_HEADLINE: ViewStyle = {
  alignItems: "center",
  flex: 0.6,
  flexDirection: "column",
}

export const TAG_TEXT: TextStyle = {
  fontSize: 6,
  fontWeight: "600",
  letterSpacing: 0.1,
  color: "rgba(0,0,0,1)",
  textAlign: "center",
  justifyContent: "center",
}

export const LISTING_IDOL: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
  letterSpacing: -0.44,
  color: color.palette.black,
  textAlign: "center",
}

export const LISTING_USERNAME: TextStyle = {
  fontSize: 10,
  fontWeight: "400",
  letterSpacing: -0.2,
  color: "rgba(0,0,0,1)",
  textAlign: "center",
  justifyContent: "center",
}

export const LISTING_IMAGE: ImageStyle = {
  width: 100,
  height: 150,
  alignSelf: "center",
}

export const BADGE: ViewStyle = {
  position: "absolute",
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
export const FEATURED_BADGE: ViewStyle = {
  ...BADGE,
  top: -10,
  left: -10,
}
export const FAVED_BADGE: ViewStyle = {
  ...BADGE,
  top: -10,
  right: -10,
}

export const BADGE_ICON: ImageStyle = {
  width: 14,
  height: 14,
  alignSelf: "center",
}
export const FEATURED_ICON: ImageStyle = {
  ...BADGE_ICON,
}
export const FAVED_ICON: ImageStyle = {
  ...BADGE_ICON,
}

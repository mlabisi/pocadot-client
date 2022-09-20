import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { color } from "../../../theme"

const { width, height } = Dimensions.get("window")

export const CARD_CONTAINER: ViewStyle = {
  alignSelf: "center",
  justifyContent: "center",
  display: "flex",
  borderRadius: 15,
  backgroundColor: color.palette.white,
  shadowColor: color.palette.black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 12.35,
  elevation: 8,
  width: width * 0.75,
  height: height * 0.6,
}

export const TAGS_CONTAINER: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  margin: 10,
}

export const TAG: ViewStyle = {
  paddingHorizontal: 10,
  paddingVertical: 2,
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
  fontSize: 22,
  fontWeight: "600",
  letterSpacing: -0.44,
  color: "rgba(0,0,0,1)",
  textAlign: "center",
}

export const LISTING_DESCRIPTION: TextStyle = {
  fontSize: 12,
  fontWeight: "400",
  letterSpacing: 0.1,
  color: "rgba(163,176,239,1)",
  textAlign: "center",
  justifyContent: "center",
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
  width: 230,
  height: 250,
  alignSelf: "center",
}

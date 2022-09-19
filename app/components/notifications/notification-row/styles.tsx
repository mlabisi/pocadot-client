import { ImageStyle, TextStyle, ViewStyle } from "react-native"

export const CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: 8,
  paddingBottom: 15,
  paddingLeft: 9,
  paddingRight: 9,
}

export const ROW: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingTop: 23,
  paddingBottom: 15,
  paddingLeft: 9,
  paddingRight: 12,
  borderRadius: 10,
  backgroundColor: "rgba(255, 255, 255, 1)",
  shadowColor: "rgba(0,0,0,0.25)",
  elevation: 1,
  shadowOffset: { width: 0, height: 4 },
}

export const INNER_ROW: ViewStyle = {
  display: "flex",
  flexDirection: "row",
}

export const IMAGE: ImageStyle = {
  width: 60,
  height: 60,
  marginRight: 16,
}

export const BODY: ViewStyle = {
  display: "flex",
  flexDirection: "column",
}

export const NOTIFICATION_TITLE: TextStyle = {
  fontSize: 15,
  fontWeight: "500",
  letterSpacing: 0.1,
  color: "rgba(0,0,0,1)",
  marginBottom: 2,
}

export const NOTIFICATION_BODY: TextStyle = {
  fontSize: 12,
  fontWeight: "300",
  letterSpacing: 0.1,
  color: "rgba(0,0,0,1)",
  width: 256,
}

import { Dimensions, ViewStyle } from "react-native"
import { color } from "../../../theme"

const { width } = Dimensions.get("window")

export const ROW: ViewStyle = {
  backgroundColor: color.palette.black,
  flexDirection: "row",
  width,
}

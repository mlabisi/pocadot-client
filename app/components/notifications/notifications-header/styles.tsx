import { Dimensions, TextStyle } from "react-native"
import { color } from "../../../theme"

const { height } = Dimensions.get("window")
export const headerHeight = height * 0.2

export const HEADER_TEXT: TextStyle = {
  color: color.palette.lavender,
  fontSize: 15,
}

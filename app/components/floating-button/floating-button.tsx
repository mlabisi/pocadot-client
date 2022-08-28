import * as React from "react"
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const BUTTON_STYLE: ViewStyle = {
  backgroundColor: color.palette.lavender,
  width: 45,
  height: 45,
  borderRadius: 45,
  flex: 1,
  justifyContent: "center",
}

export interface FloatingButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  onPress: (event: GestureResponderEvent) => void

  children?: React.ReactNode
}

/**
 * Describe your component here
 */
export const FloatingButton = observer(function FloatingButton(props: FloatingButtonProps) {
  const { style, onPress, children } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      <View style={BUTTON_STYLE}>{children}</View>
    </TouchableOpacity>
  )
})

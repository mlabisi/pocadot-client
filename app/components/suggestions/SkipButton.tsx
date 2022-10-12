import * as React from "react"
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native"
import { colors } from "../../theme"
import { Octicons } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"
import { heightPercentageToDP } from "react-native-responsive-screen"

const heightPercent = 5

export interface SkipButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  onPress: (event: GestureResponderEvent) => void
}

/**
 * Skip button for suggestion cards
 */
export const SkipButton = observer(function SkipButton(props: SkipButtonProps) {
  return (
    <TouchableOpacity style={[styles.LeftButton, props.style]} onPress={props.onPress}>
      <Octicons name={"x"} color={colors.palette.other.white} size={heightPercent * 3}/>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  LeftButton: {
    alignItems: "center",
    backgroundColor: colors.error,
    borderRadius: 31,
    display: "flex",
    elevation: 3,
    flexDirection: "column",
    height: heightPercentageToDP(heightPercent),
    justifyContent: "center",
    width: heightPercentageToDP(heightPercent),
  },
})

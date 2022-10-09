import * as React from "react"
import { StyleSheet, StyleProp, ViewStyle, TouchableOpacity, GestureResponderEvent } from "react-native"
import { colors } from "../../theme"
import { Octicons } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"

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
      <Octicons name={"x"} color={colors.palette.other.white} />
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
    height: 25,
    justifyContent: "center",
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    shadowColor: colors.palette.other.black,
    shadowOffset: { width: 0, height: 20 },
    width: 25,
  },
})

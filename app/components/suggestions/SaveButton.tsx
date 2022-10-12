import * as React from "react"
import { StyleSheet, StyleProp, ViewStyle, GestureResponderEvent, TouchableOpacity } from "react-native"
import { colors } from "../../theme"
import { Ionicons } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"
import { heightPercentageToDP } from "react-native-responsive-screen"

const heightPercent = 5

export interface SaveButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  onPress: (event: GestureResponderEvent) => void
}

/**
 * Save button for suggestion cards
 */
export const SaveButton = observer(function SaveButton(props: SaveButtonProps) {
  return (
    <TouchableOpacity style={[styles.RightButton, props.style]} onPress={props.onPress}>
      <Ionicons name={"heart"} color={colors.palette.other.white} size={heightPercent * 3} />
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  RightButton: {
    alignItems: "center",
    backgroundColor: colors.tint,
    borderRadius: 31,
    display: "flex",
    elevation: 3,
    flexDirection: "column",
    height: heightPercentageToDP(heightPercent),
    justifyContent: "center",
    width: heightPercentageToDP(heightPercent),
  },
})
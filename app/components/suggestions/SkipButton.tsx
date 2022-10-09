import * as React from "react"
import { StyleSheet, StyleProp, View, ViewStyle } from "react-native"
import { colors} from "../../theme"
import { Octicons } from "@expo/vector-icons"

export interface SkipButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Skip button for suggestion cards
 */
export default function SkipButton(props: SkipButtonProps) {
  return (
    <View style={[styles.LeftButton, props.style]}>
      <Octicons name={"x"} color={colors.palette.other.white}/>
    </View>
  )
}

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

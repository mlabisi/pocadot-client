import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors} from "../../theme"

export interface LightDividerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const LightDivider = observer(function LightDivider(props: LightDividerProps) {
  return <View style={[styles.ThemeLightDivider, props.style]}></View>
})

const styles = StyleSheet.create({
  ThemeLightDivider: {
    alignSelf: "center",
    backgroundColor: colors.palette.greyscale["300"],
    height: 1,
    marginVertical: 15
  },
})

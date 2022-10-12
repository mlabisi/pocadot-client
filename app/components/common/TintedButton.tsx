import * as React from "react"
import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "../../theme"
import { ReactElement } from "react"

export interface TintedButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  icon: ReactElement

  text: ReactElement

  onPress: (event: GestureResponderEvent) => void
}

/**
 * Describe your component here
 */
export const TintedButton = observer(function TintedButton(props: TintedButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.TintedButton, props.style]}>
      <View style={styles.AutoLayoutHorizontal}>
        {props.icon && props.icon}
        {props.text && props.text}
      </View>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  AutoLayoutHorizontal: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  TintedButton: {
    alignItems: "center",
    backgroundColor: colors.tint,
    borderRadius: 100,
    display: "flex",
    elevation: 2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 10
  }
})

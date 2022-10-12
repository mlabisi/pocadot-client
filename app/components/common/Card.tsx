import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "../../theme"

export interface CardProps {
  style?: StyleProp<ViewStyle>

  width: number

  children: any
}

/**
 * Describe your component here
 */
export const Card = observer(function Card(props: CardProps) {
  return (
    <View style={[styles.Card, props.style, { width: props.width }]}>
      <View style={styles.AutoLayoutVertical}>{props.children}</View>
    </View>
  )
})

const styles = StyleSheet.create({
  AutoLayoutVertical: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: spacing.huge
  },
  Card: {
    alignItems: "center",
    backgroundColor: colors.palette.other.white,
    borderRadius: 30,
    display: "flex",
    elevation: 8,
    flexDirection: "column",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
})

import * as React from "react"
import { StyleProp, StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Shadow } from "./Shadow"
import { colors } from "../theme"

export interface CardProps {
  /**
   * any styles to apply to the container
   */
  containerStyle?: StyleProp<any>

  /**
   * The content to be displayed by the card
   */
  children?: React.ReactNode[] | React.ReactNode
}

/**
 * Describe your component here
 */
export function Card(props: CardProps) {
  return (
    <Shadow level={3} containerStyle={[styles.container, props.containerStyle]}>
      <View style={[styles.container, props.containerStyle]}>{props.children}</View>
    </Shadow>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 245,
    borderRadius: 28,
    backgroundColor: colors.cardBackground,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    elevation: 6,
  },
})

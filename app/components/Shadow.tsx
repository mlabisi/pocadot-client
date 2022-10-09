import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface ShadowProps {
  /**
   * the level/intensity of the shadow (1 - 6)
   */
  level: number

  /**
   * any styles to apply to the container
   */
  containerStyle?: StyleProp<ViewStyle>

  children?: React.ReactNode[] | React.ReactNode
}

/**
 * Describe your component here
 */
export function Shadow(props: ShadowProps) {
  return (
    <View style={[styles[`shadow${props.level}`], props.containerStyle]}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  shadow1: {
    shadowColor: "rgba(4, 6, 15, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    shadowOpacity: 1,
  },
  shadow2: {
    shadowColor: "rgba(4, 6, 15, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    shadowOpacity: 1,
  },
  shadow3: {
    shadowColor: "rgba(4, 6, 15, 0.08)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 100,
    shadowOpacity: 1,
  },
  shadow4: {
    shadowColor: "rgba(67, 83, 255, 0.25)",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowRadius: 24,
    shadowOpacity: 1,
  },
  shadow5: {
    shadowColor: "rgba(67, 83, 255, 0.2)",
    shadowOffset: {
      width: 4,
      height: 12,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
  },
  shadow6: {
    shadowColor: "rgba(67, 83, 255, 0.2)",
    shadowOffset: {
      width: 4,
      height: 16,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
  },
})

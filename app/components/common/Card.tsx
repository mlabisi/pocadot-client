import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors} from "../../theme"

export interface CardProps {

  style?: StyleProp<ViewStyle>

  height: number

  width: number

  children: any
}

/**
 * Describe your component here
 */
export const Card = observer(function Card(props: CardProps) {
  return (
    <View style={[styles.Card, props.style, {width: props.width, height: props.height}]}>
      {props.children}
    </View>
  )
})

const styles = StyleSheet.create({
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

import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors} from "../../theme"

export interface CardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  children: any
}

/**
 * Describe your component here
 */
export const Card = observer(function Card(props: CardProps) {
  return (
    <View style={styles.Card}>
      {props.children}
    </View>
  )
})

const styles = StyleSheet.create({
  Card: {
    alignItems: "center",
    backgroundColor: colors.palette.other.white,
    borderRadius: 28,
    display: "flex",
    elevation: 6,
    flexDirection: "column",
    height: 513.79,
    justifyContent: "center",
    paddingBottom: 23,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    shadowColor: colors.palette.other.black,
    shadowOffset: { width: 0, height: 4 },
    width: 343,
  },
})

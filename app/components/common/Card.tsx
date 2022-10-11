import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors} from "../../theme"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"

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
    elevation: 8,
    flexDirection: "column",
    height: hp(50),
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    width: wp(80),
  },
})

import * as React from "react"
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../../theme"
import { AutoImage, LightDivider, Text } from "../index"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface OfferNotificationProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  image: any

  topLabel: string

  mainLabel: string

  actionLabel: string

  topRightLabel: string

  bottomRightLabel: string
}

/**
 * Describe your component here
 */
export const OfferNotification = observer(function OfferNotification(
  props: OfferNotificationProps,
) {
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <TouchableOpacity>
          <AutoImage style={styles.ImageContainer} source={props.image} />
        </TouchableOpacity>
        <View style={styles.Column}>
          <Text preset={"bodyXS"} style={styles.Label}>
            {props.topLabel}
          </Text>
          <Text preset={"h6"} style={styles.MainLabel}>
            {props.mainLabel}
          </Text>
          <TouchableOpacity>
            <Text preset={"bodyXS"} style={styles.Label}>
              {props.actionLabel}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.RightColumn}>
          <Text preset={"bodyXS"} style={styles.Bold}>
            {props.topRightLabel}
          </Text>
          <Text preset={"bodyXS"} style={styles.Bold}>
            {props.bottomRightLabel}
          </Text>
        </View>
      </View>
      <LightDivider style={styles.Divider} />
    </View>
  )
})

const styles = StyleSheet.create({
  Bold: {
    color: colors.textDim,
    fontFamily: typography.primary.semiBold,
  },
  Column: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    marginRight: spacing.medium,
  },
  Container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: widthPercentageToDP(100) - spacing.medium,
  },
  Divider: {
    marginLeft: spacing.medium,
    width: widthPercentageToDP(100) - spacing.medium,
  },
  ImageContainer: {
    borderRadius: 10,
    height: (widthPercentageToDP(100) - spacing.medium) * 0.1,
    marginHorizontal: spacing.small,
    width: (widthPercentageToDP(100) - spacing.medium) * 0.075,
  },
  Label: {
    color: colors.textDim,
  },
  MainLabel: {
    lineHeight: 30,
  },
  RightColumn: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 120,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
  },
})

import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "../../theme"
import { Icon, IconTypes, LightDivider, Text } from "../index"
import { widthPercentageToDP } from "react-native-responsive-screen"
import { ReactElement } from "react"

const widthPercent = 10

export interface GeneralNotificationProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  description: string

  label: string

  timestamp: string

  icon?: ReactElement

  iconName?: IconTypes

  isNew: boolean
}

/**
 * Describe your component here
 */
export const GeneralNotification = observer(function GeneralNotification(
  props: GeneralNotificationProps,
) {
  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <View style={styles.TopRow}>
          <View style={[styles.Row, styles.TopLeftRow]}>
            {props.icon && <View style={styles.IconContainer}>{props.icon}</View>}
            {props.iconName && (
              <Icon
                containerStyle={styles.IconContainer}
                icon={props.iconName}
                size={widthPercent * 2}
              />
            )}
            <View style={styles.Header}>
              <Text preset={"h6"}>{props.label}</Text>
              <Text preset={"bodyMD"}>{props.timestamp}</Text>
            </View>
          </View>
          <View style={styles.TopRightRow}>
            {props.isNew && (
              <View style={styles.NewTag}>
                <Text preset={"bodyMD"} style={styles.NewTagText}>
                  New!
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={[styles.Row, styles.BottomRow]}>
        <Text preset={"bodySM"} style={styles.Description}>{props.description}</Text>
      </View>
      <LightDivider style={styles.Divider} />
    </View>
  )
})

const styles = StyleSheet.create({
  BottomRow: {
    paddingHorizontal: spacing.medium,
  },
  Container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: widthPercentageToDP(100) - spacing.medium,
  },
  Description: {
    textAlign: "left",
  },
  Divider: {
    width: widthPercentageToDP(100) - spacing.medium,
  },
  Header: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  IconContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.primary["100"],
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: spacing.small,
    padding: spacing.medium,
  },
  NewTag: {
    alignItems: "center",
    backgroundColor: colors.tint,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: spacing.extraSmall,
    paddingVertical: spacing.tiny,
  },
  NewTagText: {
    color: colors.palette.other.white,
  },
  Row: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: spacing.small,
  },
  TopLeftRow: {
    justifyContent: "flex-start",
  },
  TopRightRow: {
    justifyContent: "flex-end",
  },
  TopRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
})

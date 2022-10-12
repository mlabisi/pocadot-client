import * as React from "react"
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "../../theme"
import { Text } from "../index"
import { ReactElement } from "react"
import { Ionicons } from "@expo/vector-icons"

export interface OptionRowProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  icon: ReactElement

  title: string

  description: string
}

/**
 * Describe your component here
 */
export const OptionRow = observer(function OptionRow(props: OptionRowProps) {
  return (
    <TouchableOpacity style={styles.Container}>
      {props.icon && <View style={styles.IconContainer}>{props.icon}</View>}
      <View style={styles.Column}>
        <Text preset={"h6"}>{props.title}</Text>
        <Text preset={"bodySM"} style={{color: colors.palette.greyscale["700"]}}>{props.description}</Text>
      </View>
      <Ionicons name={"chevron-forward"} size={20} />
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  Column: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    marginRight: spacing.small,
  },
  Container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 70,
    justifyContent: "flex-start",
    width: 380,
  },
  IconContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.primary["100"],
    borderRadius: 100,
    display: "flex",
    flexDirection: "column",
    height: 50,
    justifyContent: "center",
    marginLeft: spacing.small,
    marginRight: spacing.small,
    padding:15,
    width: 50,
  },
})

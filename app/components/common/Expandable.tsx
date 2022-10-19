import * as React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../../theme"
import { LightDivider, Text } from "../index"
import { ReactNode, useState } from "react"
import { Ionicons } from "@expo/vector-icons"

export interface ExpandableProps {
  isExpanded?: boolean

  title: string

  children: ReactNode
}

/**
 * Describe your component here
 */
export const Expandable = observer(function Expandable(props: ExpandableProps) {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded ?? false)

  const toggle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <View style={styles.Container}>
      <View style={styles.TitleContainer}>
        <Text preset={"h5"}>{props.title}</Text>
        <TouchableOpacity onPress={toggle}>
          {isExpanded ? (
            <Ionicons name={"chevron-up"} color={colors.tint} size={spacing.large} />
          ) : (
            <Ionicons name={"chevron-down"} color={colors.tint} size={spacing.large} />
          )}
        </TouchableOpacity>
      </View>
      <LightDivider style={styles.Divider}/>
      {props.children}
    </View>
  )
})

const styles = StyleSheet.create({
  Container: {
    alignItems: "flex-start",
    backgroundColor: colors.palette.other.white,
    borderColor: colors.palette.other.offWhite,
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: spacing.large,
    padding: spacing.large,
  },
  Divider: {
    marginVertical: spacing.small
  },
  TitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

import * as React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "../../theme"
import { Text } from "../index"
import { ReactNode } from "react"
import { Ionicons } from "@expo/vector-icons"
import Collapsible from "react-native-collapsible"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface ExpandableProps {
  isExpanded: boolean

  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>

  title: string

  collapsedSubtitle: string

  children: ReactNode
}

/**
 * Describe your component here
 */
export const Expandable = observer(function Expandable({
  children,
  isExpanded,
  setIsExpanded,
  title,
  collapsedSubtitle
}: ExpandableProps) {
  const toggle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <View style={styles.CollapsibleSection}>
      <TouchableOpacity
        onPress={toggle}
        style={[styles.CollapsibleHeader, isExpanded ? styles.CollapsibleHeaderBottom : {}]}
      >
        <View style={styles.TitleText}>
          <Text preset={"h5"}>
            {title}
          </Text>
          <Text preset={"bodyXS"}>
            {collapsedSubtitle}
          </Text>
        </View>

        <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} color={colors.tint} size={24} />
      </TouchableOpacity>

      <Collapsible collapsed={!isExpanded} style={{ width: styles.CollapsibleSection.width }}>
        {children}
      </Collapsible>
    </View>
  )
})

const styles = StyleSheet.create({
  CollapsibleHeader: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CollapsibleHeaderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.palette.greyscale["200"],
    marginBottom: spacing.extraSmall,
    paddingBottom: spacing.extraSmall,
  },
  CollapsibleSection: {
    alignItems: "flex-start",
    backgroundColor: colors.palette.other.white,
    borderColor: colors.palette.greyscale["200"],
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: spacing.large,
    padding: spacing.large,
    width: widthPercentageToDP(100) - spacing.medium,
  },
  TitleText: {
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
})

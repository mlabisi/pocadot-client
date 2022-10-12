import * as React from "react"
import { StyleSheet, StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../../theme"
import { Text } from "../ignite/Text"

export interface ListingTagProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  tag: string
}

/**
 * Describe your component here
 */
export const ListingTag = observer(function ListingTag(props: ListingTagProps) {
  return (
    <View style={[styles.Tag, props.style]}>
      <Text preset={"bodyXXS"} style={styles.TagText}>{props.tag}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  Tag: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: spacing.small,
  },
  TagText: {
    color: colors.tint,
    fontFamily: typography.fonts.urbanist.bold,
  },
})

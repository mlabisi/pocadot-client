import * as React from "react"
import { StyleProp, StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../../theme"
import { Text } from "../"

export interface TabProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  label: string

  index: number

  selectedIndex: number

  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>

  width: number
}

/**
 * Describe your component here
 */
export const Tab = observer(function Tab(props: TabProps) {
  const isSelected = props.selectedIndex === props.index
  return (
    <TouchableWithoutFeedback
      style={{ width: props.width }}
      onPress={() => {
        props.setSelectedIndex(props.index)
      }}
    >
      <View style={{ width: props.width }}>
        <Text style={[styles.Text, isSelected ? styles.SelectedText : {}]}>{props.label}</Text>
        {isSelected && <View style={[styles.SelectedContainer, { width: props.width - spacing.large }]} />}
      </View>
    </TouchableWithoutFeedback>
  )
})

const styles = StyleSheet.create({
  SelectedContainer: {
    alignSelf: "center",
    backgroundColor: colors.tint,
    borderRadius: 100,
    height: 4
  },
  SelectedText: {
    color: colors.tint,
  },
  Text: {
    color: colors.palette.greyscale["500"],
    fontFamily: typography.primary.semiBold,
    textAlign: "center"
  },
})

import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../../theme"
import { LightDivider, Text } from "../index"
import { ReactElement } from "react"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface FormSectionProps {
  title: string

  description?: string

  inputComponent: ReactElement
}

/**
 * Describe your component here
 */
export const FormSection = observer(function FormSection(props: FormSectionProps) {
  return (
    <View style={styles.Container}>
      <Text preset={"h5"} style={styles.Title}>{props.title}</Text>
      {props.description ? <Text preset={"bodyXS"}>{props.description}</Text> : null}
      {props.inputComponent}
    </View>
  )
})

const styles = StyleSheet.create({
  Container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: spacing.medium,
    marginVertical: spacing.extraSmall,
  },
  Title: {
   marginTop: spacing.small
  }
})

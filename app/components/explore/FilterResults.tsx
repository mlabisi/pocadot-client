import * as React from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../../theme"
import { Card, LightDivider, Text } from "../index"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"

const cardWidth = wp(70)

export interface FilterResultsProps {}

/**
 * Describe your component here
 */
export const FilterResults = observer(function FilterResults(props: FilterResultsProps) {
  return (
    <Card width={cardWidth}>
      <Text preset={"bodyMD"}>A-Z</Text>
      <LightDivider />

      <Text preset={"bodyMD"}>Recently Listed</Text>
      <LightDivider />

      <Text preset={"bodyMD"}>Price Low to High</Text>
      <LightDivider />

      <Text preset={"bodyMD"}>Price High to Low</Text>
      <LightDivider />

      <Text preset={"bodyMD"}>Oldest</Text>
      <LightDivider />
    </Card>
  )
})

const styles = StyleSheet.create({})

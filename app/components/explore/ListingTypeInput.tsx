import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing} from "../../theme"
import { FormSection, Text, Toggle } from "../index"

export interface ListingTypeInputProps {
  wtsEnabled: boolean
  setWtsEnabled: React.Dispatch<React.SetStateAction<boolean>>
  wttEnabled: boolean
  setWttEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Describe your component here
 */
export const ListingTypeInput = observer(function ListingTypeInput({
  setWtsEnabled,
  setWttEnabled,
  wtsEnabled,
  wttEnabled,
}: ListingTypeInputProps) {
  return (
    <FormSection
      title={"Listing Type"}
      description={
        "Whether you would like to list your item as for sale or as available to trade. You can mark your listing as both if you’d like!"
      }
      inputComponent={
        <View style={styles.InputWrapper}>
          <Toggle
            variant={"checkbox"}
            value={wtsEnabled}
            onValueChange={setWtsEnabled}
            containerStyle={styles.CheckboxContainer}
          />
          <Text preset={"bodyXS"} style={styles.CheckboxLabel}>
            WTS (Want To Sell)
          </Text>
          <Toggle
            variant={"checkbox"}
            value={wttEnabled}
            onValueChange={setWttEnabled}
            containerStyle={styles.CheckboxContainer}
          />
          <Text preset={"bodyXS"} style={styles.CheckboxLabel}>
            WTT (Want To Trade)
          </Text>
        </View>
      }
    />
  )
})

const styles = StyleSheet.create({
  CheckboxContainer: {
    paddingRight: spacing.tiny,
  },
  CheckboxLabel: {
    paddingRight: spacing.small,
  },
  InputWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: spacing.extraSmall,
  },
})

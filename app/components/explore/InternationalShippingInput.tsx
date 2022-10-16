import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing} from "../../theme"
import { FormSection, Text, Toggle } from "../index"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface InternationalShippingInputProps {
  internationalShippingEnabled: boolean
  setInternationalShippingEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Describe your component here
 */
export const InternationalShippingInput = observer(function InternationalShippingInput({
  internationalShippingEnabled,
  setInternationalShippingEnabled,
}: InternationalShippingInputProps) {
  return (
    <FormSection
      title={"International Shipping"}
      inputComponent={
        <View style={styles.Row}>
          <Text preset={"bodySM"} style={styles.SwitchLabel}>
            Are you willing to ship outside of USA/CA?
          </Text>
          <Toggle
            variant={"switch"}
            value={internationalShippingEnabled}
            onValueChange={setInternationalShippingEnabled}
          />
        </View>
      }
    />
  )
})

const styles = StyleSheet.create({
  Row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.medium,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
  SwitchLabel: {
    width: widthPercentageToDP(70),
  },
})

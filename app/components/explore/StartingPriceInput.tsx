import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing} from "../../theme"
import { FormSection, TextField } from "../index"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface StartingPriceInputProps {}

/**
 * Describe your component here
 */
export const StartingPriceInput = observer(function StartingPriceInput(
  props: StartingPriceInputProps,
) {
  return (
    <FormSection
      title={"Starting Price"}
      description={"What’s the lowest amount you’d be willing to accept for this photocard?"}
      inputComponent={
        <View style={{ marginTop: spacing.extraSmall }}>
          <TextField
            placeholder={"Ex: $25"}
            inputWrapperStyle={styles.InputWrapper}
            style={styles.InputStyle}
          />
        </View>
      }
    />
  )
})

const styles = StyleSheet.create({
  InputStyle: {
    fontSize: spacing.small,
    marginHorizontal: 0,
  },
  InputWrapper: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: spacing.extraSmall,
    padding: spacing.small,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
})

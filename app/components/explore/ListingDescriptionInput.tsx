import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing} from "../../theme"
import { FormSection, TextField } from "../index"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface ListingDescriptionInputProps {}

/**
 * Describe your component here
 */
export const ListingDescriptionInput = observer(function ListingDescriptionInput() {
  return (
    <FormSection
      title={"Description"}
      description={
        "This description will be included on your listing’s detail page underneath the image."
      }
      inputComponent={
        <View style={{ marginTop: spacing.extraSmall }}>
          <TextField
            multiline={true}
            placeholder={"Provide a detailed description of the photocard you're listing. If you'd like to trade, be sure to provide a description of what kind of photocard you're looking for."}
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
    padding: spacing.extraSmall,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
})

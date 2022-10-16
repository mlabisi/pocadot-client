import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing} from "../../theme"
import { FormSection, TextField } from "../index"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface ReleaseInputProps {

}

/**
 * Describe your component here
 */
export const ReleaseInput = observer(function ReleaseInput(props: ReleaseInputProps) {
  return (
    <FormSection
      title={"Era / Release"}
      description={
        "Share the name of the album, season’s greetings, era, etc that this photocard came from."
      }
      inputComponent={
        <View style={{ marginTop: spacing.extraSmall }}>
          <TextField
            placeholder={"Ex: Album Version A, Season's Greetings '22, Fanmade, etc..."}
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

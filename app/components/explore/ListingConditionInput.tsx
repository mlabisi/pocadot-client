import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing} from "../../theme"
import { FormSection, Text } from "../index"
import { widthPercentageToDP } from "react-native-responsive-screen"
import { AirbnbRating } from "react-native-ratings"

const conditionStrings = ["Damaged", "Okay", "Great", "Like New", "Unopened"]

export interface ListingConditionInputProps {
  condition: number
  setCondition: React.Dispatch<React.SetStateAction<number>>
}

/**
 * Describe your component here
 */
export const ListingConditionInput = observer(function ListingConditionInput({
  condition,
  setCondition,
}: ListingConditionInputProps) {
  return (
    <FormSection
      title={"Condition"}
      inputComponent={
        <View
          style={styles.InputWrapper}
        >
          <AirbnbRating
            reviews={conditionStrings}
            selectedColor={colors.tint}
            /*
            // @ts-ignore */
            unSelectedColor={colors.palette.greyscale["400"]}
            showRating={false}
            size={spacing.large}
            onFinishRating={(value) => setCondition(value)}
            starContainerStyle={styles.StarContainerStyle}
          />
          <Text preset={"bodySM"}>{conditionStrings[condition - 1]}</Text>
        </View>
      }
    />
  )
})

const styles = StyleSheet.create({
  InputWrapper: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.medium,
    padding: spacing.medium,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
  StarContainerStyle: {
    marginVertical: spacing.extraSmall,
  }
})

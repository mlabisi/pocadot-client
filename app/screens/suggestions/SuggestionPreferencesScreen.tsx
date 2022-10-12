import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { Icon, LightDivider, OptionRow, Screen, Text, Toggle } from "../../components"
import { colors, spacing, typography } from "../../theme"
import { widthPercentageToDP } from "react-native-responsive-screen"

export const SuggestionPreferencesScreen: FC<
  StackScreenProps<AppStackParamList, "SuggestionPreferences">
> = observer(function SuggestionPreferencesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [biasesOnlyMode, setBiasesOnlyMode] = useState(false)

  return (
    <Screen preset={"scroll"}>
      <View style={styles.Container}>
        <Text preset={"bodySM"} style={styles.SectionTitle}>
          Personal Preferences
        </Text>
        <View style={styles.Column}>
          <LightDivider style={styles.Divider} />
          <OptionRow
            iconName={"fingerHeart"}
            title={"My Biases"}
            description={"Update your biases to help pocadot make better recommendations!"}
          />
        </View>
      </View>
      <View style={styles.Container}>
        <Text preset={"bodySM"} style={styles.SectionTitle}>
          Recommendation Preferences
        </Text>
        <View style={styles.Column}>
          <LightDivider style={styles.Divider} />
          <View style={styles.Row}>
            <Text preset={"bodySM"} style={styles.SwitchLabel}>
              Only show me listings that feature one of my biases
            </Text>
            <Toggle variant={"switch"} value={biasesOnlyMode} onValueChange={setBiasesOnlyMode} />
          </View>
        </View>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  Column: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: widthPercentageToDP(100),
  },
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: spacing.large,
  },
  Divider: {
    paddingHorizontal: spacing.medium,
    width: widthPercentageToDP(100) - (spacing.large)
  },
  Row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.small,
    width: widthPercentageToDP(100),
  },
  SectionTitle: {
    color: colors.textDim,
    fontFamily: typography.primary.bold,
    paddingHorizontal: spacing.small,
  },
  SwitchLabel: {
    width: widthPercentageToDP(70),
  },
})

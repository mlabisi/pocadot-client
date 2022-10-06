import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList, AuthNavigatorParamList } from "../navigators"
import { Screen, Text } from "../components"

export const OnboardingScreen: FC<StackScreenProps<AuthNavigatorParamList, "Onboarding">> = observer(function OnboardingScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="fixed">
      <Text text="onboarding" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

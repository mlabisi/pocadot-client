import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useQuery } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.primary,
  flex: 1,
}

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(function WelcomeScreen() {
  // Pull in one of our MST-GQL stores
  // const { store, error, loading, data } = useQuery((store) =>
  //   store.queryMessages()
  // )

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={ROOT} testID="welcomeScreen">
      <Screen style={ROOT}>
        <Text preset="header" tx="welcomeScreen.appName" />
        <Text preset="default" tx="welcomeScreen.tagline" />
        <Button tx="welcomeScreen.signIn"></Button>
        <Button tx="welcomeScreen.signUp"></Button>
      </Screen>
    </View>
  )
})

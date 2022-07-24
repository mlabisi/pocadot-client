import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Screen, Text } from "../../components"
// import { useQuery } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.primary,
  flex: 1,
}

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.white,
  borderRadius: 100
}

const BUTTON_TEXT: TextStyle = {
  color: color.palette.lavender
}

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  function WelcomeScreen({ navigation }) {
    // Pull in one of our MST-GQL stores
    // const { store, error, loading, data } = useQuery((store) =>
    //   store.queryMessages()
    // )

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const signInScreen = () => navigation.navigate("signIn")
    const signUpScreen = () => navigation.navigate("signUp")

    return (
      <View style={ROOT} testID="welcomeScreen">
        <Screen style={ROOT} preset="fixed" >
          <Text preset="header" tx="welcomeScreen.appName" />
          <Text preset="default" tx="welcomeScreen.tagline" />
          <Button tx="welcomeScreen.signIn" testID="signInButton" onPress={signInScreen} style={BUTTON} textStyle={BUTTON_TEXT}></Button>
          <Button tx="welcomeScreen.signUp" testID="signUpButton" onPress={signUpScreen} style={BUTTON} textStyle={BUTTON_TEXT}></Button>
        </Screen>
      </View>
    )
  },
)

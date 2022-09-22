import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { Button, Screen, Spacer, Text } from "../../../components"
import { BUTTON, BUTTON_CONTAINER, BUTTON_TEXT, HEADER_TEXT, ROOT, SCREEN } from "./styles"

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  function WelcomeScreen({ navigation }) {
    const signInScreen = () => navigation.navigate("signIn")
    const signUpScreen = () => navigation.navigate("signUp")

    return (
      <SafeAreaView style={ROOT} testID="welcomeScreen">
        <Screen style={SCREEN} preset="fixed">
          <Spacer n={3} />
          <Text preset="header" tx="welcomeScreen.appName" style={HEADER_TEXT} />
          <Text preset="default" tx="welcomeScreen.tagline" />
          <Spacer n={0.5} />
          <View style={BUTTON_CONTAINER}>
            <Button
              tx="welcomeScreen.signIn"
              testID="signInButton"
              onPress={signInScreen}
              style={BUTTON}
              textStyle={BUTTON_TEXT}
            ></Button>
            <Spacer n={0.05} />
            <Button
              tx="welcomeScreen.signUp"
              testID="signUpButton"
              onPress={signUpScreen}
              style={BUTTON}
              textStyle={BUTTON_TEXT}
            ></Button>
          </View>
          <Spacer n={2.5} />
        </Screen>
      </SafeAreaView>
    )
  },
)

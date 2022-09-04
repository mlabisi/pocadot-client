import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { AutoImage, Button, FormRow, Screen, Spacer, Text, TextField } from "../../../components"
import {
  BUTTON,
  BUTTON_CONTAINER,
  DESCRIPTION,
  FORM_LABEL,
  FORM_ROW,
  INPUT,
  LINK_BUTTON,
  LINK_TEXT,
  POCADOT_CIRCLE,
  ROOT,
  SCREEN,
} from "./styles"

const pocadotCircle = require("../../assets/pocadot-circle.png")

export const SignUpScreen: FC<StackScreenProps<NavigatorParamList, "signUp">> = observer(
  function SignUpScreen({ navigation }) {
    const nextScreen = () => navigation.navigate("setPreferences")
    const signIn = () => {
      navigation.popToTop()
      navigation.navigate("signIn")
    }

    return (
      <SafeAreaView style={ROOT} testID="signUpScreen">
        <Screen style={SCREEN} preset="fixed">
          <AutoImage source={pocadotCircle} style={POCADOT_CIRCLE} />
          <Text style={FORM_LABEL} preset="header" tx="signUp.formLabel" />
          <Spacer n={0.1} />
          <FormRow preset="top" style={FORM_ROW}>
            <TextField inputStyle={INPUT} placeholderTx="signUp.email" />
          </FormRow>
          <FormRow preset="bottom" style={FORM_ROW}>
            <TextField inputStyle={INPUT} placeholderTx="signUp.password" />
          </FormRow>
          <Spacer n={0.1} />
          <View style={BUTTON_CONTAINER}>
            <Spacer n={0.3} />
            <Button
              tx="signUp.continue"
              testID="signUpBtn"
              onPress={() => {
                nextScreen()
              }}
              style={BUTTON}
            />
            <Spacer n={0.3} />
          </View>
          <Spacer n={0.1} />
          <Text tx="signUp.signUpPrompt" style={DESCRIPTION} />
          <Button
            tx="signUp.switchToSignIn"
            style={LINK_BUTTON}
            textStyle={LINK_TEXT}
            testID="switchToSignInBtn"
            onPress={signIn}
          />
        </Screen>
      </SafeAreaView>
    )
  },
)

import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Button, FormRow, Screen, Spacer, Text, TextField } from "../../components"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const pocadotCircle = require("../assets/pocadot-circle.png")

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
}

const SCREEN: ViewStyle = {
  flex: 1,
  flexDirection: "column",
}

const BUTTON_CONTAINER: ViewStyle = {
  flex: 0.1,
  flexDirection: "column",
  alignItems: "center",
}

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.lavender,
  borderRadius: 100,
}

const LINK_BUTTON: ViewStyle = {
  backgroundColor: color.transparent,
}

const LINK_TEXT: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: color.palette.lavender,
}

const FORM_ROW: TextStyle = {
  borderColor: color.palette.lavender,
  paddingVertical: 0,
}

const FORM_LABEL: TextStyle = {
  color: color.palette.black,
  alignSelf: "center",
}

const DESCRIPTION: TextStyle = {
  color: color.palette.gray,
  alignSelf: "center",
}

const INPUT: TextStyle = {
  color: color.palette.gray,
}

const POCADOT_CIRCLE: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 100,
  height: 100,
}

export const SignUpScreen: FC<StackScreenProps<NavigatorParamList, "signUp">> = observer(
  function SignUpScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const nextScreen = () => navigation.navigate("welcome")
    const signIn = () => navigation.navigate("signIn")

    return (
      <View style={ROOT} testID="signUpScreen">
        <Spacer n={0.1} />
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
            <Button tx="signUp.continue" testID="signUpBtn" onPress={nextScreen} style={BUTTON} />
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
        <Spacer n={0.1} />
      </View>
    )
  },
)

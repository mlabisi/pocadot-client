import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Button, FormRow, Screen, Text, TextField } from "../../components"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const pocadotCircle = require('../assets/pocadot-circle.png')

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.lavender,
  borderRadius: 100
}

const LINK_BUTTON: ViewStyle = {
  backgroundColor: color.transparent
}

const LINK_TEXT: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  color: color.palette.lavender
}

const FORM_ROW: TextStyle = {
  borderColor: color.palette.lavender
}

const FORM_LABEL: TextStyle = {
  color: color.palette.black
}

const DESCRIPTION: TextStyle = {
  color: color.palette.gray
}

const INPUT: TextStyle = {
  color: color.palette.gray
}

const POCADOT_CIRCLE: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 100,
  height: 100,
}

export const SignInScreen: FC<StackScreenProps<NavigatorParamList, "signIn">> = observer(
  function SignInScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const nextScreen = () => navigation.navigate("welcome")
    const signUp = () => navigation.navigate("signUp")

    return (
      <View style={ROOT} testID="signInScreen">
        <Screen style={ROOT} preset="fixed">
          <AutoImage source={pocadotCircle} style={POCADOT_CIRCLE}/>
          <Text style={FORM_LABEL} preset="header" tx="signIn.formLabel" />
          <FormRow preset="top" style={FORM_ROW}>
            <TextField
              inputStyle={INPUT}
              labelTx="signIn.email"
              placeholderTx="signIn.emailPlaceholder"
            />
          </FormRow>
          <FormRow preset="bottom" style={FORM_ROW}>
            <TextField
              inputStyle={INPUT}
              labelTx="signIn.password"
              placeholderTx="signIn.passwordPlaceholder"
            />
          </FormRow>
          <Button tx="signIn.continue" testID="signInBtn" onPress={nextScreen} style={BUTTON}/>
          <Text tx="signIn.signUpPrompt" style={DESCRIPTION} />
          <Button tx="signIn.switchToSignUp" style={LINK_BUTTON} textStyle={LINK_TEXT} testID="switchToSignUpBtn" onPress={signUp} />
        </Screen>
      </View>
    )
  },
)

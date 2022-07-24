import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Screen, Spacer, Text } from "../../components"
// import { useQuery } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.primary,
  flex: 8,
  flexDirection: "column",
  alignItems: "center",
}

const BUTTON_CONTAINER: ViewStyle = {
  flex: 3,
  flexDirection: "row",
  alignItems: "center"
}

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.white,
  borderRadius: 100,
}

const BUTTON_TEXT: TextStyle = {
  color: color.palette.lavender,
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
        <Screen style={ROOT} preset="fixed">
          <Spacer n={3}/>
          <Text preset="header" tx="welcomeScreen.appName" />
          <Text preset="default" tx="welcomeScreen.tagline" />
          <Spacer n={0.5}/>
          <View style={BUTTON_CONTAINER}>
            <Button tx="welcomeScreen.signIn" testID="signInButton" onPress={signInScreen} style={BUTTON}
                    textStyle={BUTTON_TEXT}></Button>
            <Spacer n={0.05}/>
            <Button tx="welcomeScreen.signUp" testID="signUpButton" onPress={signUpScreen} style={BUTTON}
                    textStyle={BUTTON_TEXT}></Button>
          </View>
          <Spacer n={2.5}/>
        </Screen>
      </View>
    )
  },
)

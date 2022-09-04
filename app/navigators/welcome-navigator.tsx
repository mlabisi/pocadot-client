import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SetPreferencesScreen, SignInScreen, SignUpScreen, WelcomeScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { TabNav } from "./"

const WelcomeStack = createNativeStackNavigator<NavigatorParamList>()
export const WelcomeNav = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcome"
    >
      <WelcomeStack.Screen name="welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen name="signIn" component={SignInScreen} />
      <WelcomeStack.Screen name="signUp" component={SignUpScreen} />
      <WelcomeStack.Screen name="setPreferences" component={SetPreferencesScreen} />
      <WelcomeStack.Screen name="tabs" component={TabNav} />
    </WelcomeStack.Navigator>
  )
}

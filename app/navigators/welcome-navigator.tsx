import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PreferencesScreen, SignInScreen, SignUpScreen, WelcomeScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { MainNav } from "./tab-navigator"
import { PreferencesHeader } from "../components"

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
      <WelcomeStack.Screen
        name={"preferences"}
        component={PreferencesScreen}
        options={{
          headerShown: true,
          header: () => {
            return <PreferencesHeader modifyPreferences={false} />
          },
        }}
      />
      <WelcomeStack.Screen name="tabs" component={MainNav} />
    </WelcomeStack.Navigator>
  )
}

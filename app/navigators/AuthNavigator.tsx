import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  OnboardingScreen,
} from "../screens"

export type AuthNavigatorParamList = {
  Onboarding: undefined
}

const Stack = createStackNavigator<AuthNavigatorParamList>()
export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  )
}

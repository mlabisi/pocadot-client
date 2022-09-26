import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { MainNav } from "./tab-navigator"

const WelcomeStack = createNativeStackNavigator<NavigatorParamList>()
export const WelcomeNav = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="tabs"
    >
      <WelcomeStack.Screen name="tabs" component={MainNav} />
    </WelcomeStack.Navigator>
  )
}

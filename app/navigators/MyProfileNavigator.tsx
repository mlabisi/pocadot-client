import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  WelcomeScreen
} from "../screens"

export type MyProfileNavigatorParamList = {
  Demo: undefined
}

const Stack = createStackNavigator<MyProfileNavigatorParamList>()
export const MyProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="Demo" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

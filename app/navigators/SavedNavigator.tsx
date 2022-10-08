import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  WelcomeScreen
} from "../screens"

export type SavedNavigatorParamList = {
  Demo: undefined
}

const Stack = createStackNavigator<SavedNavigatorParamList>()
export const SavedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="Demo" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

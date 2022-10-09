import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  WelcomeScreen
} from "../screens"

export type SavedNavigatorParamList = {
  Saved: undefined
}

const Stack = createStackNavigator<SavedNavigatorParamList>()
export const SavedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="Saved" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

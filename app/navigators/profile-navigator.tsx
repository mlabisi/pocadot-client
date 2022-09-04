import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ProfileScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"

const ProfileStack = createNativeStackNavigator<NavigatorParamList>()
export const ProfileNav = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="profile"
    >
      <ProfileStack.Screen name="profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

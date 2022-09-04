import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MyProfileScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { MyProfileHeader } from "../components"

const MyProfileStack = createNativeStackNavigator<NavigatorParamList>()
export const MyProfileNav = () => {
  return (
    <MyProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="myProfile"
    >
      <MyProfileStack.Screen
        name="myProfile"
        component={MyProfileScreen}
        options={{
          headerShown: true,
          header: () => {
            return <MyProfileHeader />
          },
        }}
      />
    </MyProfileStack.Navigator>
  )
}

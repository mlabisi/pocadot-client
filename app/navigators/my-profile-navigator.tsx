import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  ListingDetailScreen,
  ModifyPreferencesScreen,
  MyListingsScreen,
  MyProfileScreen,
} from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { MyListingsHeader, ModifyPreferencesHeader } from "../components"

const MyProfileStack = createNativeStackNavigator<NavigatorParamList>()
export const MyProfileNav = () => {
  return (
    <MyProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="myProfile"
    >
      <MyProfileStack.Screen name="myProfile" component={MyProfileScreen} />
      <MyProfileStack.Screen
        name={"myListings"}
        component={MyListingsScreen}
        options={{
          headerShown: true,
          header: () => {
            return <MyListingsHeader />
          },
        }}
      />
      <MyProfileStack.Screen name="listingDetail" component={ListingDetailScreen} />
      <MyProfileStack.Screen
        name={"modifyPreferences"}
        component={ModifyPreferencesScreen}
        options={{
          headerShown: true,
          header: () => {
            return <ModifyPreferencesHeader />
          },
        }}
      />
    </MyProfileStack.Navigator>
  )
}

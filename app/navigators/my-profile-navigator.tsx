import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  ListingDetailScreen,
  PreferencesScreen,
  MyListingsScreen,
  MyProfileScreen,
  AddListingScreen,
} from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { MyListingsHeader, PreferencesHeader } from "../components"

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
        name="addListing"
        component={AddListingScreen}
        options={{ headerShown: false }}
      />
      <MyProfileStack.Screen
        name={"preferences"}
        component={PreferencesScreen}
        options={{
          headerShown: true,
          header: () => {
            return <PreferencesHeader modifyPreferences={true} />
          },
        }}
      />
    </MyProfileStack.Navigator>
  )
}

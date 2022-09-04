import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ListingsNav } from "./listings-navigator"
import { FavesNav } from "./faves-navigator"
import { ChatsNav } from "./chats-navigator"
import { MyProfileNav } from "./my-profile-navigator"
import { NavigatorParamList } from "./app-navigator"

const AppTab = createBottomTabNavigator<NavigatorParamList>()
export const TabNav = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="listingsTab"
    >
      <AppTab.Screen name="listingsTab" component={ListingsNav} />
      <AppTab.Screen name="favesTab" component={FavesNav} />
      <AppTab.Screen name="chatsTab" component={ChatsNav} />
      <AppTab.Screen name="profileTab" component={MyProfileNav} />
    </AppTab.Navigator>
  )
}

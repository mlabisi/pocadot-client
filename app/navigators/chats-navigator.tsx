import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ChatsScreen, ListingDetailScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"

const ChatsStack = createNativeStackNavigator<NavigatorParamList>()
export const ChatsNav = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="chats"
    >
      <ChatsStack.Screen name="chats" component={ChatsScreen} />
      <ChatsStack.Screen name="chatDetail" component={ListingDetailScreen} />
    </ChatsStack.Navigator>
  )
}

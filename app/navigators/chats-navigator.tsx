import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ChatsScreen, ChatDetailScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { ChatsHeader } from "../components"

const ChatsStack = createNativeStackNavigator<NavigatorParamList>()
export const ChatsNav = () => {
  return (
    <ChatsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="chats"
    >
      <ChatsStack.Screen
        name="chats"
        component={ChatsScreen}
        options={{
          headerShown: true,
          header: () => {
            return <ChatsHeader />
          },
        }}
      />
      <ChatsStack.Screen name="chatDetail" component={ChatDetailScreen} />
    </ChatsStack.Navigator>
  )
}

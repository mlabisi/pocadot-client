import React from "react"
import {
  WelcomeScreen
} from "../screens"
import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack"
import { Header } from "../components"
import { Ionicons } from "@expo/vector-icons"
import { colors, spacing } from "../theme"

export type SavedNavigatorParamList = {
  SavedScreen: undefined
}

const Stack = createNativeStackNavigator<SavedNavigatorParamList>()
export const SavedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: NativeStackHeaderProps) => (
          <Header
            titleTx={"saved.title"}
            RightActionComponent={
              <Ionicons
                name={"notifications-outline"}
                size={20}
                color={colors.tint}
                style={{ paddingLeft: spacing.medium }}
              />
            }
          />
        ),
      }}
    >
      <Stack.Screen
        name="SavedScreen"
        component={WelcomeScreen}
        options={{
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  )
}

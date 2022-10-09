import React from "react"
import { Header } from "../components"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors, spacing } from "../theme"
import { WelcomeScreen } from "../screens"
import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack"

export type SuggestionsNavigatorParamList = {
  SuggestionsScreen: undefined
  Preferences: undefined
}

const Stack = createNativeStackNavigator<SuggestionsNavigatorParamList>()
export const SuggestionsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: NativeStackHeaderProps) => (
          <Header
            titleTx={"suggestions.title"}
            LeftActionComponent={
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Preferences")
                }}
              >
                <Ionicons name={"options-outline"} size={20} color={colors.tint} />
              </TouchableOpacity>
            }
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
      <Stack.Screen name="SuggestionsScreen" component={WelcomeScreen} />
      <Stack.Screen
        name="Preferences"
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
            <Header
              titleTx={"suggestions.preferences.title"}
              titleMode={"flex"}
              LeftActionComponent={
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

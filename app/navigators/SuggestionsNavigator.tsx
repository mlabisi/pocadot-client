import React from "react"
import { createStackNavigator, StackHeaderProps } from "@react-navigation/stack"
import { SuggestionPreferencesScreen, SuggestionsScreen } from "../screens"
import { Header } from "../components"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors, spacing } from "../theme"

export type SuggestionsNavigatorParamList = {
  SuggestionsScreen: undefined
  Preferences: undefined
}

const Stack = createStackNavigator<SuggestionsNavigatorParamList>()
export const SuggestionsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        header: (props: StackHeaderProps) => (
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
      <Stack.Screen name="SuggestionsScreen" component={SuggestionsScreen} />
      <Stack.Screen
        name="Preferences"
        component={SuggestionPreferencesScreen}
        options={{
          header: (props: StackHeaderProps) => (
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

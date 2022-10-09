import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors } from "../theme"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { SuggestionsNavigator } from "./SuggestionsNavigator"
import { ExploreNavigator } from "./ExploreNavigator"
import { SavedNavigator } from "./SavedNavigator"
import { MyProfileNavigator } from "./MyProfileNavigator"
import { MoreNavigator } from "./MoreNavigator"

export type MainNavigatorParamList = {
  Suggestions: undefined
  Explore: undefined
  Saved: undefined
  MyProfile: undefined
  More: undefined
}

const Tab = createBottomTabNavigator<MainNavigatorParamList>()
export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName

          switch (route.name) {
            case "Suggestions":
              iconName = focused
                ? "cards-playing-heart-multiple"
                : "cards-playing-heart-multiple-outline"
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  color={focused ? colors.tint : colors.palette.greyscale["500"]}
                  size={24}
                />
              )
            case "Explore":
              iconName = focused ? "search" : "search-outline"
              break
            case "Saved":
              iconName = focused ? "heart" : "heart-outline"
              break
            case "MyProfile":
              iconName = focused ? "person" : "person-outline"
              break
            case "More":
              iconName = focused
                ? "ellipsis-horizontal-circle-sharp"
                : "ellipsis-horizontal-circle-outline"
              break
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? colors.tint : colors.palette.greyscale["500"]}
              size={24}
            />
          )
        },
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.palette.greyscale["500"],
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Suggestions"
        component={SuggestionsNavigator}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedNavigator}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileNavigator}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreNavigator}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

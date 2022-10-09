import React from "react"
import { BottomTabHeaderProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AuthNavigator } from "./AuthNavigator"
import { colors, spacing } from "../theme"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { Header } from "../components"
import { SuggestionsNavigator } from "./SuggestionsNavigator"
import { ExploreNavigator } from "./ExploreNavigator"

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
        component={AuthNavigator}
        options={{
          header: (props: BottomTabHeaderProps) => (
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
      />
      <Tab.Screen
        name="MyProfile"
        component={AuthNavigator}
        options={{
          header: (props: BottomTabHeaderProps) => (
            <Header
              titleTx={"myProfile.title"}
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
      />
      <Tab.Screen
        name="More"
        component={AuthNavigator}
        options={{
          header: (props: BottomTabHeaderProps) => (
            <Header
              titleTx={"more.title"}
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
      />
    </Tab.Navigator>
  )
}

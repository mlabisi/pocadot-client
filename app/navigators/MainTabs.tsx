import React from "react"
import { BottomTabHeaderProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors, spacing } from "../theme"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { ExploreNavigator } from "./ExploreNavigator"
import { SavedNavigator } from "./SavedNavigator"
import { MyProfileNavigator } from "./MyProfileNavigator"
import { MoreNavigator } from "./MoreNavigator"
import { WelcomeScreen } from "../screens"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { Header } from "../components"
import { TouchableOpacity } from "react-native"

export type MainNavigatorParamList = {
  SuggestionsScreen: undefined
  Explore: undefined
  Saved: undefined
  MyProfile: undefined
  More: undefined
}

const Tab = createBottomTabNavigator<MainNavigatorParamList>()
export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName

          switch (route.name) {
            case "SuggestionsScreen":
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
      <Tab.Screen name="SuggestionsScreen" component={WelcomeScreen} options={{header: (props: BottomTabHeaderProps) => (
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
        ),}}/>

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

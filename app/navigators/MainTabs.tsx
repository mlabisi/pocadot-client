import React from "react"
import { BottomTabHeaderProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors, spacing } from "../theme"
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons"
import { WelcomeScreen } from "../screens"
import { Header } from "../components"
import { TouchableOpacity } from "react-native"

export type MainNavigatorParamList = {
  SuggestionsScreen: undefined
  ExploreScreen: undefined
  SavedScreen: undefined
  MyProfileScreen: undefined
  MoreScreen: undefined
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
            case "ExploreScreen":
              iconName = focused ? "search" : "search-outline"
              break
            case "SavedScreen":
              iconName = focused ? "heart" : "heart-outline"
              break
            case "MyProfileScreen":
              iconName = focused ? "person" : "person-outline"
              break
            case "MoreScreen":
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
      <Tab.Screen name="SuggestionsScreen" component={WelcomeScreen} options={{
        header: (props: BottomTabHeaderProps) => (
          <Header
            titleTx={"suggestions.title"}
            LeftActionComponent={
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("SuggestionPreferences")
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
      }} />
      <Tab.Screen name="ExploreScreen" component={WelcomeScreen} options={{
        header: (props: BottomTabHeaderProps) => (
          <Header
            titleTx={"explore.title"}
            LeftActionComponent={
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("AddListing")
                }}
              >
                <Octicons
                  name={"diff-added"}
                  size={20}
                  color={colors.tint}
                  style={{ paddingLeft: spacing.medium }}
                />
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
      }} />
      <Tab.Screen name="SavedScreen" component={WelcomeScreen} options={{
          header: () => (
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
        }} />
      <Tab.Screen name="MyProfileScreen" component={WelcomeScreen} options={{
          header: (props: BottomTabHeaderProps) => (
            <Header
              titleTx={"myProfile.title"}
              LeftActionComponent={
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("EditProfile")
                  }}
                >
                  <MaterialCommunityIcons
                    name={"pencil-box-outline"}
                    size={20}
                    color={colors.tint}
                    style={{ paddingLeft: spacing.medium }}
                  />
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
        }} />
      <Tab.Screen name="MoreScreen" component={WelcomeScreen} options={{
          header: () => (
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
        }} />
    </Tab.Navigator>
  )
}

import React from "react"
import { createStackNavigator, StackHeaderProps } from "@react-navigation/stack"
import { AuthNavigator } from "./AuthNavigator"
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs"
import { Header } from "../components"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { colors, spacing, typography } from "../theme"
import { AddListingScreen, CurationScreen, ExploreScreen, SearchScreen } from "../screens"
import { TouchableOpacity } from "react-native"

export type ExploreNavigatorParamList = {
  ExploreScreen: undefined
  AddListing: undefined
  Curation: undefined
  FeaturedListings: undefined
  Search: undefined
}

const Stack = createStackNavigator<ExploreNavigatorParamList>()
export const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
        header: (props: StackHeaderProps) => (
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
      }}
    >
      <Stack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="AddListing"
        component={AddListingScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <Header
              titleTx={"explore.listings.add"}
              titleMode={"flex"}
              LeftActionComponent={
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{ paddingLeft: spacing.extraSmall }}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="Curation"
        component={CurationScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <Header
              title={"collection name"}
              titleMode={"flex"}
              LeftActionComponent={
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{ paddingLeft: spacing.extraSmall }}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="FeaturedListings"
        component={CurationScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <Header
              titleTx={"explore.listings.featured"}
              titleMode={"flex"}
              LeftActionComponent={
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{ paddingLeft: spacing.extraSmall }}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <Header
              titleTx={"explore.listings.featured"}
              titleMode={"flex"}
              LeftActionComponent={
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{ paddingLeft: spacing.extraSmall }}
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

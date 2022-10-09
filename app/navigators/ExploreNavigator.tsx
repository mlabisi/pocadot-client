import React from "react"
import { Header } from "../components"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { colors, spacing } from "../theme"
import { TouchableOpacity } from "react-native"
import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack"
import { WelcomeScreen } from "../screens"

export type ExploreNavigatorParamList = {
  ExploreScreen: undefined
  AddListing: undefined
  Curation: undefined
  FeaturedListings: undefined
  Search: undefined
  Filter: undefined
  AllListings: undefined
}

const Stack = createNativeStackNavigator<ExploreNavigatorParamList>()
export const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: NativeStackHeaderProps) => (
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
        component={WelcomeScreen}
        options={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="AddListing"
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
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
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
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
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
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
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
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
        name="Filter"
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
            <Header
              titleTx={"explore.search.filter"}
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
        name="AllListings"
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
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

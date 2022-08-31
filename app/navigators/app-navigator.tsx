/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
// import { useColorScheme } from "react-native"
import { DarkTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import {
  AddListingScreen,
  FavesScreen,
  ListingDetailScreen,
  ListingsScreen,
  MakeOfferScreen,
  ModifyPreferencesScreen,
  SetPreferencesScreen,
  SignInScreen,
  SignUpScreen,
  WelcomeScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined
  welcomeTab: undefined
  signIn: undefined
  signUp: undefined
  setPreferences: undefined
  modifyPreferences: undefined
  listings: undefined
  listingsTab: undefined
  listingDetail: undefined
  makeOffer: undefined
  addListing: undefined
  faves: undefined
  favesTab: undefined
  tabs: undefined
}

const WelcomeStack = createNativeStackNavigator<NavigatorParamList>()
const WelcomeNav = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcome"
    >
      <WelcomeStack.Screen name="welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen name="signIn" component={SignInScreen} />
      <WelcomeStack.Screen name="signUp" component={SignUpScreen} />
      <WelcomeStack.Screen name="setPreferences" component={SetPreferencesScreen} />
      <WelcomeStack.Screen name="tabs" component={AppNav} />
    </WelcomeStack.Navigator>
  )
}

const ListingsStack = createNativeStackNavigator<NavigatorParamList>()
const ListingsNav = () => {
  return (
    <ListingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="listings"
    >
      <ListingsStack.Screen name="listings" component={ListingsScreen} />
      <ListingsStack.Screen name="listingDetail" component={ListingDetailScreen} />
      <ListingsStack.Screen name="makeOffer" component={MakeOfferScreen} />
      <ListingsStack.Screen name="addListing" component={AddListingScreen} />
    </ListingsStack.Navigator>
  )
}

const FavesStack = createNativeStackNavigator<NavigatorParamList>()
const FavesNav = () => {
  return (
    <FavesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="faves"
    >
      <FavesStack.Screen name="faves" component={FavesScreen} />
      <FavesStack.Screen name="listingDetail" component={ListingDetailScreen} />
    </FavesStack.Navigator>
  )
}

const AppTab = createBottomTabNavigator<NavigatorParamList>()
const AppNav = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="listingsTab"
    >
      <AppTab.Screen name="listingsTab" component={ListingsNav} />
      <AppTab.Screen name="favesTab" component={FavesNav} />
    </AppTab.Navigator>
  )
}

const AppStack = createNativeStackNavigator<NavigatorParamList>()
const AppStackNav = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcomeTab"
    >
      <AppStack.Screen name="welcomeTab" component={WelcomeNav} />
      <AppStack.Screen name="tabs" component={AppNav} />
    </AppStack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  // const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={DarkTheme} // {colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStackNav />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcomeTab", "tabs"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)

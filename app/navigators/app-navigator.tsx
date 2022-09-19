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

import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { TabNav, WelcomeNav } from "./"

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
  preferences: undefined
  listings: undefined
  listingsTab: undefined
  listingDetail: undefined
  myListings: undefined
  makeOffer: undefined
  addListing: undefined
  faves: undefined
  favesTab: undefined
  addWish: undefined
  tabs: undefined
  chats: undefined
  chatDetail: undefined
  chatsTab: undefined
  myProfile: undefined
  profileTab: undefined
  notifications: undefined
}

const AppStack = createNativeStackNavigator<NavigatorParamList>()
export const AppStackNav = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcomeTab"
    >
      <AppStack.Screen name="welcomeTab" component={WelcomeNav} />
      <AppStack.Screen name="tabs" component={TabNav} />
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

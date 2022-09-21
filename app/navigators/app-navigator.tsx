import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { WelcomeNav } from "./welcome-navigator"
import { MainNav } from "./tab-navigator"
import { OnboardingScreen } from "../screens"

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

  onboarding: undefined

  suggestions: undefined
  search: undefined
  add: undefined
  profile: undefined
}

const AppStack = createNativeStackNavigator<NavigatorParamList>()
export const AppStackNav = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="onboarding"
    >
      <AppStack.Screen name="onboarding" component={OnboardingScreen} />
      <AppStack.Screen name="welcomeTab" component={WelcomeNav} />
      <AppStack.Screen name="tabs" component={MainNav} />
    </AppStack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStackNav />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

const exitRoutes = ["welcomeTab", "tabs"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)

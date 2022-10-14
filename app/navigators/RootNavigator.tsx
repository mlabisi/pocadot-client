/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { Pressable, useColorScheme } from "react-native"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { useStores } from "../models"
import { MainTabs } from "./MainTabs"
import { NotificationsScreen, SuggestionPreferencesScreen, WelcomeScreen } from "../screens"
import { Header } from "../components"
import { colors, spacing } from "../theme"
import { Ionicons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"

const hitRect = spacing.extraLarge

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
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Onboarding: undefined
  Main: undefined

  ForgotPassword: undefined
  ResetPassword: undefined

  Notifications: undefined

  SuggestionPreferences: undefined

  AddListing: undefined
  Curation: undefined
  FeaturedListings: undefined
  Search: undefined
  Filter: undefined
  AllListings: undefined

  EditProfile: undefined
  MyListings: undefined
  MyOffers: undefined

  EditBiases: undefined
  DeleteAccount: undefined
  Settings: undefined
  NotificationSettings: undefined
  SecuritySettings: undefined
  LanguageSettings: undefined
  CountrySettings: undefined
  HelpCenter: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<AppStackParamList,
  T>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName={isAuthenticated ? "Main" : "Onboarding"}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />

          {/* Notifications */}
          <Stack.Group>
            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"notifications.title"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
          </Stack.Group>

          {/* Suggestions */}
          <Stack.Group>
            <Stack.Screen
              name="SuggestionPreferences"
              component={SuggestionPreferencesScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"suggestions.preferences.title"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
          </Stack.Group>

          {/* Explore */}
          <Stack.Group>
            <Stack.Screen
              name="AddListing"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"explore.listings.add"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
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
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
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
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
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
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
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
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
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
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
          </Stack.Group>

          {/* MyProfile */}
          <Stack.Group>
            <Stack.Screen
              name="EditProfile"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"myProfile.edit.title"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="MyListings"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"myProfile.edit.title"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="MyOffers"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"myProfile.edit.title"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
          </Stack.Group>

          {/* More */}
          <Stack.Group>
            <Stack.Screen
              name="EditBiases"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.biases.title"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="DeleteAccount"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.settings.delete"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Settings"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.settings.title"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="NotificationSettings"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.settings.notifications"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="SecuritySettings"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.settings.security"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="LanguageSettings"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.settings.language"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="CountrySettings"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.settings.country"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
            <Stack.Screen
              name="HelpCenter"
              component={WelcomeScreen}
              options={{
                header: (props: NativeStackHeaderProps) => (
                  <Header
                    titleTx={"more.settings.help"}
                    titleMode={"flex"}
                    LeftActionComponent={
                      <Pressable
                        onPress={() => {
                          props.navigation.goBack()
                        }}
                        style={{ paddingLeft: spacing.extraSmall }}
                        hitSlop={hitRect}
                      >
                        <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
                      </Pressable>
                    }
                  />
                ),
              }}
            />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={WelcomeScreen} />
          <Stack.Screen name="ForgotPassword" component={WelcomeScreen} />
          <Stack.Screen name="ResetPassword" component={WelcomeScreen} />
        </>
      )}
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const RootNavigator = observer(function AppNavigator(props: NavigationProps) {

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={DefaultTheme}
      // theme={useColorScheme() === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
      <StatusBar
        style="dark"
        // style={useColorScheme() === "dark" ? "light" : "dark"}
      />
    </NavigationContainer>
  )
})

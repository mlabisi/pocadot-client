import React from "react"
import {
  WelcomeScreen
} from "../screens"
import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack"
import { Header } from "../components"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors, spacing } from "../theme"

export type MoreNavigatorParamList = {
  MoreScreen: undefined
  EditBiases: undefined
  DeleteAccount: undefined
  Settings: undefined
  NotificationSettings: undefined
  SecuritySettings: undefined
  LanguageSettings: undefined
  CountrySettings: undefined
  HelpCenter: undefined
}

const Stack = createNativeStackNavigator<MoreNavigatorParamList>()
export const MoreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: NativeStackHeaderProps) => (
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
    >
      <Stack.Screen
        name="MoreScreen"
        component={WelcomeScreen}
        options={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="EditBiases"
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
            <Header
              titleTx={"more.biases.title"}
              titleMode={"flex"}
              LeftActionComponent={
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
                >
                  <Ionicons name={"arrow-back"} size={20} color={colors.tint} />
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }}
                  style={{paddingLeft: spacing.extraSmall}}
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

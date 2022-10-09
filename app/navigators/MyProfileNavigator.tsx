import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  WelcomeScreen
} from "../screens"
import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack"
import { Header } from "../components"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { colors, spacing } from "../theme"
import { TouchableOpacity } from "react-native"

export type MyProfileNavigatorParamList = {
  MyProfileScreen: undefined
  EditProfile: undefined
}

const Stack = createNativeStackNavigator<MyProfileNavigatorParamList>()
export const MyProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props: NativeStackHeaderProps) => (
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
      }}
    >
      <Stack.Screen
        name="MyProfileScreen"
        component={WelcomeScreen}
        options={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={WelcomeScreen}
        options={{
          header: (props: NativeStackHeaderProps) => (
            <Header
              titleTx={"myProfile.edit.title"}
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

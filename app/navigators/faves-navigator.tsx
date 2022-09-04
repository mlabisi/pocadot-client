import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AddWishScreen, FavesScreen, ListingDetailScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"
import { FavesHeader } from "../components"

const FavesStack = createNativeStackNavigator<NavigatorParamList>()
export const FavesNav = () => {
  return (
    <FavesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="faves"
    >
      <FavesStack.Screen
        name="faves"
        component={FavesScreen}
        options={{
          headerShown: true,
          header: () => {
            return <FavesHeader />
          },
        }}
      />
      <FavesStack.Screen name="listingDetail" component={ListingDetailScreen} />
      <FavesStack.Screen name="addWish" component={AddWishScreen} />
    </FavesStack.Navigator>
  )
}

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FavesScreen, ListingDetailScreen } from "../screens"
import React from "react"
import { NavigatorParamList } from "./app-navigator"

const FavesStack = createNativeStackNavigator<NavigatorParamList>()
export const FavesNav = () => {
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

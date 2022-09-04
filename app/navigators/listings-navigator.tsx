import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AddListingScreen, ListingDetailScreen, ListingsScreen, MakeOfferScreen } from "../screens"
import { ListingsHeader } from "../components"
import React from "react"
import { NavigatorParamList } from "./app-navigator"

const ListingsStack = createNativeStackNavigator<NavigatorParamList>()
export const ListingsNav = () => {
  return (
    <ListingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="listings"
    >
      <ListingsStack.Screen
        name="listings"
        component={ListingsScreen}
        options={{
          headerShown: true,
          header: () => {
            return <ListingsHeader />
          },
        }}
      />
      <ListingsStack.Screen
        name="listingDetail"
        component={ListingDetailScreen}
        options={{ headerShown: false }}
      />
      <ListingsStack.Screen
        name="makeOffer"
        component={MakeOfferScreen}
        options={{ headerShown: false }}
      />
      <ListingsStack.Screen
        name="addListing"
        component={AddListingScreen}
        options={{ headerShown: false }}
      />
    </ListingsStack.Navigator>
  )
}

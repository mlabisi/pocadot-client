import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ListingsNav } from "./listings-navigator"
import { FavesNav } from "./faves-navigator"
import { ChatsNav } from "./chats-navigator"
import { MyProfileNav } from "./my-profile-navigator"
import { NavigatorParamList } from "./app-navigator"
import { NotificationsScreen } from "../screens"
import { BottomNavigation, BottomNavigationTab, Icon, Avatar } from "@ui-kitten/components"

const avatar = require("../../assets/images/papagowon.png")

const SuggestionsIcon = (props) => <Icon {...props} name="star-outline" />
const SearchIcon = (props) => <Icon {...props} name="search-outline" />
const AddIcon = (props) => <Icon {...props} name="plus-circle-outline" />
const BellIcon = (props) => <Icon {...props} name="bell-outline" />
const UserAvatar = (props) => <Avatar {...props} source={avatar} />

const BottomBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    appearance={"noIndicator"}
    style={{
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 65,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 14,
    }}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={(evaProps) => <SuggestionsIcon {...evaProps} />} />
    <BottomNavigationTab icon={(evaProps) => <SearchIcon {...evaProps} />} />
    <BottomNavigationTab icon={(evaProps) => <AddIcon {...evaProps} />} />
    <BottomNavigationTab icon={(evaProps) => <BellIcon {...evaProps} />} />
    <BottomNavigationTab title={(evaProps) => <UserAvatar {...evaProps} />} />
  </BottomNavigation>
)
const AppTab = createBottomTabNavigator<NavigatorParamList>()
export const MainNav = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="listingsTab"
      tabBar={(props) => <BottomBar {...props} />}
    >
      <AppTab.Screen name="suggestions" component={ListingsNav} />
      <AppTab.Screen name="search" component={FavesNav} />
      <AppTab.Screen name="add" component={ChatsNav} />
      <AppTab.Screen name="notifications" component={NotificationsScreen} />
      <AppTab.Screen name="profile" component={MyProfileNav} />
    </AppTab.Navigator>
  )
}

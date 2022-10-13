import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { GeneralNotification, OfferNotification, Screen, Text } from "../../components"
import { translate } from "../../i18n"
import { colors, spacing, typography } from "../../theme"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { SceneMap, TabView, TabBar } from "react-native-tab-view"
import { generalNotifis, offerNotifs } from "./demo"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const NotificationsScreen: FC<StackScreenProps<AppStackParamList, "Notifications">> =
  observer(function NotificationsScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [tabs] = useState([
      {
        key: "notifications.tabs.general",
        title: translate("notifications.tabs.general"),
      },
      {
        key: "notifications.tabs.offers",
        title: translate("notifications.tabs.offers"),
      },
    ])

    const setIndex = (index) => {
      setSelectedIndex(index)
    }

    const renderGeneralNotification = ({ item }) => {
      return (
        <GeneralNotification
          description={item.description}
          label={item.label}
          timestamp={item.timestamp}
          isNew={item.isNew}
          icon={item.icon}
        />
      )
    }

    const renderOfferNotification = ({ item }) => {
      return (
        <OfferNotification
          image={item.image}
          topLabel={item.topLabel}
          mainLabel={item.mainLabel}
          actionLabel={item.actionLabel}
          topRightLabel={item.topRightLabel}
          bottomRightLabel={item.bottomRightLabel}
        />
      )
    }

    const offerNotificationsList = () => (
      <FlatList
        data={offerNotifs}
        renderItem={renderOfferNotification}
        contentContainerStyle={styles.ContentContainer}
      />
    )

    const generalNotificationsList = () => (
      <FlatList
        data={generalNotifis}
        renderItem={renderGeneralNotification}
        contentContainerStyle={styles.ContentContainer}
      />
    )

    const renderTab = SceneMap({
      "notifications.tabs.general": generalNotificationsList,
      "notifications.tabs.offers": offerNotificationsList,
    })

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <TabView
        navigationState={{ index: selectedIndex, routes: tabs }}
        renderScene={renderTab}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: colors.background }}
            labelStyle={styles.Text}
            renderLabel={({ route, focused, color }) =>
              <Text style={[styles.Text, focused ? styles.SelectedText : {color}]}>
                {route.title}
              </Text>
            }
            indicatorStyle={styles.SelectedContainer}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={{ width: widthPercentageToDP(100) }}
      />
    )
  })

const styles = StyleSheet.create({
  ContentContainer: {
    paddingVertical: spacing.large,
    width: widthPercentageToDP(100),
  },
  SelectedContainer: {
    alignSelf: "center",
    backgroundColor: colors.tint,
    borderRadius: 100,
    height: 4,
  },
  SelectedText: {
    color: colors.tint,
  },
  Text: {
    color: colors.palette.greyscale["500"],
    fontFamily: typography.primary.semiBold,
    textAlign: "center",
  },
})

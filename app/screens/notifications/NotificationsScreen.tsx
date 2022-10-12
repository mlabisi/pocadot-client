import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { GeneralNotification, OfferNotification, Screen, Tabs } from "../../components"
import { translate } from "../../i18n"
import { colors, spacing } from "../../theme"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const yoonListing = require("./demo/yoonListing.png")
const lisaListing = require("./demo/lisaListing.png")
const yejiListing = require("./demo/yejiListing.png")

const generalNotifis = [
  {
    description:
      "pocadot has Two-Factor Authentication! Try it now to make your account more secure.",
    label: "Security Updates!",
    timestamp: "Dec 20, 2022 | 10:49 PM",
    isNew: true,
    icon: <Ionicons name={"shield-checkmark"} color={colors.tint} size={20} />,
  },
  {
    description: "You can now track your real-life photocard collections using pocadot!",
    label: "Track Your Photocards!",
    timestamp: "Dec 19, 2022 | 7:22 AM",
    isNew: true,
    icon: <Ionicons name={"file-tray-full"} color={colors.tint} size={20} />,
  },
  {
    description: "Now you can offer one of your existing listings when making a trade!",
    label: "pocadot Has Updates!",
    timestamp: "Dec 10, 2022 | 11:54 AM",
    isNew: false,
    icon: <MaterialCommunityIcons name={"shield-star"} color={colors.tint} size={20} />,
  },
]

const offerNotifs = [
  {
    image: yoonListing,
    topLabel: "papagowon wants to trade for...",
    topRightLabel: "New Trade Offer!",
    mainLabel: "Yoon · STEREOTYPE",
    bottomRightLabel: "24 seconds ago",
    actionLabel: "+ view offer",
  },
  {
    image: yoonListing,
    topLabel: "itsgoingdownnn wants to buy...",
    topRightLabel: "New Buy Offer!",
    mainLabel: "Yoon · STEREOTYPE",
    bottomRightLabel: "18 minutes ago",
    actionLabel: "+ view offer",
  },
  {
    image: lisaListing,
    topLabel: "oonmixxoo accepted your offer for...",
    topRightLabel: "Offer Accepted!",
    mainLabel: "Lisa · BLINK 2021",
    bottomRightLabel: "25 minutes ago",
    actionLabel: "+ message oonmixxoo",
  },
  {
    image: yoonListing,
    topLabel: "likeasticker wants to trade for...",
    topRightLabel: "New Trade Offer!",
    mainLabel: "Yoon · STEREOTYPE",
    bottomRightLabel: "46 minutes ago",
    actionLabel: "+ view offer",
  },
  {
    image: lisaListing,
    topLabel: "You placed an offer for...",
    topRightLabel: "Offer Placed",
    mainLabel: "Lisa · BLINK 2021",
    bottomRightLabel: "6 hours ago",
    actionLabel: "+ view oonmixxoo's listing",
  },
  {
    image: yejiListing,
    topLabel: "You placed an offer for...",
    topRightLabel: "Offer Placed",
    mainLabel: "Yeji · Crazy In Love",
    bottomRightLabel: "8 hours ago",
    actionLabel: "+ view oop's listing",
  },
]

export const NotificationsScreen: FC<StackScreenProps<AppStackParamList, "Notifications">> =
  observer(function NotificationsScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const tabs = [
      {
        label: translate("notifications.tabs.general"),
      },
      {
        label: translate("notifications.tabs.offers"),
      },
    ]

    const tabContent = useRef<ScrollView>(null)
    const tabWidth = widthPercentageToDP(100) / tabs.length

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

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const x = event.nativeEvent.contentOffset.x
      console.log(`${x}px, selectedIndex: ${selectedIndex} --> ${x / widthPercentageToDP(100)}`)
      setSelectedIndex(x / widthPercentageToDP(100))
    }

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen preset="fixed">
        <Tabs
          style={styles.Container}
          tabs={tabs}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          tabContent={tabContent}
          tabWidth={tabWidth}
        />
        <ScrollView
          ref={tabContent}
          horizontal={true}
          pagingEnabled={true}
          scrollEventThrottle={10}
          onMomentumScrollEnd={handleScroll}
        >
          <FlatList
            data={generalNotifis}
            renderItem={renderGeneralNotification}
            contentContainerStyle={styles.ContentContainer}
          />
          <FlatList
            data={offerNotifs}
            renderItem={renderOfferNotification}
            contentContainerStyle={styles.ContentContainer}
          />
        </ScrollView>
      </Screen>
    )
  })

const styles = StyleSheet.create({
  Container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    height: heightPercentageToDP(10),
    justifyContent: "flex-start",
    paddingVertical: spacing.large,
    width: widthPercentageToDP(100) - spacing.large,
  },
  ContentContainer: {
    paddingBottom: spacing.massive + spacing.large,
    width: widthPercentageToDP(100),
  },
})

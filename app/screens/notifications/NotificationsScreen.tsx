import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { GeneralNotification, Screen, Tabs } from "../../components"
import { translate } from "../../i18n"
import { colors, spacing } from "../../theme"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

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
    description:
      "You can now track your real-life photocard collections using pocadot!",
    label: "Track Your Photocards!",
    timestamp: "Dec 19, 2022 | 7:22 AM",
    isNew: true,
    icon: <Ionicons name={"file-tray-full"} color={colors.tint} size={20} />,
  },
  {
    description:
      "Now you can offer one of your existing listings when making a trade!",
    label: "pocadot Has Updates!",
    timestamp: "Dec 10, 2022 | 11:54 AM",
    isNew: false,
    icon: <MaterialCommunityIcons name={"shield-star"} color={colors.tint} size={20} />,
  },
]
const offerNotifs = []

export const NotificationsScreen: FC<StackScreenProps<AppStackParamList, "Notifications">> =
  observer(function NotificationsScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0)

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

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const tabs = [
      {
        label: translate("notifications.tabs.general"),
      },
      {
        label: translate("notifications.tabs.offers"),
      },
    ]

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen preset="fixed">
        <Tabs
          style={styles.Container}
          tabs={tabs}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        {selectedIndex === 0 && (
          <FlatList data={generalNotifis} renderItem={renderGeneralNotification} />
        )}
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
})

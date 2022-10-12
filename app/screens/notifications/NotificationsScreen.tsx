import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { Screen, Tabs } from "../../components"
import { translate } from "../../i18n"
import { spacing } from "../../theme"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const generalNotifis = []
const offerNotifs = []

export const NotificationsScreen: FC<StackScreenProps<AppStackParamList, "Notifications">> =
  observer(function NotificationsScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0)
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
      </Screen>
    )
  })

const styles = StyleSheet.create({
  Container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: heightPercentageToDP(10),
    justifyContent: "flex-start",
    paddingVertical: spacing.large,
    width: widthPercentageToDP(100) - spacing.large
  },
})

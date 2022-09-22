import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { NotificationRow } from "../../../components"
import { ROOT } from "./styles"
import { FlatList, View } from "react-native"

export const NotificationsScreen: FC<StackScreenProps<NavigatorParamList, "notifications">> =
  observer(function NotificationsScreen({ navigation }) {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
      if (!notifications.length) {
        setNotifications(new Array(1).fill({}))
      }
    }, [setNotifications])

    const renderNotification = ({ item }) => <NotificationRow item={item} navigation={navigation} />

    return (
      <View style={ROOT}>
        <FlatList key={"oop"} data={notifications} renderItem={renderNotification} />
      </View>
    )
  })

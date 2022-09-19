import * as React from "react"
import { TouchableOpacity, View } from "react-native"
import { Text } from "../../common/text/text"
import { observer } from "mobx-react-lite"
import { ROW } from "../../../screens/chats/styles"
import { ChatModelType, RootStoreContext } from "../../../models"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { useContext } from "react"
import {
  BODY,
  CONTAINER,
  IMAGE,
  INNER_ROW,
  NOTIFICATION_BODY,
  NOTIFICATION_TITLE,
} from "../../notifications/notification-row/styles"
import { AutoImage } from "../../common/auto-image/auto-image"

const avatar = require("./img.png")

export interface ChatRowProps {
  item: ChatModelType
  navigation: StackNavigationProp<NavigatorParamList>
}

export const ChatRow = observer(function ChatRow({ item, navigation }: ChatRowProps) {
  const rootStore = useContext(RootStoreContext)

  const openDetailsView = async () => {
    rootStore.setSelectedChatId(item.id)
    navigation.navigate("chatDetail")
  }

  return (
    <TouchableOpacity onPress={openDetailsView} key={item.id} style={ROW}>
      <View style={CONTAINER}>
        <View style={ROW}>
          <View style={INNER_ROW}>
            <AutoImage style={IMAGE} source={avatar} />
          </View>
          <View style={BODY}>
            <Text
              style={NOTIFICATION_TITLE}
              text={item.participants.find((p) => p.id !== rootStore.currentUserId).username}
            />
            <Text style={NOTIFICATION_BODY} text={item.messages[0].body} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

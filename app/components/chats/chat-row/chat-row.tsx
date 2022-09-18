import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../../common/text/text"
import { observer } from "mobx-react-lite"
import { ROW, TITLE } from "../../../screens/chats/styles"
import { ChatModelType, RootStoreContext } from "../../../models"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { useContext } from "react"

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
      <Text text={item.messages[0].body} style={TITLE} />
    </TouchableOpacity>
  )
})

import React, { FC, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { CONTENT, ROOT, TITLE } from "./styles"
import { FlatList, View } from "react-native"
import { RootStoreContext, useQuery } from "../../models"
import { ChatRow, Text } from "../../components"
import { SafeAreaView } from "react-native-safe-area-context"

export const ChatsScreen: FC<StackScreenProps<NavigatorParamList, "chats">> = observer(
  function ChatsScreen({ navigation }) {
    const [chats, setChats] = useState([])
    const { currentUserId } = useContext(RootStoreContext)

    const chatsQuery = useQuery((store) =>
      store.queryUsers({ input: { ids: [currentUserId] } }, (user) =>
        user.id.chats((chat) =>
          chat.id.timestamp.participants((p) => p.id.username).messages((m) => m.body),
        ),
      ),
    )

    const renderChat = ({ item }) => <ChatRow item={item} navigation={navigation} />

    useEffect(() => {
      if (!!chatsQuery.data && !chats.length) {
        setChats(chatsQuery.data.users[0].chats)
      }
    }, [setChats, chatsQuery.data])

    if (chatsQuery.loading) {
      return (
        <SafeAreaView style={ROOT}>
          <View style={{ flexDirection: "column" }}>
            <Text style={TITLE} tx={"common.loading"} />
          </View>
        </SafeAreaView>
      )
    }

    return (
      <View style={CONTENT}>
        <FlatList data={chats} renderItem={renderChat} />
      </View>
    )
  },
)

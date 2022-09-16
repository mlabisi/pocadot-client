import React, { FC, useCallback, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { GiftedChat } from "react-native-gifted-chat"
import {
  listingModelPrimitives,
  messageModelPrimitives,
  MessageModelType,
  useQuery,
  userModelPrimitives,
} from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { ROOT, TITLE } from "../../components/listings/all-listings/styles"
import { KeyboardAvoidingView, Platform, View } from "react-native"

export const ChatDetailScreen: FC<StackScreenProps<NavigatorParamList, "chatDetail">> = observer(
  function ChatDetailScreen({ navigation }) {
    const [messages, setMessages] = useState([])
    const [otherUserId, setOtherUserId] = useState("")
    const [chatListings, setChatListings] = useState([])

    const chatQuery = useQuery((store) =>
      store.queryFetchChat({ input: { id: "CH3640382b12bd4387802c17ea357f3f8b" } }, (chat) =>
        chat.id.timestamp
          .messages(messageModelPrimitives.author(userModelPrimitives))
          .participants((p) => p.id)
          .listings(listingModelPrimitives),
      ),
    )

    useEffect(() => {
      if (!messages.length) {
        setMessages(chatQuery.data.fetchChat.messages.map(buildMessage))
      }

      if (!otherUserId) {
        setOtherUserId(
          chatQuery.data.fetchChat.participants.find((p) => p.id !== chatQuery.store.currentUserId)
            .id,
        )
      }

      if (!chatListings.length) {
        setChatListings(chatQuery.data.fetchChat.listings.map((l) => l.id))
      }
    }, [chatQuery.data, setMessages, setOtherUserId])

    const onSend = useCallback((messages = []) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    }, [])

    const buildMessage = (message: MessageModelType) => {
      return {
        _id: message.id,
        text: message.body,
        createdAt: new Date(parseInt(message.timestamp)),
        user: {
          _id: message.author.id,
          name: message.author.username,
          avatar:
            "https://64.media.tumblr.com/2b13ab3dc76b79508e9f75ad56eb284d/7a0d5d8a0e6f2bb4-aa/s1280x1920/58fe5ab39773453ff399d6058183e65307a2a4c2.jpg",
        },
      }
    }

    if (chatQuery.loading) {
      return (
        <SafeAreaView style={ROOT}>
          <View style={{ flexDirection: "column" }}>
            <Text style={TITLE} tx={"common.loading"} />
          </View>
        </SafeAreaView>
      )
    }

    return (
      <Screen preset="fixed">
        <GiftedChat
          alwaysShowSend={true}
          alignTop={true}
          inverted={true}
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: chatQuery.store.currentUserId,
          }}
        />
        {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
      </Screen>
    )
  },
)

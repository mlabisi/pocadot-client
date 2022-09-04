import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { CONTENT } from "./styles"
import { View } from "react-native"

export const ChatsScreen: FC<StackScreenProps<NavigatorParamList, "chats">> = observer(
  function ChatsScreen({ navigation }) {
    return <View style={CONTENT}></View>
  },
)

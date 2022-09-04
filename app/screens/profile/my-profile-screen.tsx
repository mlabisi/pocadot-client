import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { View } from "react-native"
import { CONTENT } from "../chats/styles"

export const MyProfileScreen: FC<StackScreenProps<NavigatorParamList, "myProfile">> = observer(
  function ProfileScreen({ navigation }) {
    return <View style={CONTENT}></View>
  },
)

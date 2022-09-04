import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { ROOT } from "./styles"

export const ChatsScreen: FC<StackScreenProps<NavigatorParamList, "chats">> = observer(
  function ChatsScreen({ navigation }) {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" text="chats" />
      </Screen>
    )
  },
)

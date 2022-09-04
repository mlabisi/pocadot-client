import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { ROOT } from "./styles"

export const ProfileScreen: FC<StackScreenProps<NavigatorParamList, "profile">> = observer(
  function ProfileScreen() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" text="profile" />
      </Screen>
    )
  },
)

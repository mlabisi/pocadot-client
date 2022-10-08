import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Screen, Text } from "../components"
import { SuggestionsNavigatorParamList } from "../navigators"

export const SuggestionsScreen: FC<StackScreenProps<SuggestionsNavigatorParamList, "SuggestionsScreen">> = observer(function SuggestionsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="suggestions" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

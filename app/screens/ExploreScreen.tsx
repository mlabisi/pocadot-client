import React, { FC, useLayoutEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ExploreNavigatorParamList } from "../navigators"
import { Screen, Text } from "../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const ExploreScreen: FC<StackScreenProps<ExploreNavigatorParamList, "ExploreScreen">> = observer(function ExploreScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // search bar options
      },
    });
  }, [navigation]);

  return (
    <Screen style={$root} preset="scroll">
      <Text text="explore" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

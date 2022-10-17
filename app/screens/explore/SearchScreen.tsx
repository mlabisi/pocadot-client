import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList, MainNavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const SearchScreen: FC<StackScreenProps<AppStackParamList, "Search">> = observer(function SearchScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="fixed">
      <Text text="search" />
    </Screen>
  )
})


const styles = StyleSheet.create({})

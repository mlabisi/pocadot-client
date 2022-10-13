import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { MainNavigatorParamList } from "../../navigators"
import { AutoImage } from "../../components"
import { widthPercentageToDP } from "react-native-responsive-screen"
import { colors, spacing } from "../../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const searchBar = require("./searchBar.png")

export const ExploreScreen: FC<StackScreenProps<MainNavigatorParamList, "ExploreScreen">> = observer(function ExploreScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={styles.Root}>
      <AutoImage source={searchBar} style={styles.SearchBar}/>
    </View>
  )
})

const styles = StyleSheet.create({
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  SearchBar: {
    width: widthPercentageToDP(100) - spacing.large
  }
})

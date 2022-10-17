import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { Header, Screen, Text } from "../../components"
import { colors, spacing } from "../../theme"
import { Octicons } from "@expo/vector-icons"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const SearchResultsScreen: FC<StackScreenProps<AppStackParamList, "SearchResults">> =
  observer(function SearchResultsScreen({navigation}) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return <View style={styles.Root}>
      <Header
        titleTx={"explore.listings.add"}
        titleMode={"flex"}
        containerStyle={{justifyContent: "flex-start"}}
        LeftActionComponent={
          <Pressable
            onPress={() => {
              navigation.goBack()
            }}
            style={{ paddingLeft: spacing.small, paddingRight: spacing.small }}
            hitSlop={25}
          >
            <Octicons name={"x"} size={24} color={colors.tint} />
          </Pressable>
        }
      />
    </View>
  })

const styles = StyleSheet.create({
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
})

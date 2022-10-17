import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList, MainNavigatorParamList } from "../../navigators"
import { Screen, Text, TintedButton } from "../../components"
import { Ionicons } from "@expo/vector-icons"
import { colors, spacing } from "../../theme"
import { curations, featuredListings } from "./demo"
import { FlashList } from "@shopify/flash-list"
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const hitRect = spacing.extraLarge

export const SearchScreen: FC<StackScreenProps<AppStackParamList, "Search">> = observer(
  function SearchScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <View style={styles.Root}>
        <View style={styles.Row}>
          <Pressable
            onPress={() => {
              navigation.goBack()
            }}
            style={{ paddingLeft: spacing.extraSmall, alignSelf: "center" }}
            hitSlop={hitRect}
          >
            <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
          </Pressable>
          <View style={styles.SearchContainer}>
            <View style={styles.SearchLeft}>
              <Ionicons
                name={"search"}
                color={colors.palette.greyscale["400"]}
                size={18}
                style={styles.MagnifyingGlass}
              />
              <Text preset={"bodySM"} style={styles.SearchText}>
                Search for groups and idols
              </Text>
            </View>
            <View style={styles.SearchRight}>
              <Ionicons name={"options"} color={colors.palette.greyscale["400"]} size={18}/>
            </View>
          </View>
        </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  MagnifyingGlass: {
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingRight: spacing.extraSmall,
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    marginTop: heightPercentageToDP(10),
    width: wp(100),
  },
  SearchContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.greyscale["100"],
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginRight: spacing.small,
    padding: spacing.medium
  },
  SearchLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  SearchRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  SearchText: {
    color: colors.palette.greyscale["400"],
  },
})

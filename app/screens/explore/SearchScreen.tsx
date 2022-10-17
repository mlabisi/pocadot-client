import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList, MainNavigatorParamList } from "../../navigators"
import { Screen, Text, TintedButton } from "../../components"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { colors, spacing } from "../../theme"
import { curations, featuredListings } from "./demo"
import { FlashList } from "@shopify/flash-list"
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import SearchBar from "react-native-dynamic-search-bar"
import { translate } from "../../i18n"
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
            style={styles.BackButton}
            hitSlop={hitRect}
          >
            <Ionicons name={"chevron-back"} size={24} color={colors.tint} />
          </Pressable>
          <SearchBar
            autoFocus={true}
            placeholder={translate("explore.search.placeholder")}
            onPress={() => alert("onPress")}
            onChangeText={(text) => console.log(text)}
            // textInputStyle={styles.SearchText}
            placeholderTextColor={styles.SearchText.color}
            style={styles.SearchContainer}
            onClearPress={() => {
              /**/
            }}
            searchIconComponent={
              <Ionicons name={"search"} color={colors.palette.greyscale["400"]} size={18} />
            }
            clearIconComponent={
              <Octicons name={"x"} color={colors.palette.greyscale["400"]} size={18} />
            }
          />
        </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  BackButton: {
    alignSelf: "center",
    paddingLeft: spacing.extraSmall,
  },
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
    marginRight: spacing.small,
  },
  SearchText: {
    color: colors.palette.greyscale["400"],
    fontSize: spacing.medium,
  },
})

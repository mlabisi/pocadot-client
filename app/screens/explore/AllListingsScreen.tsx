import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { ListingCard, Screen, Text, TintedButton } from "../../components"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { colors, spacing } from "../../theme"
import SearchBar from "react-native-dynamic-search-bar"
import { translate } from "../../i18n"
import { featuredListings as allListings } from "./demo"
import ModalDropdown from "react-native-modal-dropdown-v2"
import { FlashList } from "@shopify/flash-list"
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const hitRect = spacing.extraLarge
const cardWidth = wp(42)
const optionLineHeight = 45
const filterOptions = [
  "Default",
  "A-Z",
  "Recently Listed",
  "Price Low to High",
  "Price High to Low",
  "Oldest",
]

export const AllListingsScreen: FC<StackScreenProps<AppStackParamList, "AllListings">> = observer(function AllListingsScreen({navigation}) {
  const [listings, setListings] = useState(allListings)

  const sortModal = useRef<ModalDropdown>(null)

  const goToFilterScreen = () => navigation.navigate("FilterResults")

  const renderListingCard = ({ item }) => {
    return (
      <ListingCard
        listedBy={item.listedBy}
        cardWidth={cardWidth}
        artistName={item.artistName}
        releaseName={item.releaseName}
        listingTag={item.listingTag}
        avatar={item.avatar}
        image={item.image}
        style={styles.Card}
      />
    )
  }

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
          <Ionicons name={"arrow-back"} size={24} color={colors.tint} />
        </Pressable>
      </View>

      <View style={styles.ResultsHeader}>
        <View style={styles.ResultsHeaderLeft}>
          <Text preset={"h4"}>
            {listings.length === 1 ? `${listings.length} Listing` : `${listings.length} Listings`}
          </Text>
        </View>
        <View style={styles.ResultsHeaderRight}>
          <ModalDropdown
            ref={sortModal}
            dropdownStyle={styles.ModalContainer}
            defaultValue={""}
            defaultIndex={0}
            dropdownTextStyle={{ fontSize: spacing.medium }}
            textStyle={{ color: colors.textDim }}
            adjustFrame={(props) => ({ ...props, height: filterOptions.length * optionLineHeight })}
            /*
            // @ts-ignore */
            renderRightComponent={() => (
              <Ionicons name={"swap-vertical"} color={colors.textDim} size={24} />
            )}
            options={filterOptions}
          />
          <TouchableOpacity onPress={() => goToFilterScreen()}>
            <Ionicons
              name={"options"}
              color={colors.textDim}
              size={24}
              style={{ paddingLeft: spacing.small }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.Container}>
          <FlashList
            data={listings}
            renderItem={renderListingCard}
            numColumns={2}
            scrollEnabled={false}
            estimatedItemSize={cardWidth}
            ListFooterComponent={
              <View style={{ padding: spacing.large, marginBottom: spacing.medium }}>
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  )
})


const styles = StyleSheet.create({
  BackButton: {
    alignSelf: "center",
    paddingLeft: spacing.extraSmall,
  },
  ButtonText: {
    color: colors.palette.other.white,
  },
  Card: {
    flex: 1,
  },
  Container: {
    minHeight: hp(100),
    width: wp(100),
  },
  ModalContainer: {
    borderRadius: 20,
    padding: spacing.medium,
  },
  ResultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: spacing.large,
    marginVertical: spacing.small,
    width: wp(100) - spacing.huge,
  },
  ResultsHeaderLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ResultsHeaderRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: heightPercentageToDP(10),
    paddingLeft: spacing.small,
    width: wp(100),
  },
  SearchContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.greyscale["100"],
    flex: 1,
    marginHorizontal: spacing.small,
  },
})
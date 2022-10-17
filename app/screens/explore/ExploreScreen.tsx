import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { MainNavigatorParamList } from "../../navigators"
import { AutoImage, ListingCard, Text, TintedButton } from "../../components"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import { colors, spacing } from "../../theme"
import { curations, featuredListings } from "./demo"
import { FlashList } from "@shopify/flash-list"
import { Ionicons, Octicons } from "@expo/vector-icons"
import SearchBar from "react-native-dynamic-search-bar"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const cardWidth = wp(42)
const bannerHeight = hp(20)

export const ExploreScreen: FC<StackScreenProps<MainNavigatorParamList, "ExploreScreen">> =
  observer(function ExploreScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const goToCuration = () => navigation.getParent().navigate("CurationScreen")
    const goToSearch = () => navigation.getParent().navigate("Search")

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

    const renderCuration = ({ item, index }) => {
      return (
        <TouchableOpacity key={item + index} onPress={goToCuration}>
          <AutoImage source={item.image} style={styles.CollectionImage} maxHeight={bannerHeight} />
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.Root}>
        <View style={styles.SearchContainer}>
          <SearchBar
            placeholder={""}
            textInputStyle={styles.DisabledInput}
            placeholderTextColor={styles.SearchText.color}
            onSearchPress={() => goToSearch()}
            onClearPress={() => goToSearch()}
            onPress={() => goToSearch()}
            searchIconComponent={
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
            }
            clearIconComponent={
              <Octicons name={"x"} color={colors.palette.greyscale["400"]} size={18} />
            }
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text preset={"h6"} style={styles.SectionTitle}>
            Curated Listings
          </Text>
          <View style={styles.CuratedCollections}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {curations.map((item, index) => renderCuration({ item, index }))}
            </ScrollView>
          </View>
          <View style={styles.Row}>
            <Text preset={"h6"}>Featured Listings</Text>
            <TouchableOpacity onPress={goToCuration}>
              <Text preset={"bold"} style={styles.Link}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Container}>
            <FlashList
              data={featuredListings.slice(0, 6)}
              renderItem={renderListingCard}
              numColumns={2}
              scrollEnabled={false}
              estimatedItemSize={cardWidth}
              ListFooterComponent={
                <View style={{ padding: spacing.large }}>
                  <TintedButton
                    onPress={goToCuration}
                    text={
                      <Text preset={"h6"} style={styles.ButtonText}>
                        See All
                      </Text>
                    }
                  />
                </View>
              }
            />
          </View>
        </ScrollView>
      </View>
    )
  })

const styles = StyleSheet.create({
  ButtonText: {
    color: colors.palette.other.white,
  },
  Card: {
    flex: 1,
  },
  CollectionImage: {
    marginHorizontal: spacing.small,
  },
  Container: {
    minHeight: hp(100),
    width: wp(100),
  },
  CuratedCollections: {
    height: bannerHeight,
    width: wp(100),
  },
  DisabledInput: {
    width: 0,
  },
  Link: {
    color: colors.tint,
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
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: spacing.medium,
    marginVertical: spacing.large,
  },
  SearchContainer: {
    marginVertical: spacing.small
  },
  SearchLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  SearchText: {
    color: colors.palette.greyscale["400"],
    fontSize: spacing.medium,
  },
  SectionTitle: {
    marginBottom: spacing.large,
    marginHorizontal: spacing.medium,
  },
})

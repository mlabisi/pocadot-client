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
import { Ionicons } from "@expo/vector-icons"
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
    const goToSearch = () => navigation.getParent().navigate("SearchResults")

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
        <TouchableOpacity
          onPress={() => goToSearch()}
        >
          <View style={styles.SearchContainer}>
            <View style={styles.SearchLeft}>
              <Ionicons name={"search"} color={colors.palette.greyscale["400"]} size={18} style={styles.MagnifyingGlass} />
              <Text preset={"bodySM"} style={styles.SearchText}>Search for groups and idols</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  Link: {
    color: colors.tint,
  },
  MagnifyingGlass: {
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingRight: spacing.extraSmall
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
    alignItems: "center",
    backgroundColor: colors.palette.greyscale["100"],
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: spacing.small,
    marginVertical: spacing.small,
    padding: spacing.medium,
    width: wp(100) - spacing.large,
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
    color: colors.palette.greyscale["400"]
  },
  SectionTitle: {
    marginBottom: spacing.large,
    marginHorizontal: spacing.medium,
  },
})

import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { MainNavigatorParamList } from "../../navigators"
import { AutoImage, ListingCard, Text } from "../../components"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import { colors, spacing } from "../../theme"
import { curations, featuredListings } from "./demo"
import { FlashList } from "@shopify/flash-list"
import { Asset } from "expo-asset"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const searchBar = require("./searchBar.png")
const cardWidth = wp(45)

export const ExploreScreen: FC<StackScreenProps<MainNavigatorParamList, "ExploreScreen">> =
  observer(function ExploreScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

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
        />
      )
    }

    const renderCuration = ({ item, index }) => {
      return (
        <TouchableOpacity key={item + index}>
          <AutoImage
            source={{ uri: Asset.fromModule(item.image).uri }}
            style={styles.CollectionImage}
            maxHeight={hp(15)}
          />
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.Root}>
        <Image source={searchBar} style={styles.SearchBar} />
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
            <TouchableOpacity>
              <Text preset={"bold"} style={styles.Link}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Container}>
            <FlashList
              data={featuredListings}
              renderItem={renderListingCard}
              numColumns={2}
              scrollEnabled={false}
              estimatedItemSize={cardWidth}
              ListFooterComponentStyle={{
                padding: spacing.large,
              }}
            />
          </View>
        </ScrollView>
      </View>
    )
  })

const styles = StyleSheet.create({
  CollectionImage: {
    marginHorizontal: spacing.small,
  },
  Container: {
    minHeight: hp(100),
    width: wp(100),
  },
  CuratedCollections: {
    height: hp(15),
    width: wp(100),
  },
  Link: {
    color: colors.tint,
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
  SearchBar: {
    marginHorizontal: spacing.medium,
    marginVertical: spacing.large,
    width: wp(100) - spacing.large,
  },
  SectionTitle: {
    marginBottom: spacing.large,
    marginHorizontal: spacing.medium,
  },
})

import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { MainNavigatorParamList } from "../../navigators"
import { AutoImage, ListingCard, Text } from "../../components"
import { widthPercentageToDP as wp, widthPercentageToDP } from "react-native-responsive-screen"
import { colors, spacing } from "../../theme"
import { featuredListings } from "./demo"
import { FlashList } from "@shopify/flash-list"
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

    const renderListingCard = ({item}) => {
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

    return (
      <View style={styles.Root}>
        <Image source={searchBar} style={styles.SearchBar} />
        <ScrollView>
          <Text preset={"h6"} style={styles.SectionTitle}>
            Curated Listings
          </Text>
          <ScrollView horizontal={true}>
            <Image source={searchBar} />
            <Image source={searchBar} />
            <Image source={searchBar} />
            <Image source={searchBar} />
          </ScrollView>
          <View style={styles.Row}>
            <Text preset={"h6"}>Featured Listings</Text>
            <TouchableOpacity>
              <Text preset={"bold"} style={styles.Link}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <FlashList data={featuredListings} renderItem={renderListingCard} numColumns={2} estimatedItemSize={cardWidth}/>
        </ScrollView>
      </View>
    )
  })

const styles = StyleSheet.create({
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
    width: widthPercentageToDP(100) - spacing.large,
  },
  SectionTitle: {
    marginBottom: spacing.large,
    marginHorizontal: spacing.medium,
  },
})

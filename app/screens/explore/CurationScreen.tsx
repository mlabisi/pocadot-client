import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { BannerWithOverlay, LightDivider, ListingCard, Text } from "../../components"
import { colors, spacing } from "../../theme"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import { featuredListings } from "./demo"
import { FlashList } from "@shopify/flash-list"
import { Asset } from "expo-asset"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const cardWidth = wp(42)

const rv = require("../../../assets/images/demo/rv.png")
const logo = require("../../../assets/images/demo/squareLogo.png")

export const CurationScreen: FC<StackScreenProps<AppStackParamList, "CurationScreen">> = observer(
  function CuratedCollectionScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const bannerImage = Asset.fromModule(rv)
    const overlayImage = Asset.fromModule(logo)

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

    return (
      <View style={styles.Root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Container}>
            <View style={styles.BannerContainer}>
              <BannerWithOverlay
                width={wp(100) - spacing.medium * 2}
                bannerImage={bannerImage}
                overlayImage={overlayImage}
              />
            </View>
            <Text preset={"h3"}>Girl Group Photocards</Text>
            <Text preset={"bodySM"} style={styles.Description}>
              September has been a busy month for Girl Groups in Kpop! Check out the latest Girl
              Group listings below.
            </Text>
          </View>

          <LightDivider style={styles.Divider} />

          <View style={styles.ListingsContainer}>
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
  },
)

const styles = StyleSheet.create({
  BannerContainer: {
    height: hp(25),
    marginBottom: spacing.medium,
    width: wp(100)
  },
  Card: {
    flex: 1,
  },
  Container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: spacing.medium,
    marginTop: spacing.large,
    width: wp(100) - spacing.medium * 2,
  },
  Description: {
    textAlign: "center",
  },
  Divider: {
    marginLeft: spacing.medium,
    width: wp(100) - spacing.medium * 2,
  },
  ListingsContainer: {
    minHeight: hp(100),
    width: wp(100),
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
})
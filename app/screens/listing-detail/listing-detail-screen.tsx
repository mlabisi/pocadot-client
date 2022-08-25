import React, { FC, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Header, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { load } from "../../utils/storage"
import { RootStoreContext, useQuery } from "../../models"

const { height } = Dimensions.get("window")
const headerHeight = height * 0.2

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}
const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}

const HEADER_TEXT: TextStyle = {
  color: color.palette.lavender,
}

const CARD_HEADLINE: ViewStyle = {
  alignItems: "center",
  flex: 0.6,
  flexDirection: "column",
}

const LISTING_IDOL: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
  letterSpacing: -0.44,
  color: color.palette.black,
  textAlign: "center",
}

const LISTING_USERNAME: TextStyle = {
  fontSize: 10,
  fontWeight: "400",
  letterSpacing: -0.2,
  color: "rgba(0,0,0,1)",
  textAlign: "center",
  justifyContent: "center",
}

const SUBHEADER: ViewStyle = {
  ...HEADER,
  flexDirection: "column-reverse",
}

export const ListingDetailScreen: FC<StackScreenProps<NavigatorParamList, "listingDetail">> =
  observer(function ListingDetailScreen({ navigation }) {
    const rootStore = useContext(RootStoreContext)
    const { selectedListingId, listings } = rootStore
    const selectedListing = listings.get(selectedListingId)
    
    return (
      <SafeAreaView style={ROOT}>
        <Screen preset="fixed">
          <View style={HEADER}>
            <Header
              headerHeight={headerHeight}
              leftTx={"common.back"}
              onLeftPress={() => navigation.goBack()}
              style={HEADER}
              textStyle={HEADER_TEXT}
            ></Header>
          </View>
          <View>
            {selectedListing.groups.length > 0 && (
              <Text style={LISTING_IDOL}>
                {selectedListing.groups.map((group) => group.name).join(",")} -{" "}
                {selectedListing.idols.map((idol) => idol.stageName).join(",")}
              </Text>
            )}
            {selectedListing.listedBy.username && (
              <Text style={LISTING_USERNAME}>@{selectedListing.listedBy.username}</Text>
            )}
          </View>
        </Screen>
      </SafeAreaView>
    )
  })

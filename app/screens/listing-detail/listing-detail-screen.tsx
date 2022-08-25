import React, { FC, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Dimensions,
  ImageStyle,
  Pressable,
  SafeAreaView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Header, Text, Icon } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { load } from "../../utils/storage"
import { RootStoreContext, useQuery } from "../../models"

const { height, width } = Dimensions.get("window")
const headerHeight = height * 0.15

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
const DESC_TEXT: TextStyle = {
  ...HEADER_TEXT,
  paddingHorizontal: spacing[4],
}

const CELL: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  position: "relative",
  width,
}

const ROW: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width,
}

const TITLE_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  paddingHorizontal: spacing[4],
  width,
}

const IDOL_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  position: "relative",
  paddingHorizontal: 0,
}

const DIVIDER: ViewStyle = {
  borderWidth: 0.75,
  borderStyle: "solid",
  borderColor: color.primary,
  width: width - spacing[4] * 2,
  height: 1,
  alignSelf: "center",
}

const CARD_HEADLINE: ViewStyle = {
  alignItems: "center",
  flex: 0.6,
  flexDirection: "column",
}

const FAVED_BADGE: ViewStyle = {
  backgroundColor: color.palette.white,
  shadowColor: color.palette.black,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 1,
  width: 23,
  height: 23,
  borderRadius: 100,
  justifyContent: "center",
  alignContent: "center",
}
const FAVED_ICON: ImageStyle = {
  width: 14,
  height: 14,
  alignSelf: "center",
}

const LISTING_IDOL: TextStyle = {
  fontSize: 22,
  fontWeight: "500",
  letterSpacing: -0.44,
  color: color.palette.black,
  textAlign: "center",
}

const TEXT: TextStyle = {
  fontSize: 20,
  fontWeight: "400",
  letterSpacing: -0.2,
  color: color.palette.black,
  textAlign: "center",
  justifyContent: "center",
  paddingLeft: spacing[4],
  paddingRight: spacing[2],
  paddingVertical: spacing[3],
}

const TAGS_CONTAINER: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
}
const TAG: ViewStyle = {
  paddingVertical: 2,
  paddingHorizontal: 10,
  justifyContent: "center",
  alignSelf: "center",
  borderRadius: 100,
  backgroundColor: color.palette.mint,
}
const TAG_TEXT: TextStyle = {
  fontSize: 6,
  fontWeight: "600",
  letterSpacing: 0.1,
  color: color.palette.black,
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
    const [fillHeart, setFillHeart] = useState(true)

    return (
      <Screen preset="scroll">
        <SafeAreaView style={ROOT}>
          <Header
            headerHeight={headerHeight}
            leftTx={"common.back"}
            onLeftPress={() => navigation.goBack()}
            style={HEADER}
            textStyle={HEADER_TEXT}
          >
            <View style={CELL}>
              <View style={TITLE_CONTAINER}>
                <Pressable
                  style={FAVED_BADGE}
                  onPress={() => {
                    setFillHeart(!fillHeart)
                  }}
                >
                  <Icon icon={fillHeart ? "heartFill" : "heart"} style={FAVED_ICON} />
                </Pressable>
                <View style={IDOL_CONTAINER}>
                  {selectedListing.groups.length > 0 && (
                    <Text style={LISTING_IDOL}>
                      {selectedListing.groups.map((group) => group.name).join(",")} ·{" "}
                      {selectedListing.idols.map((idol) => idol.stageName).join(",")}
                    </Text>
                  )}
                  <Text style={LISTING_IDOL}>
                    {selectedListing.release ?? "STEREOTYPE Version 1"}
                  </Text>
                </View>
              </View>
            </View>
          </Header>
          <View style={DIVIDER} />
          <View style={CELL}>
            <View style={ROW}>
              <Text tx={"listings.detail.sellerDescription"} style={TEXT} />
              <View style={TAGS_CONTAINER}>
                {selectedListing.type.map((tag) => (
                  <View key={tag} style={TAG}>
                    <Text style={TAG_TEXT}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
            {selectedListing.description && (
              <Text style={DESC_TEXT}>{selectedListing.description}</Text>
            )}
          </View>
        </SafeAreaView>
      </Screen>
    )
  })

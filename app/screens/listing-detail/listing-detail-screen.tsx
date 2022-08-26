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
import { Screen, Header, Text, Icon, Button, AutoImage } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { load } from "../../utils/storage"
import {
  listingModelPrimitives,
  ListingType,
  RootStoreContext,
  selectFromListing,
  useQuery,
} from "../../models"
import { translate } from "../../i18n"
import { titleize } from "../../utils/titelize"
import { FlatGrid } from "react-native-super-grid"

const defaultImage = require("./yoon.png")

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

const IMAGE: ImageStyle = {
  width: width / 2.5,
  flex: 0.75,
  zIndex: -1,
  alignSelf: "center",
}

const HEADER_TEXT: TextStyle = {
  color: color.palette.lavender,
}
const DESC_TEXT: TextStyle = {
  ...HEADER_TEXT,
  paddingHorizontal: spacing[4],
}
const BUTTON_TEXT: TextStyle = {
  ...DESC_TEXT,
  fontSize: 16,
  color: color.palette.white,
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
  marginTop: spacing[4],
}

const BUTTON_STYLE: ViewStyle = {
  borderRadius: 0,
  borderStyle: "solid",
  borderColor: color.primary,
  width,
  alignSelf: "center",
  marginVertical: spacing[4],
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
  textAlign: "left",
  justifyContent: "center",
  paddingLeft: spacing[4],
  paddingRight: spacing[2],
  paddingVertical: spacing[3],
}

const DETAIL_TEXT: TextStyle = {
  fontSize: 20,
  fontWeight: "400",
  letterSpacing: -0.2,
  color: color.palette.black,
  textAlign: "center",
  justifyContent: "center",
  paddingLeft: spacing[4],
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

const DETAIL_CONTAINER: ViewStyle = {
  ...ROW,
  borderRadius: 10,
  backgroundColor: color.palette.offGray,
  height: 40,
  width: width - spacing[4] * 2,
  alignSelf: "center",
  alignItems: "center",
  marginVertical: spacing[1],
}

const SUBHEADER: ViewStyle = {
  ...HEADER,
  flexDirection: "column-reverse",
}

export const ListingDetailScreen: FC<StackScreenProps<NavigatorParamList, "listingDetail">> =
  observer(function ListingDetailScreen({ navigation }) {
    const [fillHeart, setFillHeart] = useState(true)

    const { data, loading } = useQuery((store) =>
      store.queryListings(
        {
          input: {
            ids: [store.selectedListingId],
          },
        },
        (listing) =>
          listing.id.description.type.startingPrice.condition.country.release.international
            .groups((group) => group.name)
            .idols((idol) => idol.stageName)
            .listedBy((user) => user.username)
            .targetIdols((idol) => idol.stageName)
            .targetGroups((group) => group.name),
      ),
    )

    if (loading) {
      return (
        <SafeAreaView style={ROOT}>
          <View style={{ flexDirection: "column" }}>
            <Text style={HEADER_TEXT} tx={"common.loading"} />
          </View>
        </SafeAreaView>
      )
    }

    const selectedListing = { ...data.listings[0] }

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
                  {selectedListing.release && (
                    <Text style={LISTING_IDOL}>{selectedListing.release}</Text>
                  )}
                </View>
              </View>
              <View style={DIVIDER} />
            </View>
          </Header>
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
          <Button
            text={selectedListing.type
              .map((t) => {
                switch (t) {
                  case ListingType.WTT:
                    return translate("listings.detail.trade")
                  case ListingType.WTS:
                  default:
                    return translate("listings.detail.bid")
                }
              })
              .join("/")}
            textStyle={BUTTON_TEXT}
            style={BUTTON_STYLE}
          />
          <View style={CELL}>
            <Text tx={"common.details"} style={TEXT} />
            <View style={CELL}>
              <View style={DETAIL_CONTAINER}>
                <Icon icon={"money"} style={{ marginLeft: spacing[2], width: 22 }} />
                <Text
                  style={DETAIL_TEXT}
                  text={`${translate("listings.detail.pricePrefix")} ${translate(
                    "common.currency",
                  )}${selectedListing.startingPrice ?? 0}`}
                />
              </View>
              <View style={DETAIL_CONTAINER}>
                <Icon icon={"condition"} style={{ marginLeft: spacing[2], width: 22 }} />
                <Text
                  style={DETAIL_TEXT}
                  text={`${titleize(selectedListing.condition)} ${translate(
                    "listings.detail.conditionSuffix",
                  )}`}
                />
              </View>
              <View style={DETAIL_CONTAINER}>
                <Icon icon={"locationPin"} style={{ marginLeft: spacing[2], width: 22 }} />
                <Text
                  style={DETAIL_TEXT}
                  text={`${translate("listings.detail.locationPrefix")} ${selectedListing.country}`}
                />
              </View>
              <View style={DETAIL_CONTAINER}>
                <Icon icon={"globe"} style={{ marginLeft: spacing[2], width: 22 }} />
                <Text
                  style={DETAIL_TEXT}
                  text={`${translate("listings.detail.destinationPrefix")} ${
                    selectedListing.international
                      ? translate("listings.detail.everywhere")
                      : selectedListing.country
                  }`}
                />
              </View>
            </View>
          </View>
          {selectedListing.type.includes(ListingType.WTT) && (
            <View style={CELL}>
              <Text tx={"listings.detail.tradeTargets"} style={TEXT} />
              <View style={CELL}>
                {selectedListing.targetIdols.length > 0 && (
                  <View style={DETAIL_CONTAINER}>
                    <Icon icon={"person"} style={{ marginLeft: spacing[2], width: 22 }} />
                    <Text
                      style={DETAIL_TEXT}
                      text={selectedListing.targetIdols.map((i) => i.stageName).join(", ")}
                    />
                  </View>
                )}
                {selectedListing.targetGroups.length > 0 && (
                  <View style={DETAIL_CONTAINER}>
                    <Icon icon={"people"} style={{ marginLeft: spacing[2], width: 22 }} />
                    <Text
                      style={DETAIL_TEXT}
                      text={selectedListing.targetGroups.map((g) => g.name).join(", ")}
                    />
                  </View>
                )}
              </View>
            </View>
          )}
          <Text style={[TEXT, { marginBottom: -spacing[6] }]} tx={"common.photos"} />
          <FlatGrid
            data={Array(3).fill(0)}
            renderItem={(item) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                  width: width / 2.5,
                  height: width / 2.5,
                }}
              >
                <AutoImage source={defaultImage} style={IMAGE} />
              </View>
            )}
          />
        </SafeAreaView>
      </Screen>
    )
  })

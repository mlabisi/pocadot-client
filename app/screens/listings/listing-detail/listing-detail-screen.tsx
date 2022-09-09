import React, { FC, useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, SafeAreaView, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { Screen, Header, Text, Icon, Button, AutoImage } from "../../../components"
import { color, spacing } from "../../../theme"
import { ListingType, RootStoreContext, useQuery } from "../../../models"
import { translate } from "../../../i18n"
import { titleize } from "../../../utils/titelize"
import { HEADER_TEXT, ROOT } from "../styles"
import {
  BUTTON_STYLE,
  BUTTON_TEXT,
  CELL,
  DESC_TEXT,
  DETAIL_CONTAINER,
  DETAIL_TEXT,
  DIVIDER,
  FAVED_BADGE,
  FAVED_ICON,
  HEADER,
  headerHeight,
  IDOL_CONTAINER,
  IMAGE,
  LISTED_BY,
  LISTING_IDOL,
  MESSAGE_CONTAINER,
  NAME,
  ROW,
  TAG,
  TAG_TEXT,
  TAGS_CONTAINER,
  TEXT,
  TITLE_CONTAINER,
  width,
} from "./styles"

const defaultImage = require("./yoon.png")

export const ListingDetailScreen: FC<StackScreenProps<NavigatorParamList, "listingDetail">> =
  observer(function ListingDetailScreen({ navigation }) {
    const [fillHeart, setFillHeart] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const { currentUserId, selectedListingId } = useContext(RootStoreContext)

    const { data, loading } = useQuery((store) =>
      store.queryListings(
        {
          input: {
            ids: [selectedListingId],
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
    const isMyListing = currentUserId === selectedListing.listedBy.id

    return (
      <Screen preset="scroll">
        <SafeAreaView style={ROOT}>
          <Header
            headerHeight={headerHeight}
            leftTx={"common.back"}
            onLeftPress={() => navigation.goBack()}
            rightText={
              isMyListing ? (editMode ? translate("common.save") : translate("common.edit")) : null
            }
            onRightPress={() => {
              if (currentUserId === selectedListing.listedBy.id) setEditMode((oldMode) => !oldMode)
            }}
            style={HEADER}
            textStyle={HEADER_TEXT}
            n={0.7}
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
                      {selectedListing.groups.map((group) => group.name).join(", ")} ·{" "}
                      {selectedListing.idols.map((idol) => idol.stageName).join(", ")}
                    </Text>
                  )}
                  {selectedListing.release && (
                    <Text style={LISTING_IDOL}>{selectedListing.release}</Text>
                  )}
                  <View style={TAGS_CONTAINER}>
                    {selectedListing.isFeatured && (
                      <View style={[TAG, { backgroundColor: color.palette.yellow }]}>
                        <Text style={TAG_TEXT} tx={"listings.featured"} />
                      </View>
                    )}
                    {selectedListing.type.map((tag) => (
                      <View key={tag} style={TAG}>
                        <Text style={TAG_TEXT}>{tag}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
            <View style={DIVIDER} />
          </Header>
          <View style={MESSAGE_CONTAINER}>
            {!isMyListing && (
              <View style={[ROW, { justifyContent: "space-between", padding: spacing[4] }]}>
                <View>
                  <Text tx={"listings.detail.listedBy"} style={LISTED_BY} />
                  <Text text={`@${selectedListing.listedBy.username}`} style={NAME} />
                </View>
                <Button
                  tx={"common.message"}
                  style={[BUTTON_STYLE, { width: width * 0.25, borderRadius: 100 }]}
                />
              </View>
            )}
          </View>

          <View style={[CELL]}>
            {selectedListing.description && (
              <Text style={DESC_TEXT}>{selectedListing.description}</Text>
            )}
          </View>

          {!isMyListing && (
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
              onPress={() => navigation.navigate("makeOffer")}
            />
          )}
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
          <Text style={[TEXT, { marginBottom: spacing[4] }]} tx={"common.photos"} />
          <View style={[CELL, { paddingHorizontal: spacing[4], alignItems: "center" }]}>
            {Array(3)
              .fill(0)
              .map((item, index) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    width: width / 2.5,
                    height: width / 2.5,
                  }}
                >
                  <AutoImage source={defaultImage} style={IMAGE} />
                </View>
              ))}
          </View>
        </SafeAreaView>
      </Screen>
    )
  })

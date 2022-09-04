import * as React from "react"
import { Pressable, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../common/text/text"
import { AutoImage } from "../../common/auto-image/auto-image"
import { Icon } from "../../common/icon/icon"
import { useContext, useState } from "react"
import { RootStoreContext } from "../../../models"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import {
  CARD_CONTAINER,
  CARD_HEADLINE,
  FAVED_BADGE,
  FAVED_ICON,
  FEATURED_BADGE,
  FEATURED_ICON,
  LISTING_IDOL,
  LISTING_IMAGE,
  LISTING_USERNAME,
  TAG,
  TAG_TEXT,
  TAGS_CONTAINER,
} from "./styles"

const jImage = require("./j.png")
const gowonImage = require("./gowon.png")

interface ListingCardProps {
  navigation: StackNavigationProp<NavigatorParamList>
  item: any
  style?: StyleProp<ViewStyle>
  saveEnabled?: boolean
}

/**
 * Representation of an individual listing on the All Listings page
 */
export const ListingCard = observer(function ListingCard({
  navigation,
  item,
  style,
  saveEnabled = true,
}: ListingCardProps) {
  const {
    groups = [{ name: "STAYC" }],
    idols = [{ stageName: "J" }],
    type = ["WTS"],
    listedBy = { username: "papagowon" },
    isFeatured,
    isFaved = true,
  } = item

  const featuredImage = idols.map((i) => i.stageName).includes("Gowon") ? gowonImage : jImage

  const rootStore = useContext(RootStoreContext)

  const openDetailsView = async () => {
    rootStore.setSelectedListingId(item.id)
    navigation.navigate("listingDetail")
  }

  const [fillHeart, setFillHeart] = useState(isFaved)

  return (
    <TouchableOpacity onPress={openDetailsView} style={[CARD_CONTAINER, style]}>
      {isFeatured && (
        <View style={FEATURED_BADGE}>
          <Icon icon={"star"} style={FEATURED_ICON} />
        </View>
      )}
      {saveEnabled && (
        <Pressable
          style={FAVED_BADGE}
          onPress={() => {
            setFillHeart(!fillHeart)
          }}
        >
          <Icon icon={fillHeart ? "heartFill" : "heart"} style={FAVED_ICON} />
        </Pressable>
      )}
      <AutoImage source={featuredImage} style={LISTING_IMAGE} />
      <View style={TAGS_CONTAINER}>
        {type.map((tag) => (
          <View key={tag} style={TAG}>
            <Text style={TAG_TEXT}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={CARD_HEADLINE}>
        {groups.length > 0 && (
          <Text style={LISTING_IDOL}>
            {groups.map((group) => group.name).join(",")} -{" "}
            {idols.map((idol) => idol.stageName).join(",")}
          </Text>
        )}
        {listedBy.username && <Text style={LISTING_USERNAME}>@{listedBy.username}</Text>}
      </View>
    </TouchableOpacity>
  )
})

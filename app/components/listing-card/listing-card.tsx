import * as React from "react"
import {
  ImageStyle,
  Pressable,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { AutoImage } from "../auto-image/auto-image"
import { Spacer } from "../spacer/spacer"
import { Icon } from "../icon/icon"
import { useContext, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { save } from "../../utils/storage"
import { RootStoreContext } from "../../models"

const jImage = require("./j.png")
const gowonImage = require("./gowon.png")

const CARD_CONTAINER: ViewStyle = {
  justifyContent: "center",
  display: "flex",
  padding: 10,
  margin: 15,
  width: 160,
  height: 240,
  borderRadius: 15,
  backgroundColor: color.palette.white,
  shadowColor: color.palette.black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  elevation: 8,
}

const TAGS_CONTAINER: ViewStyle = {
  justifyContent: "center",
  flexDirection: "row",
  margin: 10,
}

const TAG: ViewStyle = {
  paddingHorizontal: 10,
  paddingVertical: 2,
  marginLeft: 2,
  justifyContent: "center",
  alignSelf: "center",
  borderRadius: 100,
  backgroundColor: color.palette.mint,
}

const CARD_HEADLINE: ViewStyle = {
  alignItems: "center",
  flex: 0.6,
  flexDirection: "column",
}

const TAG_TEXT: TextStyle = {
  fontSize: 6,
  fontWeight: "600",
  letterSpacing: 0.1,
  color: "rgba(0,0,0,1)",
  textAlign: "center",
  justifyContent: "center",
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

const LISTING_IMAGE: ImageStyle = {
  width: 100,
  height: 150,
  alignSelf: "center",
}

const BADGE: ViewStyle = {
  position: "absolute",
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
const FEATURED_BADGE: ViewStyle = {
  ...BADGE,
  top: -10,
  left: -10,
}
const FAVED_BADGE: ViewStyle = {
  ...BADGE,
  top: -10,
  right: -10,
}

const BADGE_ICON: ImageStyle = {
  width: 14,
  height: 14,
  alignSelf: "center",
}
const FEATURED_ICON: ImageStyle = {
  ...BADGE_ICON,
}
const FAVED_ICON: ImageStyle = {
  ...BADGE_ICON,
}

/**
 * Representation of an individual listing on the All Listings page
 */
export const ListingCard = observer(function ListingCard({ navigation, item }) {
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
    <TouchableOpacity onPress={openDetailsView} style={CARD_CONTAINER}>
      {isFeatured && (
        <View style={FEATURED_BADGE}>
          <Icon icon={"star"} style={FEATURED_ICON} />
        </View>
      )}
      <Pressable
        style={FAVED_BADGE}
        onPress={() => {
          setFillHeart(!fillHeart)
        }}
      >
        <Icon icon={fillHeart ? "heartFill" : "heart"} style={FAVED_ICON} />
      </Pressable>
      <AutoImage source={featuredImage} style={LISTING_IMAGE} />
      <View style={TAGS_CONTAINER}>
        {type.map((tag) => (
          <View key={tag} style={TAG}>
            <Text style={TAG_TEXT}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={CARD_HEADLINE}>
        {item.groups.length > 0 && (
          <Text style={LISTING_IDOL}>
            {groups.map((group) => group.name).join(",")} -{" "}
            {idols.map((idol) => idol.stageName).join(",")}
          </Text>
        )}
        {listedBy.username && <Text style={LISTING_USERNAME}>@{item.listedBy.username}</Text>}
      </View>
    </TouchableOpacity>
  )
})

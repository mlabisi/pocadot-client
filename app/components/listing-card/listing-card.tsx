import * as React from "react"
import { ImageStyle, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { AutoImage } from "../auto-image/auto-image"
import { Spacer } from "../spacer/spacer"

const defaultImage = require("./j.png")

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
  shadowRadius: 12.35,
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
  borderRadius: 100,
  backgroundColor: "rgba(183,239,163,1)",
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
  fontSize: 22,
  fontWeight: "600",
  letterSpacing: -0.44,
  color: "rgba(0,0,0,1)",
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

const FEATURED_IMAGE: ImageStyle = {
  width: 100,
  height: 100,
}
const FEATURED_BADGE: ViewStyle = {
  position: "absolute",
  top: 11,
  left: 29,
  backgroundColor: "rgba(255, 255, 255, 1)",
  shadowColor: "rgba(0,0,0,0.25)",
  elevation: 1,
  shadowOffset: { width: 0, height: 4 },
  width: 129,
  height: 209,
  borderRadius: 10,
}

/**
 * Describe your component here
 */
export const ListingCard = observer(function ListingCard({ item }) {
  const {
    featuredImage = defaultImage,
    groups = [{ name: "STAYC" }],
    idols = [{ stageName: "J" }],
    type = ["WTS"],
    listedBy = { username: "papagowon" },
    featured = true,
    isFaved = false,
  } = item

  return (
    <View style={CARD_CONTAINER}>
      <AutoImage source={featuredImage} style={FEATURED_IMAGE} />
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
    </View>
  )
})

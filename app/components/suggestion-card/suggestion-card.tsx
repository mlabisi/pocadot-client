import * as React from "react"
import {
  ImageStyle,
  Pressable,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { ListingModelType, RootStoreContext } from "../../models"
import { AutoImage } from "../auto-image/auto-image"
import { NavigationProp } from "@react-navigation/native"
import { useContext, useState } from "react"
import { save } from "../../utils/storage"
import { _NotCustomized, IModelType, ModelProperties } from "mobx-state-tree"

const yoon = require("./yoon.png")

const CARD_CONTAINER: ViewStyle = {
  justifyContent: "center",
  display: "flex",
  padding: 10,
  margin: 15,
  width: 300,
  height: 500,
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
  fontSize: 22,
  fontWeight: "600",
  letterSpacing: -0.44,
  color: "rgba(0,0,0,1)",
  textAlign: "center",
}

const LISTING_DESCRIPTION: TextStyle = {
  fontSize: 12,
  fontWeight: "400",
  letterSpacing: 0.1,
  color: "rgba(163,176,239,1)",
  textAlign: "center",
  justifyContent: "center",
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
  width: 230,
  alignSelf: "center",
}

export interface SuggestionCardProps {
  /**
   * The item to represent.
   */
  item: ListingModelType

  navigation?: NavigationProp<any>

  store: IModelType<ModelProperties, any, _NotCustomized, _NotCustomized>
}

/**
 * Describe your component here
 */
export const SuggestionCard = observer(function SuggestionCard(props: SuggestionCardProps) {
  const { item, navigation } = props
  const rootStore = useContext(RootStoreContext)

  const openDetailsView = async () => {
    rootStore.setSelectedListingId(item.id)
    navigation.navigate("listingDetail")
  }

  return (
    <Pressable onPress={openDetailsView} style={CARD_CONTAINER}>
      <AutoImage source={yoon} style={LISTING_IMAGE} />
      <View style={TAGS_CONTAINER}>
        {item.type.map((tag) => (
          <View key={tag} style={TAG}>
            <Text style={TAG_TEXT}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={CARD_HEADLINE}>
        {item.groups.length > 0 && (
          <Text style={LISTING_IDOL}>
            {item.groups.map((group) => group.name).join(",")} -{" "}
            {item.idols.map((idol) => idol.stageName).join(",")}
          </Text>
        )}
        {item.description && <Text style={LISTING_DESCRIPTION}>{item.description}</Text>}
        {item.listedBy.username && <Text style={LISTING_USERNAME}>@{item.listedBy.username}</Text>}
      </View>
    </Pressable>
  )
})

import * as React from "react"
import { View } from "react-native"
import { Card, Layout } from "@ui-kitten/components"
import { observer } from "mobx-react-lite"
import { Text } from "../../common/text/text"
import { ListingModelType, RootStoreContext } from "../../../../models"
import { AutoImage } from "../../common/auto-image/auto-image"
import { useContext } from "react"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../../navigators"
import {
  CARD_CONTAINER,
  LISTING_DESCRIPTION,
  LISTING_IDOL,
  LISTING_IMAGE,
  LISTING_USERNAME,
  TAG,
  TAG_TEXT,
  TAGS_CONTAINER,
} from "./styles"

const jImage = require("./j.png")
const gowonImage = require("./gowon.png")

export interface SuggestionCardProps {
  /**
   * The item to represent.
   */
  item: ListingModelType

  navigation?: StackNavigationProp<NavigatorParamList>
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
    <Card style={CARD_CONTAINER} onPress={openDetailsView}>
      <AutoImage
        source={item.idols.map((i) => i.stageName).includes("Gowon") ? gowonImage : jImage}
        style={LISTING_IMAGE}
      />
      <Layout level={"1"} style={{ paddingBottom: 14 }}>
        <Layout style={TAGS_CONTAINER}>
          {item.type.map((tag) => (
            <View key={tag} style={TAG}>
              <Text style={TAG_TEXT}>{tag}</Text>
            </View>
          ))}
        </Layout>
        {item.groups.length > 0 && (
          <Text style={LISTING_IDOL}>
            {item.groups.map((group) => group.name).join(",")} -{" "}
            {item.idols.map((idol) => idol.stageName).join(",")}
          </Text>
        )}
        {item.description && <Text style={LISTING_DESCRIPTION}>{item.description}</Text>}
        {item.listedBy.username && <Text style={LISTING_USERNAME}>@{item.listedBy.username}</Text>}
      </Layout>
    </Card>
  )
})

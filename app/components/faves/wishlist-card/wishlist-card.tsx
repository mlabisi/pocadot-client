import * as React from "react"
import { TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../common/text/text"
import {
  CONTAINER,
  FEATURED_IMAGE,
  LABEL,
  LABEL_CONTAINER,
  OVERLAY,
  OVERLAY_TEXT,
  SHADOW,
} from "./styles"
import { AutoImage } from "../../common/auto-image/auto-image"
import { useState } from "react"

const defaultImage = require("./hyeju.png")

export interface WishlistCardProps {
  item: any
}

/**
 * Displays a wishlist item
 */
export const WishlistCard = observer(function WishlistCard({ item }: WishlistCardProps) {
  const [overlay, setOverlay] = useState(false)
  const { featuredImage = defaultImage, taggedGroups, taggedIdols, description } = item

  const openDetailsView = async () => setOverlay(!overlay)

  return (
    <TouchableOpacity onPress={openDetailsView} style={[CONTAINER, SHADOW]}>
      {overlay && (
        <View style={OVERLAY}>
          <Text text={description} style={OVERLAY_TEXT} />
        </View>
      )}
      <AutoImage source={featuredImage} style={FEATURED_IMAGE} />
      <View style={LABEL_CONTAINER}>
        <Text style={LABEL}>
          {taggedIdols.map((idol) => idol.stageName).join(", ")} {"\n"}
          {taggedGroups.map((group) => group.name).join(", ")}
        </Text>
      </View>
    </TouchableOpacity>
  )
})

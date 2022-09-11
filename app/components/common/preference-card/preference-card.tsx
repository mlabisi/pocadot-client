import * as React from "react"
import { View } from "react-native"
import { Text } from "../text/text"
import { AutoImage } from "../auto-image/auto-image"
import { Spacer } from "../spacer/spacer"
import {
  CONTAINER,
  FEATURED_IMAGE,
  LABEL,
  LABEL_CONTAINER,
  SELECTED_CONTAINER,
  SHADOW,
} from "./styles"
import { PreferenceCardProps } from "./preference-card.props"
import { useContext } from "react"
import { RootStoreContext } from "../../../models"
import { observer } from "mobx-react-lite"

const defaultImage = require("./stayc.png")

/**
 * Displays an idol/group's default picture, label, and frame depending on whether or not the talent has been selected
 */
export const PreferenceCard = observer(function PreferenceCard({
  item,
  style,
  myProfileView = false,
}: PreferenceCardProps) {
  const { selectedPreferences } = useContext(RootStoreContext)
  const { featuredImage = defaultImage, name, stageName } = item

  return (
    <View
      style={!myProfileView && selectedPreferences.includes(item.id) ? SELECTED_CONTAINER : null}
    >
      <View style={[CONTAINER, SHADOW, style]}>
        <AutoImage source={featuredImage} style={FEATURED_IMAGE} />
        <View style={LABEL_CONTAINER}>
          <Spacer n={0.4} />
          <Text text={name ?? stageName} style={LABEL} />
          <Spacer n={0.4} />
        </View>
      </View>
    </View>
  )
})

import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "../../theme"
import { Text } from "../ignite/Text"
import { ListingTag } from "./ListingTag"
import { SkipButton } from "./SkipButton"
import { SaveButton } from "./SaveButton"
import { Card } from "../common/Card"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import Swiper from "react-native-deck-swiper"
import { MutableRefObject } from "react"
import { AutoImage } from "../ignite/AutoImage"

export interface SuggestionCardProps {
  cardHeight: number

  cardWidth: number

  artistName: string

  releaseName: string

  listingTag: string

  swiper: MutableRefObject<Swiper<any>>

  setIsSwipingLeft: React.Dispatch<React.SetStateAction<boolean>>

  setIsSwipingRight: React.Dispatch<React.SetStateAction<boolean>>

  image: any
}

/**
 * Suggestion card for users to choose to skip, save, or view
 */
export const SuggestionCard = observer(function SuggestionCard(props: SuggestionCardProps) {
  const picDimensions = props.cardWidth * 0.85

  return (
    <Card height={props.cardHeight} width={props.cardWidth}>
      <View
        style={[
          styles.AutoLayoutVertical,
          { height: props.cardHeight * 0.95, width: props.cardWidth },
        ]}
      >
        <AutoImage
          source={props.image}
          style={[styles.Image, { width: picDimensions, height: picDimensions }]}
        />
        <View style={styles.AutoLayoutVertical}>
          <Text preset={"h3"}>{props.artistName}</Text>
          <Text preset={"bodySM"} style={styles.ReleaseName}>
            {props.releaseName}
          </Text>
          <View style={styles.AutoLayoutHorizontal}>
            <ListingTag tag={props.listingTag} />
          </View>
        </View>
        <View style={[styles.Buttons, { width: wp(75) }]}>
          <SkipButton
            onPress={() => {
              props.swiper.current.swipeLeft()
              props.setIsSwipingLeft(true)
            }}
          />
          <SaveButton
            onPress={() => {
              props.swiper.current.swipeRight()
              props.setIsSwipingRight(true)
            }}
          />
        </View>
      </View>
    </Card>
  )
})

const styles = StyleSheet.create({
  AutoLayoutHorizontal: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  AutoLayoutVertical: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  Buttons: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Image: {
    backgroundColor: colors.palette.greyscale["100"],
    borderRadius: 20,
  },
  ReleaseName: {
    color: colors.palette.greyscale["700"],
  },
})

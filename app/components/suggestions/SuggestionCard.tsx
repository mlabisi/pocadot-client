import * as React from "react"
import { StyleSheet, View} from "react-native"
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

export interface SuggestionCardProps {
  cardHeight: number

  cardWidth: number

  artistName: string

  releaseName: string

  listingTag: string

  swiper: MutableRefObject<Swiper<any>>

  setIsSwipingLeft:  React.Dispatch<React.SetStateAction<boolean>>

  setIsSwipingRight:  React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Suggestion card for users to choose to skip, save, or view
 */
export const SuggestionCard = observer(function SuggestionCard(props: SuggestionCardProps) {
  const picDimensions = props.cardWidth * 0.85

  return (
    <Card height={props.cardHeight} width={props.cardWidth}>
      <View style={[styles.AutoLayoutVertical, {height: props.cardHeight}]}>
        <View style={[styles.Image, { width: picDimensions, height: picDimensions }]} />
        <Text preset={"h6"} style={styles.ArtistName}>{props.artistName}</Text>
        <Text preset={"bodyXS"} style={styles.ReleaseName}>{props.releaseName}</Text>
        <View style={styles.AutoLayoutHorizontal}>
          <ListingTag tag={props.listingTag} />
        </View>
        <View style={[styles.Buttons, { width: wp(75)}]}>
          <SkipButton onPress={() => {
            props.swiper.current.swipeLeft()
            props.setIsSwipingLeft(true)
          }} />
          <SaveButton onPress={() => {
            props.swiper.current.swipeRight()
            props.setIsSwipingRight(true)
          }} />
        </View>
      </View>
    </Card>

  )
})

const styles = StyleSheet.create({
  ArtistName: {
    lineHeight: 22,
    marginBottom: 3,
    marginTop: 30
  },
  AutoLayoutHorizontal: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 4,
  },
  AutoLayoutVertical: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  Buttons: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  Image: {
    backgroundColor: colors.palette.greyscale["100"],
    borderRadius: 20,
    marginBottom: 10,
    paddingTop: 25,
  },
  ReleaseName: {
    color: colors.palette.greyscale["700"],
  },
})

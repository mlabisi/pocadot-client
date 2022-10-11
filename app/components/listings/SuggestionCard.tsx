import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "../../theme"
import { Text } from "../ignite/Text"
import { ListingTag } from "./ListingTag"
import { SkipButton } from "./SkipButton"
import { SaveButton } from "./SaveButton"
import { Card } from "../common/Card"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"

export interface SuggestionCardProps {
  artistName: string

  releaseName: string

  listingTag: string
}

/**
 * Suggestion card for users to choose to skip, save, or view
 */
export const SuggestionCard = observer(function SuggestionCard(props: SuggestionCardProps) {

  return (
    <Card>
        <View style={styles.Image} />
        <Text preset={"h6"} style={styles.ArtistName}>{props.artistName}</Text>
        <Text preset={"bodyXS"} style={styles.ReleaseName}>{props.releaseName}</Text>
        <View style={styles.AutoLayoutHorizontal}>
          <ListingTag tag={props.listingTag} />
        </View>
        <View style={styles.Buttons}>
          <SkipButton onPress={() => {/****/
          }} />
          <SaveButton onPress={() => {/****/
          }} />
        </View>
    </Card>

  )
})

const styles = StyleSheet.create({
  ArtistName: {
    lineHeight: 22,
    marginBottom: 3
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
  Buttons: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: wp(75),
  },
  Image: {
    backgroundColor: colors.palette.greyscale["100"],
    borderRadius: 20,
    height: wp(65),
    marginBottom: 10,
    width: wp(65),
  },
  ReleaseName: {
    color: colors.palette.greyscale["700"]
  },
})

import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../../theme"
import { Text } from "../ignite/Text"
import { ListingTag } from "./ListingTag"
import { SkipButton } from "./SkipButton"
import { SaveButton } from "./SaveButton"
import { Card } from "../common/Card"

export interface SuggestionCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

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
      <View style={styles.AutoLayoutVertical}>
        <Text style={styles.ArtistName}>{props.artistName}</Text>
        <Text style={styles.ReleaseName}>{props.releaseName}</Text>
        <View style={styles.AutoLayoutHorizontal}>
          <ListingTag tag={props.listingTag} />
        </View>
        <View style={styles.Buttons}>
          <SkipButton onPress={() => {/****/
          }} />
          <SaveButton onPress={() => {/****/
          }} />
        </View>
      </View>
    </Card>

  )
})

const styles = StyleSheet.create({
  ArtistName: {
    color: colors.text,
    fontFamily: typography.secondary.normal,
    fontSize: 18,
    fontWeight: "400",
    justifyContent: "center",
    lineHeight: 22,
    marginBottom: 3,
    textAlign: "center",
    width: 316,
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
    width: 315,
  },
  AutoLayoutVertical: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: 94,
    justifyContent: "flex-end",
    width: 315,
  },
  Buttons: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 4,
    width: 315,
  },
  ReleaseName: {
    color: colors.palette.greyscale["700"],
    fontSize: 12,
    fontWeight: "500",
    justifyContent: "center",
    letterSpacing: 0.2,
    marginBottom: 3,
    textAlign: "center",
    width: 316,
  },
})

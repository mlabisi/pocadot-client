import * as React from "react"
import { ImageSourcePropType, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "../theme"
import { Card } from "./Card"
import { AutoImage } from "./ignite/AutoImage"

export interface ListingCardProps {
  /**
   * The image to be featured for this listing.
   */
  featuredImage: ImageSourcePropType

  /**
   * The avatar of the user who posted this listing.
   */
  avatar: ImageSourcePropType

  /**
   * The name of the artist(s) featured in this listing.
   */
  artistName: string

  /**
   * The name of the release this listing is from.
   */
  releaseName: string

  /**
   * Valid values: WTS, WTT, WTS/WTT
   */
  listingTag: string
}

/**
 * Describe your component here
 */
export const ListingCard = observer(function ListingCard(props: ListingCardProps) {
  const { artistName, releaseName, listingTag, featuredImage, avatar } = props

  return (
    <Card>
      <AutoImage style={styles.Image} source={featuredImage} />
      <View style={styles.Info}>
        <View style={styles.ListingName}>
          <Text style={styles.Txt813}>{artistName} </Text>
          <Text style={styles.Txt1062}>{releaseName} </Text>
        </View>
        <View style={styles.ListerInfo}>
          <View style={styles.ListedBy}>
            <AutoImage style={styles.Avatar} source={avatar} />
            <Text style={styles.Txt890}>@listed by</Text>
          </View>
          <View style={styles.Tag}>
            <Text style={styles.Txt191}>{listingTag}</Text>
          </View>
        </View>
      </View>
    </Card>
  )
})

const styles = StyleSheet.create({
  ListingCardFrame: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 185,
    height: 245,
  },
  ListingCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 28,
    backgroundColor: "colors.palette.White",
    shadowColor: "rgba(4,6,15,0.05)",
    elevation: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  Image: {
    width: 154,
    height: 154,
    borderRadius: 20,
    marginBottom: 10,
  },
  Info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 154,
  },
  ListingName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 12,
    width: 154,
  },
  Txt813: {
    fontSize: 18,
    fontFamily: "Jua, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    color: "colors.text",
    marginRight: 4,
  },
  Txt1062: {
    fontSize: 12,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "500",
    letterSpacing: 0.2,
    color: "colors.textDim",
  },

  ListerInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: 154,
  },
  ListedBy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    marginRight: 6,
    width: 89,
  },
  Avatar: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 6,
  },
  Txt890: {
    fontSize: 12,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    letterSpacing: 0.2,
    color: "colors.text",
    width: 68,
  },

  Tag: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
    borderRadius: 6,
    backgroundColor: "colors.tint",
    height: 14,
  },
  Txt191: {
    fontSize: 8,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    letterSpacing: 0.2,
    color: "colors.palette.others.White",
  },
})


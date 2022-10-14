import * as React from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "../../theme"
import { AutoImage, Card, ListingTag, Text } from "../index"

export interface ListingCardProps {
  listedBy: string

  cardWidth: number

  artistName: string

  releaseName: string

  listingTag: string

  avatar: any

  image: any
}

/**
 * Quick view of a listing
 */
export const ListingCard = observer(function ListingCard(props: ListingCardProps) {
  const picDimensions = props.cardWidth * 0.85

  return (
    <Card width={props.cardWidth} style={styles.Spacing}>
      <View style={[styles.Container, { width: props.cardWidth }]}>
        <AutoImage
          source={props.image}
          style={[styles.Image, { width: picDimensions, height: picDimensions }]}
        />

        <View style={styles.TagContainer}>
          <ListingTag tag={props.listingTag} />
        </View>

        <View style={styles.Info}>
          <Text preset={"h6"} style={styles.ArtistName}>
            {props.artistName}
          </Text>
          <Text preset={"bodyXXS"} style={styles.ReleaseName}>
            { props.releaseName}
          </Text>
        </View>

          <View style={styles.ListedBy}>
            <AutoImage style={styles.Avatar} source={props.avatar} />
            <Text numberOfLines={1} preset={"semiBold"} style={styles.Username}>@{props.listedBy}</Text>
          </View>


      </View>
    </Card>
  )
})

const styles = StyleSheet.create({
  ArtistName: {
    marginRight: spacing.tiny,
  },
  Avatar: {
    borderRadius: 8,
    height: spacing.medium,
    marginRight: spacing.tiny,
    width: spacing.medium,
  },
  Container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: spacing.medium,
  },
  Image: {
    borderRadius: 20,
    marginBottom: spacing.small
  },
  Info: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.tiny

  },
  ListedBy: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: spacing.tiny
  },
  ListerInfo: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  ListingName: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ReleaseName: {
    color: colors.palette.greyscale["700"],
  },
  Spacing: {
    margin: spacing.small,
  },
  TagContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  Username: {
    fontSize: spacing.small
  }
})

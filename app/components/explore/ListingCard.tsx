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
    <Card width={props.cardWidth}>
      <View style={[styles.Container, { width: props.cardWidth }]}>
        <AutoImage
          source={props.image}
          style={[styles.Image, { width: picDimensions, height: picDimensions }]}
        />
        <View style={styles.Info}>
          <View style={styles.ListingName}>
            <Text preset={"h6"} style={styles.ArtistName}>
              {props.artistName}
            </Text>
            <View style={styles.TagContainer}>
              <ListingTag tag={props.listingTag} />
            </View>
          </View>
            <Text preset={"bodyXXS"} style={styles.ReleaseName}>
              {props.releaseName}
            </Text>
          <View style={styles.ListerInfo}>
            <View style={styles.ListedBy}>
              <AutoImage style={styles.Avatar} source={props.avatar} />
              <Text preset={"bold"}>@{props.listedBy}</Text>
            </View>
          </View>
        </View>
      </View>
    </Card>
  )
})

const styles = StyleSheet.create({
  ArtistName: {
    marginRight: spacing.tiny,
    paddingTop: spacing.small,
  },
  Avatar: {
    borderRadius: 8,
    height: 16,
    marginRight: 6,
    width: 16,
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
  },
  Info: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: spacing.tiny,
  },
  ListedBy: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
  },
  ListerInfo: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: spacing.small,
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
  TagContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
})

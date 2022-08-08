import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { Text } from "../text/text"
import { useQuery } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { ListingCard } from "../listing-card/listing-card"
import { FlatGrid } from "react-native-super-grid"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

/**
 * Used to display all listings
 */
export const AllListings = observer(function AllListings() {
  const { data, loading } = useQuery((store) =>
    store.queryListingsFeed(
      {},
      `__typename
        id
        type
        isFeatured
        groups {
          __typename
          id
          name
        }
        idols {
          __typename
          id
          stageName
        }
        description
        listedBy {
          __typename
          id
          username
        }`,
    ),
  )

  if (loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.ok"} />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <FlatGrid
      data={data.listingsFeed}
      renderItem={({ item }) => <ListingCard key={item.id} item={item} />}
    />
  )
})

import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../common/text/text"
import { RootStoreContext, useQuery } from "../../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { ListingCard } from "../listing-card/listing-card"
import { FlatGrid } from "react-native-super-grid"
import { ROOT, TITLE } from "./styles"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { useContext, useEffect, useState } from "react"

interface AllListingsProps {
  navigation: StackNavigationProp<NavigatorParamList>
  myListings?: boolean
}

/**
 * Used to display all listings
 */
export const AllListings = observer(function AllListings({
  navigation,
  myListings = false,
}: AllListingsProps) {
  const [listings, setListings] = useState([])
  const { currentUserId } = useContext(RootStoreContext)

  const listingsFeed = myListings
    ? useQuery((store) =>
        store.queryUsers({ input: { ids: [currentUserId] } }, (user) =>
          user.id.listings((listing) =>
            listing.id.type.isFeatured
              .groups((group) => group.name)
              .idols((idol) => idol.stageName),
          ),
        ),
      )
    : useQuery((store) =>
        store.queryListingsFeed({}, (listing) =>
          listing.id.type.isFeatured
            .groups((group) => group.name)
            .idols((idol) => idol.stageName)
            .listedBy((user) => user.username),
        ),
      )

  useEffect(() => {
    // @ts-ignore the key for the data changes depending on whether we're viewing current user's listings
    setListings(myListings ? listingsFeed.data.users[0].listings : listingsFeed.data.listingsFeed)
  }, [setListings, listingsFeed.data])

  const renderItem = ({ item }) =>
    myListings ? (
      <ListingCard key={item.id} item={item} navigation={navigation} saveEnabled={false} />
    ) : (
      <ListingCard key={item.id} item={item} navigation={navigation} />
    )

  if (listingsFeed.loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.loading"} />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <FlatGrid
      data={listings
        .slice()
        .filter((l) => (myListings ? l : l.listedBy.id !== currentUserId))
        .sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) {
            return -1
          } else if (!a.isFeatured && b.isFeatured) {
            return 1
          } else {
            return -1
          }
        })}
      renderItem={renderItem}
    />
  )
})

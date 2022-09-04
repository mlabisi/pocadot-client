import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../common/text/text"
import { useQuery } from "../../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { ListingCard } from "../listing-card/listing-card"
import { FlatGrid } from "react-native-super-grid"
import { ROOT, TITLE } from "./styles"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"

interface AllListingsProps {
  navigation: StackNavigationProp<NavigatorParamList>
}

/**
 * Used to display all listings
 */
export const AllListings = observer(function AllListings({ navigation }: AllListingsProps) {
  const { data, loading } = useQuery((store) =>
    store.queryListingsFeed({}, (listing) =>
      listing.id.type.isFeatured
        .groups((group) => group.name)
        .idols((idol) => idol.stageName)
        .listedBy((user) => user.username),
    ),
  )

  const renderItem = ({ item }) => <ListingCard key={item.id} item={item} navigation={navigation} />

  if (loading) {
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
      data={data.listingsFeed.sort((a, b) => {
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

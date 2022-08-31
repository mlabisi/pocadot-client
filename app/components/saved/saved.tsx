import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { useQuery } from "../../models"
import { ListingCard } from "../listing-card/listing-card"
import { SafeAreaView } from "react-native-safe-area-context"
import { ROOT, TITLE } from "../all-listings/styles"
import { FlatGrid } from "react-native-super-grid"

export interface SavedProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  navigation: StackNavigationProp<NavigatorParamList, "faves", undefined>
}

/**
 * Used to display saved listings
 */
export const Saved = observer(function Saved({ navigation }) {
  const { data, loading } = useQuery((store) =>
    store.queryListings({ input: { fields: { favedBy: ["recJ1tZfGKHtdxeax"] } } }, (listing) =>
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
      data={data.listings.sort((a, b) => {
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

import * as React from "react"
import { FlatList, StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../common/text/text"
import { StackNavigationProp } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../../navigators"
import { useQuery } from "../../../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { ROOT, TITLE } from "../../listings/all-listings/styles"
import { WishlistCard } from "../wishlist-card/wishlist-card"

export interface WishlistProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  navigation: StackNavigationProp<NavigatorParamList>
}

/**
 * Used to display saved listings
 */
export const Wishlist = observer(function Wishlist() {
  const { data, loading } = useQuery((store) =>
    store.queryCollections({ input: { fields: { user: ["rec7m9YiRSYLBYkyb"] } } }, (collection) =>
      collection.id.description
        .taggedGroups((group) => group.name)
        .taggedIdols((idol) => idol.stageName),
    ),
  )

  const renderItem = ({ item }) => <WishlistCard key={item.id} item={item} />

  if (loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.loading"} />
        </View>
      </SafeAreaView>
    )
  }

  return <FlatList data={data.collections} renderItem={renderItem} />
})

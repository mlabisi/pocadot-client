import React, { FC, useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
  AllListings,
  FloatingButton,
  Header,
  Screen,
  Spacer,
  SuggestedListings,
  Text,
} from "../../components"
import { SafeAreaView } from "react-native-safe-area-context"
import { translate } from "../../i18n"
import {
  ACTIVE_TAB,
  CONTENT,
  FLOATING_BUTTON_CONTAINER,
  HEADER,
  HEADER_CONTENT,
  headerHeight,
  ROOT,
  SEGMENT_TITLE,
  TABS_CONTAINER,
  TITLE,
} from "./styles"
import { ListingsMode } from "./listings-mode"
import { RootStoreContext, useQuery } from "../../models"

export const ListingsScreen: FC<StackScreenProps<NavigatorParamList, "listings">> = observer(
  function ListingsScreen({ navigation }) {
    const { listingsMode } = useContext(RootStoreContext)

    const { data, loading } = useQuery((store) =>
      store.queryUserSuggestions({ input: "" }, (listing) =>
        listing.id.type.description
          .groups((group) => group.name)
          .idols((idol) => idol.stageName)
          .listedBy((user) => user.username),
      ),
    )

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
      <View style={CONTENT}>
        {listingsMode === ListingsMode.Suggested && (
          <SuggestedListings navigation={navigation} suggestions={data.userSuggestions} />
        )}
        {listingsMode === ListingsMode.All && <AllListings navigation={navigation} />}
        {listingsMode === ListingsMode.All && (
          <FloatingButton
            style={FLOATING_BUTTON_CONTAINER}
            onPress={() => navigation.navigate("addListing")}
          >
            <Text text={"+"} style={[SEGMENT_TITLE, { textAlign: "center", fontSize: 30 }]} />
          </FloatingButton>
        )}
      </View>
    )
  },
)

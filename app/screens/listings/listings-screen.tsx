import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
  AllListings,
  Spacer,
  SuggestedListings,
  Text,
  Screen,
  FloatingButton,
} from "../../components"
import { SafeAreaView } from "react-native-safe-area-context"
import { translate } from "../../i18n"
import {
  ACTIVE_TAB,
  CONTENT,
  FLOATING_BUTTON_CONTAINER,
  HEADER,
  HEADER_CONTENT,
  ROOT,
  SEGMENT_TITLE,
  TABS_CONTAINER,
  TITLE,
} from "./styles"

enum ListingsMode {
  Suggested,
  All,
}

export const ListingsScreen: FC<StackScreenProps<NavigatorParamList, "listings">> = observer(
  function ListingsScreen({ navigation }) {
    const [listingsMode, setListingsMode] = useState(ListingsMode.Suggested)

    return (
      <Screen preset="fixed">
        <SafeAreaView style={ROOT}>
          <View style={HEADER}>
            <View style={HEADER_CONTENT}>
              <Text tx="listings.title" preset="header" style={TITLE} />
              <Spacer n={0.5} />
              <SegmentedControlTab
                values={[translate("listings.suggested.label"), translate("listings.all.label")]}
                tabsContainerStyle={TABS_CONTAINER}
                tabTextStyle={SEGMENT_TITLE}
                activeTabStyle={ACTIVE_TAB}
                selectedIndex={listingsMode}
                onTabPress={(index) =>
                  setListingsMode(index === 0 ? ListingsMode.Suggested : ListingsMode.All)
                }
              />
            </View>
          </View>
          <View style={CONTENT}>
            {listingsMode === ListingsMode.Suggested && (
              <SuggestedListings navigation={navigation} />
            )}
            {listingsMode === ListingsMode.All && <AllListings navigation={navigation} />}
          </View>
          {listingsMode === ListingsMode.All && (
            <FloatingButton
              style={FLOATING_BUTTON_CONTAINER}
              onPress={() => navigation.navigate("addListing")}
            >
              <Text text={"+"} style={[SEGMENT_TITLE, { textAlign: "center", fontSize: 30 }]} />
            </FloatingButton>
          )}
        </SafeAreaView>
      </Screen>
    )
  },
)

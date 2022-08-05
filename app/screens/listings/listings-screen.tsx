import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AllListings, Spacer, SuggestedListings, Text } from "../../components"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { translate } from "../../i18n"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const HEADER: ViewStyle = { flexDirection: "column", flex: 0.1, justifyContent: "flex-end" }

const HEADER_CONTENT: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
  flexDirection: "row",
  paddingBottom: 15,
}

const CONTENT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

const SEGMENT_TITLE: TextStyle = {
  fontSize: 12,
}

const TABS_CONTAINER: ViewStyle = {
  flex: 1,
  height: 25,
  paddingRight: 15,
}

const ACTIVE_TAB: ViewStyle = { backgroundColor: color.primary }

enum ListingsMode {
  Suggested,
  All,
}

export const ListingsScreen: FC<StackScreenProps<NavigatorParamList, "listings">> = observer(
  function ListingsScreen({ navigation }) {
    const [listingsMode, setListingsMode] = useState(ListingsMode.Suggested)

    return (
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
          {listingsMode === ListingsMode.Suggested && <SuggestedListings />}
          {listingsMode === ListingsMode.All && <AllListings />}
        </View>
      </SafeAreaView>
    )
  },
)

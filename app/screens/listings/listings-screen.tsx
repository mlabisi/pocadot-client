import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Spacer, Text } from "../../components"
import { color } from "../../theme"
import { useQuery } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { translate } from "../../i18n"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
  flexDirection: "row",
  height: 75,
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
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <View style={HEADER}>
            <Text tx="listings.title" preset="header" style={TITLE} />
            <Spacer n={0.5} />
            <SegmentedControlTab
              values={[translate("listings.suggestedLabel"), translate("listings.allLabel")]}
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
          {listingsMode === ListingsMode.Suggested && <Text style={TITLE}>Suggested</Text>}
          {listingsMode === ListingsMode.All &&
            data.listingsFeed.map((item) => (
              <Text key={item.id} style={TITLE}>
                All
              </Text>
            ))}
        </View>
      </SafeAreaView>
    )
  },
)

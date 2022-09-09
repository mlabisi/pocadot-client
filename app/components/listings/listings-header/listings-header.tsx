import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../../common/text/text"
import {
  ACTIVE_TAB,
  HEADER_CONTENT,
  headerHeight,
  SEGMENT_TITLE,
  TABS_CONTAINER,
  TITLE,
} from "../../../screens/listings/styles"
import { Spacer } from "../../common/spacer/spacer"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { translate } from "../../../i18n"
import { Header } from "../../common/header/header"
import { useContext } from "react"
import { RootStoreContext } from "../../../models"
import { ListingsMode } from "../../../screens/listings/listings-mode"

export const ListingsHeader = observer(function ListingsHeader() {
  const rootStore = useContext(RootStoreContext)

  return (
    <Header headerHeight={headerHeight}>
      <View style={HEADER_CONTENT}>
        <Text tx="listings.title" preset="header" style={TITLE} />
        <Spacer n={0.5} />
        <SegmentedControlTab
          values={[translate("listings.suggested.label"), translate("listings.all.label")]}
          tabsContainerStyle={TABS_CONTAINER}
          tabTextStyle={SEGMENT_TITLE}
          activeTabStyle={ACTIVE_TAB}
          selectedIndex={parseInt(rootStore.listingsMode)}
          onTabPress={(index) => {
            rootStore.setListingsMode(index === 0 ? ListingsMode.Suggested : ListingsMode.All)
          }}
        />
      </View>
    </Header>
  )
})

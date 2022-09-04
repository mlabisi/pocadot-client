import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import {
  ACTIVE_TAB,
  HEADER,
  HEADER_CONTENT,
  headerHeight,
  SEGMENT_TITLE,
  TABS_CONTAINER,
  TITLE,
} from "../../screens/listings/styles"
import { Spacer } from "../spacer/spacer"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { translate } from "../../i18n"
import { Header } from "../header/header"
import { useContext, useState } from "react"
import { RootStoreContext } from "../../models"
import { ListingsMode } from "../../screens/listings/listings-mode"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface ListingsHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ListingsHeader = observer(function ListingsHeader(props: ListingsHeaderProps) {
  const rootStore = useContext(RootStoreContext)

  return (
    <Header headerHeight={headerHeight} style={HEADER}>
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

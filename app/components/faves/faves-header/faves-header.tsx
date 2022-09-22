import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Header } from "../../common/header/header"
import { Text } from "../../common/text/text"
import {
  ACTIVE_TAB,
  HEADER,
  HEADER_CONTENT,
  headerHeight,
  SEGMENT_TITLE,
  TABS_CONTAINER,
  TITLE,
} from "../../../screens/old/faves/styles"
import { Spacer } from "../../common/spacer/spacer"
import SegmentedControlTab from "react-native-segmented-control-tab"
import { translate } from "../../../i18n"
import { useContext } from "react"
import { RootStoreContext } from "../../../models"
import { FavesMode } from "../../../screens/old/faves/faves-mode"

export const FavesHeader = observer(function FavesHeader() {
  const rootStore = useContext(RootStoreContext)

  return (
    <Header headerHeight={headerHeight} style={HEADER}>
      <View style={HEADER_CONTENT}>
        <Text tx={"faves.title"} preset={"header"} style={TITLE} />
        <Spacer n={0.5} />
        <SegmentedControlTab
          values={[translate("faves.saved.label"), translate("faves.wishlist.label")]}
          tabsContainerStyle={TABS_CONTAINER}
          tabTextStyle={SEGMENT_TITLE}
          activeTabStyle={ACTIVE_TAB}
          selectedIndex={parseInt(rootStore.favesMode)}
          onTabPress={(index) =>
            rootStore.setFavesMode(index === 0 ? FavesMode.Saved : FavesMode.Wishlist)
          }
        />
      </View>
    </Header>
  )
})

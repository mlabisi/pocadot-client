import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Saved, Screen, Spacer, Text, Wishlist } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
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
import SegmentedControlTab from "react-native-segmented-control-tab"
import { translate } from "../../i18n"

enum FavesMode {
  Saved,
  Wishlist,
}

export const FavesScreen: FC<StackScreenProps<NavigatorParamList, "faves">> = observer(
  function FavesScreen({ navigation }) {
    const [favesMode, setFavesMode] = useState(FavesMode.Saved)
    return (
      <Screen preset="fixed">
        <SafeAreaView style={ROOT}>
          <View style={HEADER}>
            <View style={HEADER_CONTENT}>
              <Text tx={"faves.title"} preset={"header"} style={TITLE} />
              <Spacer n={0.5} />
              <SegmentedControlTab
                values={[translate("faves.saved.label"), translate("faves.wishlist.label")]}
                tabsContainerStyle={TABS_CONTAINER}
                tabTextStyle={SEGMENT_TITLE}
                activeTabStyle={ACTIVE_TAB}
                selectedIndex={favesMode}
                onTabPress={(index) =>
                  setFavesMode(index === 0 ? FavesMode.Saved : FavesMode.Wishlist)
                }
              />
            </View>
          </View>
          <View style={CONTENT}>
            {favesMode === FavesMode.Saved && <Saved navigation={navigation} />}
            {favesMode === FavesMode.Wishlist && <Wishlist />}
          </View>
        </SafeAreaView>
      </Screen>
    )
  },
)

import React, { FC, useContext } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { FloatingButton, Saved, Text, Wishlist } from "../../components"
import { CONTENT, FLOATING_BUTTON_CONTAINER, SEGMENT_TITLE } from "./styles"
import { RootStoreContext } from "../../models"
import { FavesMode } from "./faves-mode"

export const FavesScreen: FC<StackScreenProps<NavigatorParamList, "faves">> = observer(
  function FavesScreen({ navigation }) {
    const { favesMode } = useContext(RootStoreContext)

    return (
      <>
        <View style={CONTENT}>
          {favesMode === FavesMode.Saved && <Saved navigation={navigation} />}
          {favesMode === FavesMode.Wishlist && <Wishlist />}
        </View>
        {favesMode === FavesMode.Wishlist && (
          <FloatingButton style={FLOATING_BUTTON_CONTAINER} onPress={() => {}}>
            <Text text={"+"} style={[SEGMENT_TITLE, { textAlign: "center", fontSize: 30 }]} />
          </FloatingButton>
        )}
      </>
    )
  },
)

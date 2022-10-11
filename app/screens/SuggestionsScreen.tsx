import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import Swiper from "react-native-deck-swiper"
import { MainNavigatorParamList } from "../navigators"
import { Screen, SuggestionCard, Text } from "../components"
import { colors } from "../theme"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const cardHeight = hp(60);
const cardWidth = wp(80);

const suggestions = [
  {
    artistName: "Nayeon",
    releaseName: "IM NAYEON",
    listingTag: "WTS",
  },
  {
    artistName: "Seulgi",
    releaseName: "28 Reasons",
    listingTag: "WTT",
  },
  {
    artistName: "J",
    releaseName: "BEAUTIFUL MONSTER",
    listingTag: "WTS/WTT",
  },
]

export const SuggestionsScreen: FC<StackScreenProps<MainNavigatorParamList, "SuggestionsScreen">> = observer(function SuggestionsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const renderSuggestionCard = (props) => {
    return (
      <SuggestionCard artistName={props.artistName} releaseName={props.releaseName} listingTag={props.listingTag} cardHeight={cardHeight} cardWidth={cardWidth} />)
  }
  return (
      <Swiper
      cards={suggestions}
      verticalSwipe={false}
      stackScale={10}
      stackSeparation={25}
      renderCard={renderSuggestionCard}
      stackSize={3}
      containerStyle={styles.Root}
      cardHorizontalMargin={(wp(100) - cardWidth) * 0.5}
    />
  )
})

const styles = StyleSheet.create({
  Root: {
    backgroundColor: colors.background
  }
})

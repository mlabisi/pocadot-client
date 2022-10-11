import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import Swiper from "react-native-deck-swiper"
import { MainNavigatorParamList } from "../navigators"
import { Screen, SuggestionCard, Text } from "../components"
import { colors } from "../theme"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const suggestions = [
  {
    artistName: "Nayeon",
    releaseName: "IM NAYEON",
    listingTag: "WTS"
  },
  {
    artistName: "Seulgi",
    releaseName: "28 Reasons",
    listingTag: "WTT"
  },
  {
    artistName: "J",
    releaseName: "BEAUTIFUL MONSTER",
    listingTag: "WTS/WTT"
  }
]

export const SuggestionsScreen: FC<StackScreenProps<MainNavigatorParamList, "SuggestionsScreen">> = observer(function SuggestionsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const renderSuggestionCard = (props) => {
    return (<SuggestionCard artistName={props.artistName} releaseName={props.releaseName} listingTag={props.listingTag}/>)
  }
  return (
    <Swiper
      cards={suggestions}
      verticalSwipe={false}
      stackScale={10}
      stackSeparation={15}
      renderCard={renderSuggestionCard}
      stackSize={3}
      containerStyle={styles.Root}
      />
  )
})

const styles = StyleSheet.create({
  Avatar: {
    backgroundColor: "rgba(217,217,217,1)",
    borderRadius: 8,
    height: 16,
    marginRight: 6,
    width: 16,
  },
  Container: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 28,
    display: "flex",
    elevation: 6,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
    shadowColor: "rgba(4,6,15,0.05)",
    shadowOffset: { width: 0, height: 4 },
  },
  Image: {
    backgroundColor: "rgba(217,217,217,1)",
    borderRadius: 20,
    height: 154,
    marginBottom: 10,
    width: 154,
  },
  Info: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 154,
  },
  ListedBy: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginRight: 6,
    width: 89,
  },
  ListerInfo: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 154,
  },
  ListingCard: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    height: 245,
    justifyContent: "flex-start",
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    width: 185,
  },

  ListingName: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 12,
    width: 154,
  },
  Root: {
    alignItems: "center",
    backgroundColor: colors.background,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  Tag: {
    alignItems: "center",
    backgroundColor: "rgba(163,176,239,1)",
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    height: 14,
    justifyContent: "center",
    paddingBottom: 5,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
  },
  Txt160: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.2,
    width: 68,
  },

  Txt432: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 8,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  Txt621: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Jua, sans-serif",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 22,
    marginRight: 4,
  },
  Txt787: {
    color: "rgba(97,97,97,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.2,
  }
})

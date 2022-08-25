import * as React from "react"
import {
  Dimensions,
  Pressable,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { Text } from "../text/text"
import { useQuery } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { SuggestionCard } from "../suggestion-card/suggestion-card"
import Swiper from "react-native-deck-swiper"
import { useState } from "react"
import { Button } from "../button/button"
import { useNavigation } from "@react-navigation/native"
import { save } from "../../utils/storage"

const { width } = Dimensions.get("window")

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const CONTENT: ViewStyle = {
  backgroundColor: color.palette.fill,
  alignContent: "center",
  justifyContent: "center",
  flex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

const CONTAINER: ViewStyle = {
  position: "absolute",
  zIndex: 3,
  bottom: 100,
  flex: 1,
  paddingLeft: width * 0.09,
}

const NEXT_ITEM_CONTAINER: ViewStyle = {
  ...CONTAINER,
  zIndex: 2,
  bottom: 75,
  transform: [{ scale: 0.95 }],
}

const NEXT_NEXT_ITEM_CONTAINER: ViewStyle = {
  ...CONTAINER,
  zIndex: 1,
  bottom: 50,
  transform: [{ scale: 0.9 }],
}

const seen = []
const saved = []
const skipped = []

/**
 * Used to display all listings
 */
export const SuggestedListings = observer(function SuggestedListings({ navigation }) {
  const [lastDirection, setLastDirection] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swipedAll, setSwipedAll] = useState(false)

  const { data, loading, store } = useQuery((store) =>
    store.queryUserSuggestions(
      { input: "" },
      `id
    description
    type
    groups {
      name
    }
    idols {
      stageName
    }
    listedBy {
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

  const renderCard = (item) => (
    <SuggestionCard key={item.id} item={item} navigation={navigation} store={store} />
  )

  return (
    <View style={CONTENT}>
      <Swiper
        cards={data.userSuggestions}
        renderCard={renderCard}
        onSwiped={(cardIndex) => {
          seen.push(data.userSuggestions[cardIndex].id)
        }}
        onSwipedLeft={(cardIndex) => {
          skipped.push(data.userSuggestions[cardIndex].id)
        }}
        onSwipedRight={(cardIndex) => {
          saved.push(data.userSuggestions[cardIndex].id)
        }}
        onSwipedAll={() => {
          setSwipedAll(true)
          return (
            <View style={CONTAINER}>
              <Text style={TITLE} tx={"listings.suggested.noMore"} />
              <Button tx={"listings.suggested.restart"} onPress={() => {}} />
            </View>
          )
        }}
        containerStyle={CONTAINER}
        backgroundColor={color.fill}
        cardIndex={currentIndex}
        stackSize={3}
        keyExtractor={(item) => item.id}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard
      >
        {swipedAll && (
          <View style={CONTAINER}>
            <Text style={TITLE} tx={"listings.suggested.noMore"} />
            <Button
              tx={"listings.suggested.restart"}
              onPress={() => {
                setSwipedAll(false)
                setCurrentIndex(0)
              }}
            />
          </View>
        )}
      </Swiper>
    </View>
  )
})

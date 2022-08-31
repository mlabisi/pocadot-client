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

const { width } = Dimensions.get("window")

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const CONTENT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

const CONTAINER: ViewStyle = {
  flex: 1,
}

let seen = []
let skipped = []
const saved = []

/**
 * Used to display all listings
 */
export const SuggestedListings = observer(function SuggestedListings({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swipedAll, setSwipedAll] = useState(false)

  const { data, loading, store } = useQuery((store) =>
    store.queryUserSuggestions({ input: "" }, (listing) =>
      listing.id.type.description
        .groups((group) => group.name)
        .idols((idol) => idol.stageName)
        .listedBy((user) => user.username),
    ),
  )

  if (loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.loading"} />
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
              <Button
                tx={"listings.suggested.restart"}
                onPress={() => {
                  seen = []
                  skipped = []
                  setSwipedAll(false)
                  setCurrentIndex(0)
                }}
              />
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
      ></Swiper>
    </View>
  )
})

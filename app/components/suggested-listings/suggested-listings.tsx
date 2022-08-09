import * as React from "react"
import { Dimensions, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { Text } from "../text/text"
import { useQuery } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { SuggestionCard } from "../suggestion-card/suggestion-card"
import TinderCard from "react-tinder-card"
import { useState } from "react"
import { Button } from "../button/button"

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
export const SuggestedListings = observer(function SuggestedListings() {
  const [lastDirection, setLastDirection] = useState("")

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(currentIndex + 1)
  const [nextNextIndex, setNextNextIndex] = useState(nextIndex + 1)

  const { data, loading } = useQuery((store) =>
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

  const item = data.userSuggestions[currentIndex]
  const nextItem = data.userSuggestions[nextIndex]
  const nextNextItem = data.userSuggestions[nextNextIndex]

  return (
    <View style={CONTENT}>
      {item && (
        <View style={CONTAINER}>
          <TinderCard
            key={item.id}
            onSwipe={(direction) => {
              setLastDirection(direction)
              setCurrentIndex(nextIndex)
              setNextIndex(nextNextIndex)
              setNextNextIndex(nextNextIndex + 1)

              if (direction === "left") {
                skipped.push(item.id)
              } else if (direction === "right") {
                saved.push(item.id)
              }
            }}
            onCardLeftScreen={() => {
              seen.push(item.id)
            }}
          >
            <SuggestionCard key={item.id} item={item} />
          </TinderCard>
        </View>
      )}
      {nextItem && (
        <View style={NEXT_ITEM_CONTAINER}>
          <TinderCard
            key={nextItem.id}
            onSwipe={(direction) => {
              setLastDirection(direction)
              if (direction === "left") {
                skipped.push(nextItem.id)
              } else if (direction === "right") {
                saved.push(nextItem.id)
              }
            }}
            onCardLeftScreen={() => {
              seen.push(nextItem.id)
            }}
          >
            <SuggestionCard key={nextItem.id} item={nextItem} />
          </TinderCard>
        </View>
      )}
      {nextNextItem && (
        <View style={NEXT_NEXT_ITEM_CONTAINER}>
          <TinderCard
            key={nextNextItem.id}
            onSwipe={(direction) => {
              setLastDirection(direction)
              if (direction === "left") {
                skipped.push(nextNextItem.id)
              } else if (direction === "right") {
                saved.push(nextNextItem.id)
              }
            }}
            onCardLeftScreen={() => {
              seen.push(nextNextItem.id)
            }}
          >
            <SuggestionCard key={nextNextItem.id} item={nextNextItem} />
          </TinderCard>
        </View>
      )}
      {!item && (
        <View style={CONTAINER}>
          <Text style={TITLE} tx={"listings.suggested.noMore"} />
          <Button tx={"listings.suggested.restart"} />
        </View>
      )}
    </View>
  )
})

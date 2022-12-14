import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../../theme"
import { Text } from "../../common/text/text"
import { RootStoreContext } from "../../../models"
import { SuggestionCard } from "../suggestion-card/suggestion-card"
import Swiper from "react-native-deck-swiper"
import { useContext, useEffect, useState } from "react"
import { Button } from "../../common/button/button"
import { CONTAINER, TITLE } from "./styles"
import { NavigatorParamList } from "../../../navigators"
import { StackNavigationProp } from "@react-navigation/stack"

const saved = []

interface SuggestedListingsProps {
  navigation: StackNavigationProp<NavigatorParamList>
  query: any
}

/**
 * Used to display all listings
 */
export const SuggestedListings = observer(function SuggestedListings({
  navigation,
  query,
}: SuggestedListingsProps) {
  const store = useContext(RootStoreContext)
  const {
    listings,
    remainingSuggestions,
    setRemainingSuggestions,
    skippedSuggestions,
    setSkippedSuggestions,
    seenSuggestions,
    setSeenSuggestions,
    shouldReloadSuggestions,
    setShouldReloadSuggestions,
  } = store
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (shouldReloadSuggestions || (!cards.length && !!remainingSuggestions.length)) {
      if (!remainingSuggestions.length) {
        setShouldReloadSuggestions(false)
        // query.refetch().then(() => {
        setCards(query.data.userSuggestions)
        setRemainingSuggestions(query.data.userSuggestions.map((s) => s.id))
        // })
      } else {
        setCards(remainingSuggestions.map((id) => listings.get(id)))
      }
    }
  }, [setCards, shouldReloadSuggestions])

  const renderCard = (item) => <SuggestionCard key={item.id} item={item} navigation={navigation} />

  return (
    <>
      {!!cards.length && (
        <Swiper
          cards={cards}
          verticalSwipe={false}
          renderCard={renderCard}
          onSwiped={(cardIndex) => {
            setSeenSuggestions(Array.from(new Set([...seenSuggestions, cards[cardIndex].id])))
            setRemainingSuggestions(remainingSuggestions.filter((s) => s !== cards[cardIndex].id))
          }}
          onSwipedLeft={(cardIndex) => {
            setSkippedSuggestions([...skippedSuggestions, cards[cardIndex].id])
          }}
          onSwipedRight={(cardIndex) => {
            saved.push(cards[cardIndex].id)
          }}
          onSwipedAll={() => {
            setCards([])
          }}
          containerStyle={CONTAINER}
          backgroundColor={color.fill}
          stackSize={3}
          keyExtractor={(item) => item.id}
          stackScale={0.85}
          stackSeparation={5}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
          useViewOverflow={true}
        />
      )}
      {!remainingSuggestions.length && (
        <View style={CONTAINER}>
          <Text
            style={TITLE}
            tx={
              skippedSuggestions.length > 0
                ? "listings.suggested.reviewPrompt"
                : "listings.suggested.refreshPrompt"
            }
          />
          {skippedSuggestions.length > 0 ? (
            <Button
              tx={"listings.suggested.review"}
              onPress={() => {
                const skipped = [...skippedSuggestions]
                setSkippedSuggestions([])
                setRemainingSuggestions(skipped)
                setCards(remainingSuggestions.map((s) => listings.get(s)))
              }}
            />
          ) : (
            <Button
              tx={"listings.suggested.refresh"}
              onPress={() => {
                setShouldReloadSuggestions(true)
              }}
            />
          )}
        </View>
      )}
    </>
  )
})

import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import Swiper from "react-native-deck-swiper"
import { MainNavigatorParamList } from "../../navigators"
import { Card, SuggestionCard, Text, TintedButton } from "../../components"
import { colors } from "../../theme"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import Animated from "react-native-reanimated"
import { Ionicons } from "@expo/vector-icons"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const nayeon = require("./nayeon.png")
const seulgi = require("./seulgi.png")
const j = require("./j.png")

const cardHeight = hp(60)
const cardWidth = wp(90)

const mockSuggestions = [
  {
    artistName: "Nayeon",
    releaseName: "IM NAYEON",
    listingTag: "WTS",
    image: nayeon,
  },
  {
    artistName: "Seulgi",
    releaseName: "28 Reasons",
    listingTag: "WTT",
    image: seulgi,
  },
  {
    artistName: "J",
    releaseName: "SO BAD",
    listingTag: "WTS/WTT",
    image: j,
  },
]

export const SuggestionsScreen: FC<StackScreenProps<MainNavigatorParamList, "SuggestionsScreen">> =
  observer(function SuggestionsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const [isSwipingLeft, setIsSwipingLeft] = useState(false)
    const [isSwipingRight, setIsSwipingRight] = useState(false)
    const [swipedAll, setSwipedAll] = useState(false)

    const [suggestions, setSuggestions] = useState(mockSuggestions)

    const swiperRef = useRef<Swiper<any>>(null)

    const renderSuggestionCard = (props) => {
      return (
        <SuggestionCard
          artistName={props.artistName}
          releaseName={props.releaseName}
          listingTag={props.listingTag}
          image={props.image}
          cardHeight={cardHeight}
          cardWidth={cardWidth}
          swiper={swiperRef}
          setIsSwipingLeft={setIsSwipingLeft}
          setIsSwipingRight={setIsSwipingRight}
        />
      )
    }
    return (
      <>
        {isSwipingLeft && (
          <Animated.View style={styles.SkipOverlay}>
            <Text preset={"h6"} style={styles.OverlayText}>
              Not Interested!
            </Text>
          </Animated.View>
        )}
        {isSwipingRight && (
          <Animated.View style={styles.SaveOverlay}>
            <Text preset={"h6"} style={styles.OverlayText}>
              Saved!
            </Text>
          </Animated.View>
        )}
        <Swiper
          ref={swiperRef}
          cards={suggestions}
          onSwiping={(x, y) => {
            if (Math.abs(x) > Math.abs(y) && Math.abs(x) > cardWidth * 0.25) {
              if (x > 0) {
                setIsSwipingRight(true)
                setIsSwipingLeft(false)
              } else {
                setIsSwipingLeft(true)
                setIsSwipingRight(false)
              }
            } else {
              setIsSwipingRight(false)
              setIsSwipingLeft(false)
            }
          }}
          onSwipedLeft={() => {
            setIsSwipingLeft(false)
          }}
          onSwipedRight={() => {
            setIsSwipingRight(false)
          }}
          onSwipedAll={() => {
            setSwipedAll(true)
          }}
          verticalSwipe={false}
          stackScale={10}
          stackSeparation={25}
          renderCard={renderSuggestionCard}
          stackSize={3}
          containerStyle={styles.Root}
          cardHorizontalMargin={(wp(100) - cardWidth) * 0.5}
          cardStyle={styles.CardStyle}
        />
        {swipedAll && (
          <Card
            style={[styles.CardStyle, {top: (hp(100) - cardHeight) * 0.0625, left: (wp(100) - cardWidth) * 0.5 }]}
            height={cardHeight}
            width={cardWidth}
          >
            <Text style={styles.MessageText}>
              Check back later for more recommendations, or click the button below to review your
              already-seen photocard suggestions!
            </Text>
            <TintedButton
              onPress={() => {
                setSwipedAll(false)
                swiperRef.current.jumpToCardIndex(0)
              }}
              text={
                <Text preset={"h6"} style={{ color: colors.palette.other.white, paddingLeft: 5 }}>
                  Review
                </Text>
              }
              icon={<Ionicons name={"refresh"} color={colors.palette.other.white} />}
            />
          </Card>
        )}
      </>
    )
  })

const styles = StyleSheet.create({
  CardStyle: {
    marginTop: (hp(100) - cardHeight) * 0.0625,
  },
  MessageText: {
    paddingHorizontal: 15,
    textAlign: "center",
  },
  OverlayText: {
    color: colors.palette.other.white,
    textAlign: "center",
  },
  Root: {
    backgroundColor: colors.background,
    flexDirection: "column",
    justifyContent: "center",
  },
  SaveOverlay: {
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: colors.tint,
    borderRadius: 100,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "center",
    top: 0,
    width: wp(80),
    zIndex: 10,
  },
  SkipOverlay: {
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: colors.palette.status.error,
    borderRadius: 100,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: wp(80),
    zIndex: 10,
  },
})

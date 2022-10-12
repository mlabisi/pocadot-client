import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import Swiper from "react-native-deck-swiper"
import { MainNavigatorParamList } from "../../navigators"
import { Card, Screen, SuggestionCard, Text, TintedButton } from "../../components"
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

const cardHeight = hp(70)
const cardWidth = wp(85)

const suggestions = [
  {
    artistName: "Nayeon",
    releaseName: "IM NAYEON",
    listingTag: "Want to Sell",
    image: nayeon,
  },
  {
    artistName: "Seulgi",
    releaseName: "28 Reasons",
    listingTag: "Want to Trade",
    image: seulgi,
  },
  {
    artistName: "J",
    releaseName: "SO BAD",
    listingTag: "Want to Sell/Want to Trade",
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

    const swiperRef = useRef<Swiper<any>>(null)

    const handleSwipe = (x, y) => {
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
    }

    const handleSwipedLeft = () => {
      setIsSwipingLeft(false)
    }

    const handleSwipedRight = () => {
      setIsSwipingRight(false)
    }

    const handleSwipedAll = () => {
      setSwipedAll(true)
    }

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
      <Screen preset={"fixed"}>
        {isSwipingLeft && (
          <Animated.View style={[styles.Overlay, styles.SkipOverlay]}>
            <Text preset={"h6"} style={styles.OverlayText}>
              Not Interested!
            </Text>
          </Animated.View>
        )}
        {isSwipingRight && (
          <Animated.View style={[styles.Overlay, styles.SaveOverlay]}>
            <Text preset={"h6"} style={styles.OverlayText}>
              Saved!
            </Text>
          </Animated.View>
        )}
        <Swiper
          ref={swiperRef}
          cards={suggestions}
          onSwiping={handleSwipe}
          onSwipedLeft={handleSwipedLeft}
          onSwipedRight={handleSwipedRight}
          onSwipedAll={handleSwipedAll}
          verticalSwipe={false}
          stackScale={10}
          stackSeparation={40}
          renderCard={renderSuggestionCard}
          stackSize={3}
          containerStyle={styles.Root}
          cardHorizontalMargin={(wp(100) - cardWidth) * 0.5}
          cardStyle={styles.CardStyle}
        />
        {swipedAll && (
          <Card
            style={[styles.CardStyle, { left: (wp(100) - cardWidth) * 0.5 }]}
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
                <Text preset={"h6"} style={styles.ButtonText}>
                  Review
                </Text>
              }
              icon={<Ionicons name={"refresh"} color={colors.palette.other.white} />}
            />
          </Card>
        )}
      </Screen>
    )
  })

const styles = StyleSheet.create({
  ButtonText: { color: colors.palette.other.white, paddingLeft: 5 },
  CardStyle: {
    top: (hp(100) - cardHeight) * 0.2,
  },
  MessageText: {
    paddingHorizontal: 15,
    textAlign: "center",
  },
  Overlay: {
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: colors.tint,
    borderRadius: 100,
    elevation: 10,
    flexDirection: "column",
    height: hp(5),
    justifyContent: "center",
    top: 0,
    width: wp(80),
    zIndex: 10,
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
    backgroundColor: colors.tint,
  },
  SkipOverlay: {
    backgroundColor: colors.palette.status.error,
  },
})

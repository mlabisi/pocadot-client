import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import Swiper from "react-native-deck-swiper"
import { MainNavigatorParamList } from "../../navigators"
import { Card, SuggestionCard, Text, TintedButton } from "../../components"
import { colors, spacing } from "../../theme"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import Animated from "react-native-reanimated"
import { Ionicons } from "@expo/vector-icons"
import { suggestions } from "./demo"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const cardWidth = wp(85)

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
          cardWidth={cardWidth}
          swiper={swiperRef}
          setIsSwipingLeft={setIsSwipingLeft}
          setIsSwipingRight={setIsSwipingRight}
        />
      )
    }
    return (
      <View style={styles.Root}>
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
          <View style={styles.Centered}>
            <Card
              style={[
                styles.CardStyle,
                { left: (wp(100) - cardWidth) * 0.5, padding: spacing.medium },
              ]}
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
          </View>
        )}
      </View>
    )
  })

const styles = StyleSheet.create({
  ButtonText: {
    color: colors.palette.other.white,
    paddingLeft: spacing.extraSmall,
  },
  CardStyle: {
    top: hp(5),
  },
  Centered: {
    flexDirection: "column",
    flex: 0.9,
    justifyContent: "center",
  },
  MessageText: {
    paddingHorizontal: spacing.medium,
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
    top: 5,
    width: wp(80),
    zIndex: 10,
  },
  OverlayText: {
    color: colors.palette.other.white,
    textAlign: "center",
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  SaveOverlay: {
    backgroundColor: colors.tint,
  },
  SkipOverlay: {
    backgroundColor: colors.palette.status.error,
  },
})

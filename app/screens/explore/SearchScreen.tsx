import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList, MainNavigatorParamList } from "../../navigators"
import { ListingCard, Screen, Text, TintedButton } from "../../components"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { colors, spacing } from "../../theme"
import { curations, featuredListings as listings } from "./demo"
import { FlashList } from "@shopify/flash-list"
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen"
import SearchBar from "react-native-dynamic-search-bar"
import { translate } from "../../i18n"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const hitRect = spacing.extraLarge
const cardWidth = wp(42)

export const SearchScreen: FC<StackScreenProps<AppStackParamList, "Search">> = observer(
  function SearchScreen({ navigation }) {
    const [results, setResults] = useState([])
    const [queryIsEmpty, setQueryIsEmpty] = useState(false)

    const renderListingCard = ({ item }) => {
      return (
        <ListingCard
          listedBy={item.listedBy}
          cardWidth={cardWidth}
          artistName={item.artistName}
          releaseName={item.releaseName}
          listingTag={item.listingTag}
          avatar={item.avatar}
          image={item.image}
          style={styles.Card}
        />
      )
    }
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <View style={styles.Root}>
        <View style={styles.Row}>
          <Pressable
            onPress={() => {
              navigation.goBack()
            }}
            style={styles.BackButton}
            hitSlop={hitRect}
          >
            <Ionicons name={"arrow-back"} size={24} color={colors.tint} />
          </Pressable>
          <SearchBar
            autoFocus={true}
            placeholder={translate("explore.search.placeholder")}
            onPress={() => {
              /**/
            }}
            onChangeText={(text) => {
              if (text.length === 0) {
                setResults([])
                setQueryIsEmpty(true)
              } else {
                setQueryIsEmpty(false)

                setResults(
                  listings.filter((item) => {
                    // @ts-ignore - Talent is guaranteed to be either a Group (with `name`) or Idol (with `stageName`)
                    const { artistName } = item
                    const label = artistName.toLowerCase()
                    const textData = text.trim().toLowerCase()

                    return label.indexOf(textData) > -1
                  }),
                )
              }
            }}
            // textInputStyle={styles.SearchText}
            placeholderTextColor={colors.palette.greyscale["400"]}
            style={styles.SearchContainer}
            onClearPress={() => {
              setResults([])
            }}
            searchIconComponent={
              <Ionicons name={"search"} color={colors.palette.greyscale["400"]} size={18} />
            }
            clearIconComponent={
              <Octicons name={"x"} color={colors.palette.greyscale["400"]} size={18} />
            }
          />
        </View>
          <>
            <View style={styles.ResultsHeader}>
              <View style={styles.ResultsHeaderLeft}>
                <Text preset={"h6"}>
                  {results.length === 1 ? `${results.length} Result` : `${results.length} Results`}
                </Text>
              </View>
              <View style={styles.ResultsHeaderRight}>
                <TouchableOpacity>
                  <Ionicons name={"options"} color={colors.palette.greyscale["400"]} size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name={"swap-vertical"} color={colors.palette.greyscale["400"]} size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView>
              <View style={styles.Container}>
                <FlashList
                  data={results}
                  renderItem={renderListingCard}
                  numColumns={2}
                  scrollEnabled={false}
                  estimatedItemSize={cardWidth}
                  ListFooterComponent={
                    <View style={{ padding: spacing.large, marginBottom: spacing.medium }}>
                      <TintedButton
                        onPress={() => {
                          /**/
                        }}
                        text={
                          <Text preset={"h6"} style={styles.ButtonText}>
                            See All
                          </Text>
                        }
                      />
                    </View>
                  }
                />
              </View>
            </ScrollView>
          </>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  BackButton: {
    alignSelf: "center",
    paddingLeft: spacing.extraSmall,
  },
  ButtonText: {
    color: colors.palette.other.white,
  },
  Card: {
    flex: 1,
  },
  Container: {
    minHeight: hp(100),
    width: wp(100),
  },
  ResultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: spacing.large,
    marginVertical: spacing.small,
    width: wp(100) - spacing.huge,
  },
  ResultsHeaderLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  ResultsHeaderRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: heightPercentageToDP(10),
    paddingLeft: spacing.small,
    width: wp(100),
  },
  SearchContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.greyscale["100"],
    flex: 1,
    marginHorizontal: spacing.small,
  },
})

import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { Expandable, Screen, Text, TintedButton, Toggle } from "../../components"
import { translate } from "../../i18n"
import { widthPercentageToDP } from "react-native-responsive-screen"
import Collapsible from "react-native-collapsible"
import { colors, spacing } from "../../theme"
import { Ionicons } from "@expo/vector-icons"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const FilterResultsScreen: FC<StackScreenProps<AppStackParamList, "FilterResults">> =
  observer(function FilterResultsScreen({navigation}) {
    const [categoryExpanded, setCategoryExpanded] = useState(true)
    const [bgFilter, setBgFilter] = useState(false)
    const [ggFilter, setGgFilter] = useState(false)
    const [soloFilter, setSoloFilter] = useState(false)
    const [coedFilter, setCoedFilter] = useState(false)

    const [priceExpanded, setPriceExpanded] = useState(true)
    const [priceFilter, setPriceFilter] = useState("")

    const [typeExpanded, setTypeExpanded] = useState(true)
    const [wttFilter, setWttFilter] = useState(false)
    const [wtsFilter, setWtsFilter] = useState(false)
    const [bothFilter, setBothFilter] = useState(false)

    const [shippingExpanded, setShippingExpanded] = useState(true)
    const [i12Filter, seti12Filter] = useState(false)
    const [otherCountryFilter, setOtherCountryFilter] = useState(false)

    return (
      <ScrollView contentContainerStyle={styles.Container}>
        <Expandable
          isExpanded={categoryExpanded}
          setIsExpanded={setCategoryExpanded}
          title={`Category`}
          collapsedSubtitle={`${
            categoryExpanded
              ? ""
              : ` - ${[bgFilter, ggFilter, coedFilter, soloFilter].filter(Boolean).length} Selected`
          }`}
        >
          <View style={styles.InputWrapper}>
            <Toggle
              variant={"checkbox"}
              value={bgFilter}
              onValueChange={setBgFilter}
              containerStyle={styles.CheckboxContainer}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              Boy Groups
            </Text>
          </View>

          <View style={styles.InputWrapper}>
            <Toggle
              variant={"checkbox"}
              value={ggFilter}
              onValueChange={setGgFilter}
              containerStyle={styles.CheckboxContainer}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              Girl Groups
            </Text>
          </View>
          <View style={styles.InputWrapper}>
            <Toggle
              variant={"checkbox"}
              value={soloFilter}
              onValueChange={setSoloFilter}
              containerStyle={styles.CheckboxContainer}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              Solo Idols
            </Text>
          </View>
          <View style={styles.InputWrapper}>
            <Toggle
              variant={"checkbox"}
              value={coedFilter}
              onValueChange={setCoedFilter}
              containerStyle={styles.CheckboxContainer}
              inputDetailStyle={{ tintColor: colors.palette.other.white }}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              Coed Groups
            </Text>
          </View>
        </Expandable>

        <Expandable
          isExpanded={priceExpanded}
          setIsExpanded={setPriceExpanded}
          title={"Price"}
          collapsedSubtitle={`${
            priceExpanded ? "" : ` - ${priceFilter.length > 0 ? priceFilter : "Not Set"}`
          }`}
        >
          <View style={styles.StatusFillTypeNormalStateFilledInputThemeLightComponentInputField}>
            <Image
              style={styles.ChainEthereumComponentNftSymbol}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24193%3B1528%3A23717?alt=media&token=a0d90381-016f-4f6d-9bd3-e1eb21c40382",
              }}
            />
            <Text style={styles.Txt578}>USD</Text>
            <Image
              style={styles.IconlyBoldArrowDown2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24193%3B430%3A10358?alt=media&token=22f1fa27-70d5-4ee2-b1bd-40e184de710b",
              }}
            />
          </View>
          <View style={styles.AutoLayoutHorizontal3}>
            <View style={styles.StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField}>
              <Text style={styles.Txt453}>10.00</Text>
            </View>
            <Text style={styles.Txt585}>To</Text>
            <View
              style={styles.StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField1}
            >
              <Text style={styles.Txt453}>30.00</Text>
            </View>
          </View>
        </Expandable>

        <Expandable
          isExpanded={typeExpanded}
          setIsExpanded={setTypeExpanded}
          title={"Type"}
          collapsedSubtitle={`${
            typeExpanded
              ? ""
              : ` - ${
                  [wtsFilter, wttFilter, bothFilter].filter(Boolean).length > 0 ? "Set" : "Not Set"
                }`
          }`}
        >
          <View style={styles.InputWrapper}>
            <Toggle
              variant={"radio"}
              value={wtsFilter}
              onValueChange={() => {
                setBothFilter(false)
                setWttFilter(false)
                setWtsFilter(!wtsFilter)
              }}
              containerStyle={styles.CheckboxContainer}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              WTS - Want To Sell
            </Text>
          </View>
          <View style={styles.InputWrapper}>
            <Toggle
              variant={"radio"}
              value={wttFilter}
              onValueChange={() => {
                setBothFilter(false)
                setWttFilter(!wttFilter)
                setWtsFilter(false)
              }}
              containerStyle={styles.CheckboxContainer}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              WTT - Want To Trade
            </Text>
          </View>
          <View style={styles.InputWrapper}>
            <Toggle
              variant={"radio"}
              value={bothFilter}
              onValueChange={() => {
                setBothFilter(!bothFilter)
                setWttFilter(false)
                setWtsFilter(false)
              }}
              containerStyle={styles.CheckboxContainer}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              WTS/WTT
            </Text>
          </View>
        </Expandable>

        <Expandable
          isExpanded={shippingExpanded}
          setIsExpanded={setShippingExpanded}
          title={"Shipping"}
          collapsedSubtitle={`${
            shippingExpanded
              ? ""
              : ` - ${[i12Filter, otherCountryFilter].filter(Boolean).length} Selected`
          }`}
        >
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24216%3B442%3A2394?alt=media&token=7d3013ac-42e6-4f2b-b2aa-76e71cc0e9b5",
              }}
            />
            <Text style={styles.Txt436}>International Shipping</Text>
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24217%3B442%3A2394?alt=media&token=c80caf70-ab54-461a-a5ee-429b31b3393f",
              }}
            />
            <Text style={styles.Txt436}>In-Person Delivery</Text>
          </View>
          <View style={styles.StyleTextThemeLightStateUncheckedComponentCheckbox}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24219%3B1429%3A18113?alt=media&token=9fc471b0-f4a2-4001-9071-1803a6039b39",
              }}
            />
            <Text style={styles.Txt436}>Ships from Another Country</Text>
          </View>
        </Expandable>

        <TintedButton
          style={styles.ButtonContainer}
          onPress={() => {
            navigation.goBack()
          }}
          text={
            <Text preset={"h6"} style={styles.ButtonText}>
              Apply
            </Text>
          }
        />
      </ScrollView>
    )
  })

const styles = StyleSheet.create({
  AutoLayoutHorizontal: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    width: 380,
  },
  AutoLayoutHorizontal1: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 24,
    width: 380,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },

  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    width: 340,
  },
  AutoLayoutHorizontal3: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 340,
  },
  AutoLayoutVertical: {
    alignItems: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238,238,238,1)",
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 24,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 19,
    width: 380,
  },
  AutoLayoutVertical: {
    alignItems: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238,238,238,1)",
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 24,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 19,
    width: 380,
  },

  AutoLayoutVertical1: {
    alignItems: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238,238,238,1)",
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 19,
    width: 380,
  },
  AutoLayoutVertical2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 380,
  },
  ButtonContainer: {
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
  ButtonText: {
    color: colors.palette.other.white,
  },

  ChainEthereumComponentNftSymbol: {
    height: 20,
    marginRight: 12,
    width: 20,
  },
  CheckboxContainer: {
    // paddingRight: spacing.tiny,
  },

  CheckboxLabel: {
    // paddingRight: spacing.small,
    // flex: 1
  },
  CollapsibleHeader: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  CollapsibleSection: {
    alignItems: "flex-start",
    backgroundColor: colors.palette.other.white,
    borderColor: colors.palette.other.offWhite,
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: spacing.large,
    width: widthPercentageToDP(100) - spacing.medium,
  },

  Container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: spacing.medium,
    paddingVertical: spacing.extraLarge,
    width: widthPercentageToDP(100) - spacing.medium,
  },
  Group: {
    height: 20,
    marginRight: 16,
    width: 20,
  },
  Group: {
    height: 20,
    marginRight: 16,
    width: 20,
  },
  Group: {
    height: 20,
    marginRight: 16,
    width: 20,
  },

  GroupContainer: {
    alignItems: "flex-start",
    backgroundColor: colors.palette.other.white,
    borderColor: colors.palette.other.offWhite,
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: spacing.large,
  },
  IconTimesComponentAdditionalIcons: {
    height: 28,
    marginRight: 16,
    width: 28,
  },

  IconlyBoldArrowDown2: {
    height: 20,
    width: 20,
  },
  IconlyLightOutlineArrowUp2: {
    height: 24,
    width: 24,
  },
  IconlyLightOutlineArrowUp2: {
    height: 24,
    width: 24,
  },

  IconlyLightOutlineArrowUp2: {
    height: 24,
    width: 24,
  },
  IconlyLightOutlineArrowUp2: {
    height: 24,
    width: 24,
  },
  InputWrapper: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  Rectangle: {
    backgroundColor: "rgba(163,176,239,1)",
    borderRadius: 100,
    height: 4,
    width: 110,
  },
  SectionHeader: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: widthPercentageToDP(100) - spacing.medium,
  },
  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 110,
  },

  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 110,
  },
  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 110,
  },
  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 110,
  },

  StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField: {
    alignItems: "center",
    backgroundColor: "rgba(250,250,250,1)",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: 56,
    justifyContent: "flex-start",
    marginRight: 16,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 0,
    width: 145,
  },
  StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField1: {
    alignItems: "center",
    backgroundColor: "rgba(250,250,250,1)",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: 56,
    justifyContent: "flex-start",
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 0,
    width: 145,
  },
  StatusFillTypeNormalStateFilledInputThemeLightComponentInputField: {
    alignItems: "center",
    backgroundColor: "rgba(250,250,250,1)",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    height: 56,
    justifyContent: "flex-start",
    marginBottom: 20,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 0,
    width: 340,
  },
  StyleTextThemeLightStateUncheckedComponentCheckbox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 340,
  },

  StyleTextThemeLightStateUncheckedComponentCheckbox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 340,
  },
  StyleTextThemeLightStateUncheckedComponentCheckbox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 340,
  },
  ThemeLightComponentNavbar: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 48,
    justifyContent: "flex-start",
    marginBottom: 24,
    paddingBottom: 11,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 11,
    width: 380,
  },
  TitleText: {
    flex: 1,
  },

  Txt1101: {
    color: "rgba(163,176,239,1)",
    fontFamily: "Jua, sans-serif",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 29,
    width: 337,
  },
  Txt129: {
    color: "rgba(163,176,239,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "center",
    letterSpacing: 0.2,
    lineHeight: 25,
    marginBottom: 12,
    textAlign: "center",
    width: 111,
  },
  Txt155: {
    color: "rgba(158,158,158,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "center",
    letterSpacing: 0.2,
    lineHeight: 25,
    textAlign: "center",
    width: 111,
  },

  Txt155: {
    color: "rgba(158,158,158,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "center",
    letterSpacing: 0.2,
    lineHeight: 25,
    textAlign: "center",
    width: 111,
  },
  Txt155: {
    color: "rgba(158,158,158,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "center",
    letterSpacing: 0.2,
    lineHeight: 25,
    textAlign: "center",
    width: 111,
  },
  Txt399: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Jua, sans-serif",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24,
    marginRight: 12,
    width: 305,
  },

  Txt399: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Jua, sans-serif",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24,
    marginRight: 12,
    width: 305,
  },
  Txt399: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Jua, sans-serif",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24,
    marginRight: 12,
    width: 305,
  },
  Txt399: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Jua, sans-serif",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 24,
    marginRight: 12,
    width: 305,
  },
  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },

  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },
  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },
  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },

  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },
  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },
  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },

  Txt436: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 316,
  },
  Txt453: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 106,
  },
  Txt453: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 106,
  },

  Txt578: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    marginRight: 12,
    width: 237,
  },
  Txt585: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
    letterSpacing: 0.2,
    lineHeight: 22,
    marginRight: 16,
    textAlign: "center",
  },
  Txt940: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 305,
  },
  Txt940: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 305,
  },

  Txt940: {
    color: "rgba(33,33,33,1)",
    fontFamily: "Urbanist, sans-serif",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.2,
    lineHeight: 22,
    width: 305,
  },
  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },
  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },

  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },
  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },
  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },

  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },
  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },
  Vector: {
    height: 20,
    marginRight: 5,
    width: 20,
  },
})

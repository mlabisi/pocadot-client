import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, TextInput, Pressable } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import CurrencyInput from "react-native-currency-input"
import { AppStackParamList } from "../../navigators"
import { Expandable, Screen, Text, TintedButton, Toggle } from "../../components"
import { widthPercentageToDP } from "react-native-responsive-screen"
import { colors, spacing, typography } from "../../theme"
import { Octicons } from "@expo/vector-icons"
import { CurrencyInputProps } from "react-native-currency-input/lib/typescript/src/props"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

const hitRect = spacing.extraLarge

export const FilterResultsScreen: FC<StackScreenProps<AppStackParamList, "FilterResults">> =
  observer(function FilterResultsScreen({ navigation }) {
    const [categoryExpanded, setCategoryExpanded] = useState(true)
    const [bgFilter, setBgFilter] = useState(false)
    const [ggFilter, setGgFilter] = useState(false)
    const [soloFilter, setSoloFilter] = useState(false)
    const [coedFilter, setCoedFilter] = useState(false)

    const [priceExpanded, setPriceExpanded] = useState(true)
    const [minPrice, setMinPrice] = useState(undefined)
    const [maxPrice, setMaxPrice] = useState(undefined)
    const [priceMinFilter, setPriceMinFilter] = useState("")
    const [priceMaxFilter, setPriceMaxFilter] = useState("")
    const generatePriceSubtitle = () => {
      const subtitle = []

      if (priceExpanded) {
        return ""
      } else {
        if (minPrice && minPrice !== 0 && maxPrice && maxPrice !== 0) {
          subtitle.push(`${priceMinFilter} to ${priceMaxFilter}`)
        } else if (minPrice && minPrice !== 0) {
          subtitle.push(`${priceMinFilter}+`)
        } else if (maxPrice && maxPrice !== 0) {
          subtitle.push(`Less than ${priceMaxFilter}`)
        }
      }

      return subtitle.length ? ` - ${subtitle.join(", ")}` : " - Not Set"
    }
    const minInput = useRef<CurrencyInputProps & TextInput>(null)
    const maxInput = useRef<CurrencyInputProps & TextInput>(null)

    const [typeExpanded, setTypeExpanded] = useState(true)
    const [wttFilter, setWttFilter] = useState(false)
    const [wtsFilter, setWtsFilter] = useState(false)
    const [bothFilter, setBothFilter] = useState(false)
    const generateTypeSubtitle = () => {
      let subtitle = ""

      if (typeExpanded) {
        return ""
      } else {
        if (wtsFilter) {
          subtitle += `Want to Sell`
        } else if (wttFilter) {
          subtitle += `Want to Trade`
        } else if (bothFilter) {
          subtitle += `Want to Sell/Want to Trade`
        }
      }

      return subtitle.length ? ` - ${subtitle}` : " - Not Set"
    }

    const [shippingExpanded, setShippingExpanded] = useState(true)
    const [i12Filter, seti12Filter] = useState(false)

    return (
      <Screen preset={"scroll"} contentContainerStyle={styles.Container}>
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
              inputOuterStyle={styles.CheckboxStyle}
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
              inputOuterStyle={styles.CheckboxStyle}
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
              inputOuterStyle={styles.CheckboxStyle}
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
              inputOuterStyle={styles.CheckboxStyle}
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
          collapsedSubtitle={generatePriceSubtitle()}
        >
          <View style={styles.PriceRangeInput}>
            <View style={styles.PriceInputField}>
              <CurrencyInput
                ref={minInput}
                placeholder={"$0"}
                placeholderTextColor={colors.textDim}
                value={minPrice}
                style={{
                  fontSize: spacing.medium + spacing.micro,
                  fontFamily: typography.primary.semiBold,
                }}
                onChangeValue={(value) => setMinPrice(value || 0)}
                delimiter={","}
                separator={"."}
                prefix="$"
                precision={0}
                minValue={0}
                onChangeText={(formattedValue) => {
                  setPriceMinFilter(formattedValue)
                }}
              />
              {minPrice && minPrice !== 0 ? (
                <Pressable
                  onPress={() => {
                    minInput.current.clear()
                    setMinPrice(0)
                  }}
                  hitSlop={hitRect}
                >
                  <Octicons name={"x-circle-fill"} color={colors.tint} />
                </Pressable>
              ) : null}
            </View>

            <Text preset={"semiBold"} style={styles.PriceRangeSeparator}>
              to
            </Text>

            <View style={styles.PriceInputField}>
              <CurrencyInput
                ref={maxInput}
                placeholder={"$0"}
                placeholderTextColor={colors.textDim}
                value={maxPrice}
                style={{
                  fontSize: spacing.medium + spacing.micro,
                  fontFamily: typography.primary.semiBold,
                }}
                onChangeValue={(value) => setMaxPrice(value || 0)}
                delimiter={","}
                separator={"."}
                prefix="$"
                precision={0}
                minValue={Math.min(minPrice, 0)}
                onChangeText={(formattedValue) => {
                  setPriceMaxFilter(formattedValue)
                }}
              />
              {maxPrice && maxPrice !== 0 ? (
                <Pressable
                  onPress={() => {
                    maxInput.current.clear()
                    setMaxPrice(0)
                  }}
                  hitSlop={hitRect}
                >
                  <Octicons name={"x-circle-fill"} color={colors.tint} />
                </Pressable>
              ) : null}
            </View>
          </View>
        </Expandable>

        <Expandable
          isExpanded={typeExpanded}
          setIsExpanded={setTypeExpanded}
          title={"Type"}
          collapsedSubtitle={generateTypeSubtitle()}
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
              inputOuterStyle={styles.RadioStyle}
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
              inputOuterStyle={styles.RadioStyle}
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
              inputOuterStyle={styles.RadioStyle}
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
            shippingExpanded ? "" : ` - ${[i12Filter].filter(Boolean).length} Selected`
          }`}
        >
          <View style={styles.InputWrapper}>
            <Toggle
              variant={"checkbox"}
              value={i12Filter}
              onValueChange={seti12Filter}
              containerStyle={styles.CheckboxContainer}
              inputOuterStyle={styles.CheckboxStyle}
            />
            <Text preset={"semiBold"} style={styles.CheckboxLabel}>
              International Shipping
            </Text>
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
      </Screen>
    )
  })

const styles = StyleSheet.create({
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
    margin: spacing.tiny,
  },
  CheckboxLabel: {
    textAlignVertical: "center",
  },
  CheckboxStyle: {
    backgroundColor: colors.transparent,
    borderColor: colors.tint,
    borderRadius: 8,
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
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: spacing.medium,
    paddingVertical: spacing.extraLarge,
    width: widthPercentageToDP(100) - spacing.medium,
  },
  CurrencyDropdown: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    padding: spacing.medium,
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

  InputWrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  PriceInputField: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: spacing.medium,
  },
  PriceRangeInput: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 340,
  },

  PriceRangeSeparator: {
    marginHorizontal: spacing.small,
  },
  RadioStyle: {
    backgroundColor: colors.transparent,
    borderColor: colors.tint,
  },
  SectionHeader: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: widthPercentageToDP(100) - spacing.medium,
  },
  TitleText: {
    flex: 1,
  },
})

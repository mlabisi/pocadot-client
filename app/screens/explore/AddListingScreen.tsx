import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import {
  Header,
  IdolSelection,
  InternationalShippingInput,
  LightDivider,
  ListingConditionInput,
  ListingDescriptionInput,
  ListingTypeInput,
  PhotocardScansInput,
  ReleaseInput,
  StartingPriceInput,
  Text,
  TintedButton,

} from "../../components"
import { colors, spacing } from "../../theme"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { Octicons } from "@expo/vector-icons"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const AddListingScreen: FC<StackScreenProps<AppStackParamList, "AddListing">> = observer(
  function AddListingScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const [selectedIdols, setSelectedIdols] = useState([])
    const [idolModalVisible, setIdolModalVisible] = useState(false)
    const [internationalShippingEnabled, setInternationalShippingEnabled] = useState(false)
    const [wtsEnabled, setWtsEnabled] = useState(false)
    const [wttEnabled, setWttEnabled] = useState(false)
    const [condition, setCondition] = useState(3)

    const handlePress = () => {/****/}

    const cancelButtonPress = () => navigation.goBack()

    return (
      <View style={styles.Root}>
        <ScrollView contentContainerStyle={styles.Form}>
          <Header
            titleTx={"explore.listings.add"}
            titleMode={"flex"}
            LeftActionComponent={
              <Pressable
                onPress={() => {
                  navigation.goBack()
                }}
                style={{ paddingLeft: spacing.small, paddingRight: spacing.small }}
                hitSlop={25}
              >
                <Octicons name={"x"} size={24} color={colors.tint} />
              </Pressable>
            }
          />

          <PhotocardScansInput />

          <IdolSelection
            idolModalVisible={idolModalVisible}
            setIdolModalVisible={setIdolModalVisible}
            selectedIdols={selectedIdols}
            setSelectedIdols={setSelectedIdols}
          />

          <ReleaseInput />

          <LightDivider style={styles.Divider} />

          <ListingDescriptionInput />

          <ListingConditionInput condition={condition} setCondition={setCondition} />

          <ListingTypeInput
            wtsEnabled={wtsEnabled}
            setWtsEnabled={setWtsEnabled}
            wttEnabled={wttEnabled}
            setWttEnabled={setWttEnabled}
          />

          <StartingPriceInput />

          <InternationalShippingInput
            internationalShippingEnabled={internationalShippingEnabled}
            setInternationalShippingEnabled={setInternationalShippingEnabled}
          />
        </ScrollView>

        <View style={styles.ButtonContainer}>
          <View style={styles.ButtonRow}>
            <TintedButton
              onPress={cancelButtonPress}
              style={[styles.Button, styles.CancelButton]}
              text={
                <Text preset={"h6"} style={styles.CancelButtonText}>
                  Cancel
                </Text>
              }
            />
            <TintedButton
              onPress={handlePress}
              style={styles.Button}
              text={
                <Text preset={"h6"} style={styles.ButtonText}>
                  Create
                </Text>
              }
            />
          </View>
        </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  Button: {
    marginHorizontal: spacing.medium,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    width: widthPercentageToDP(30),
  },
  ButtonContainer: {
    alignItems: "center",
    backgroundColor: colors.cardBackground,
    display: "flex",
    flexDirection: "column",
    height: heightPercentageToDP(10),
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: widthPercentageToDP(100),
  },
  ButtonRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.medium,
    width: widthPercentageToDP(100),
  },
  ButtonText: {
    color: colors.palette.other.white,
  },
  CancelButton: {
    backgroundColor: colors.palette.primary["200"],
  },
  CancelButtonText: {
    color: colors.tint,
  },
  Divider: {
    backgroundColor: colors.palette.greyscale["200"],
    left: spacing.medium,
    width: widthPercentageToDP(100) - spacing.large,
  },
  Form: {
    alignContent: "center",
    paddingBottom: heightPercentageToDP(10),
    width: widthPercentageToDP(100),
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
})

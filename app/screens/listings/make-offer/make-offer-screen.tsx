import React, { FC, useContext } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { Button, Header, Screen, Text, TextField } from "../../../components"
import { color, spacing } from "../../../theme"
import { ListingType, RootStoreContext } from "../../../models"
import { translate } from "../../../i18n"

const { height, width } = Dimensions.get("window")
const headerHeight = height * 0.15

const ROOT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
  height,
}

const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}
const HEADER_TEXT: TextStyle = {
  color: color.palette.lavender,
}
const TITLE: TextStyle = {
  color: color.palette.black,
  textTransform: "uppercase",
  textAlign: "center",
  fontWeight: "500",
  paddingBottom: spacing[4],
  backgroundColor: color.palette.white,
}

const FORM_CONTAINER: ViewStyle = {
  flex: 1,
  padding: spacing[4],
}
const BUTTON_STYLE: ViewStyle = {
  borderRadius: 0,
  borderStyle: "solid",
  borderColor: color.primary,
  width,
  alignSelf: "center",
  marginVertical: spacing[4],
}

export const MakeOfferScreen: FC<StackScreenProps<NavigatorParamList, "makeOffer">> = observer(
  function MakeOfferScreen({ navigation }) {
    const { listings, selectedListingId } = useContext(RootStoreContext)
    const selectedListing = listings.get(selectedListingId)

    return (
      <Screen preset="scroll">
        <SafeAreaView style={ROOT}>
          <Header
            headerHeight={headerHeight}
            leftTx={"common.cancel"}
            onLeftPress={() => navigation.goBack()}
            style={HEADER}
            textStyle={HEADER_TEXT}
          >
            <Text
              text={selectedListing.type
                .map((t) => {
                  switch (t) {
                    case ListingType.WTT:
                      return translate("listings.detail.trade")
                    case ListingType.WTS:
                    default:
                      return translate("listings.detail.bid")
                  }
                })
                .join("/")}
              style={TITLE}
            />
          </Header>
          <View style={FORM_CONTAINER}>
            <TextField
              label={
                selectedListing.type.includes(ListingType.WTT)
                  ? translate("listings.offer.tradePrice")
                  : translate("listings.offer.buyPrice")
              }
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.pricePlaceholder"}
              style={{ borderRadius: 100 }}
            />
            {selectedListing.type.includes(ListingType.WTT) && (
              <TextField
                labelTx={"listings.offer.tradeItem"}
                inputStyle={{
                  color: color.palette.black,
                  backgroundColor: color.palette.lavenderFill,
                  fontSize: 14,
                }}
                placeholderTextColor={color.palette.black25}
                placeholderTx={"listings.offer.pricePlaceholder"}
                style={{ borderRadius: 100 }}
              />
            )}
            <TextField
              labelTx={"common.message"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <Button
              tx={"common.submit"}
              textStyle={{ fontSize: 16 }}
              style={[BUTTON_STYLE, { width: width * 0.75, height: 35, borderRadius: 100 }]}
              onPress={() => navigation.goBack()}
            />
          </View>
        </SafeAreaView>
      </Screen>
    )
  },
)

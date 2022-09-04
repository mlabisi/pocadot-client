import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, SafeAreaView, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { Button, Header, Screen, Text, TextField } from "../../../components"
import { color, spacing } from "../../../theme"
import { ListingType } from "../../../models"
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
  paddingHorizontal: spacing[4],
}
const BUTTON_STYLE: ViewStyle = {
  borderRadius: 0,
  borderStyle: "solid",
  borderColor: color.primary,
  width,
  alignSelf: "center",
  marginVertical: spacing[4],
}

export const AddListingScreen: FC<StackScreenProps<NavigatorParamList, "addListing">> = observer(
  function AddListingScreen({ navigation }) {
    return (
      <Screen preset="fixed">
        <SafeAreaView style={ROOT}>
          <Header
            headerHeight={headerHeight}
            leftTx={"common.cancel"}
            onLeftPress={() => navigation.goBack()}
            style={HEADER}
            textStyle={HEADER_TEXT}
          >
            <Text tx={"listings.add.title"} style={TITLE} />
          </Header>
          <ScrollView style={FORM_CONTAINER}>
            <TextField
              labelTx={"common.image"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.group"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.idol"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.release"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.description"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.listingType"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.startingPrice"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.condition"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.detail.locationPrefix"}
              inputStyle={{
                color: color.palette.black,
                backgroundColor: color.palette.lavenderFill,
                fontSize: 14,
              }}
              placeholderTextColor={color.palette.black25}
              placeholderTx={"listings.offer.messagePrompt"}
              style={{ borderRadius: 100 }}
            />
            <TextField
              labelTx={"listings.add.international"}
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
          </ScrollView>
        </SafeAreaView>
      </Screen>
    )
  },
)

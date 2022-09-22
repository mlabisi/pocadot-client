import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../../navigators"
import { Button, FormRow, Header, Screen, Text, TextField } from "../../../../components"
import { color } from "../../../../theme"
import {
  BUTTON_STYLE,
  FORM_CONTAINER,
  HEADER,
  HEADER_TEXT,
  headerHeight,
  ROOT,
  TITLE,
  width,
} from "./styles"

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
            <FormRow preset={"top"}>
              <TextField
                labelTx={"common.images"}
                inputStyle={{
                  color: color.palette.black,
                  backgroundColor: color.palette.lavenderFill,
                  fontSize: 14,
                }}
                placeholderTextColor={color.palette.black25}
                style={{ borderRadius: 100 }}
              />
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"middle"}>
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
            </FormRow>
            <FormRow preset={"bottom"}>
              <Button
                tx={"common.add"}
                textStyle={{ fontSize: 16 }}
                style={[BUTTON_STYLE, { width: width * 0.75, height: 35, borderRadius: 100 }]}
                onPress={() => {}}
              />
            </FormRow>
          </ScrollView>
        </SafeAreaView>
      </Screen>
    )
  },
)

import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { Button, FormRow, Header, Screen, Text, TextField } from "../../../components"
import {
  ROOT,
  BUTTON_STYLE,
  FORM_CONTAINER,
  HEADER,
  HEADER_TEXT,
  headerHeight,
  TITLE,
  width,
} from "./styles"
import { SafeAreaView, ScrollView } from "react-native"
import { color } from "../../../theme"

export const AddWishScreen: FC<StackScreenProps<NavigatorParamList, "addWish">> = observer(
  function AddWishScreen({ navigation }) {
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
            <Text tx={"faves.wishlist.add.title"} style={TITLE} />
          </Header>
          <ScrollView style={FORM_CONTAINER}>
            <FormRow preset={"top"}>
              <TextField
                labelTx={"common.image"}
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
                labelTx={"faves.wishlist.add.group"}
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
                labelTx={"faves.wishlist.add.idol"}
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
                labelTx={"faves.wishlist.add.description"}
                inputStyle={{
                  color: color.palette.black,
                  backgroundColor: color.palette.lavenderFill,
                  fontSize: 14,
                }}
                placeholderTextColor={color.palette.black25}
                placeholderTx={"faves.wishlist.add.descriptionPrompt"}
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

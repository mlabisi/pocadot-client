import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { AllListings, FloatingButton, Text } from "../../../components"
import { CONTENT, FLOATING_BUTTON_CONTAINER, SEGMENT_TITLE } from "../styles"

export const MyListingsScreen: FC<StackScreenProps<NavigatorParamList, "myListings">> = observer(
  function MyListingsScreen({ navigation }) {
    return (
      <View style={CONTENT}>
        <AllListings navigation={navigation} myListings={true} />
        <FloatingButton
          style={FLOATING_BUTTON_CONTAINER}
          onPress={() => navigation.navigate("addListing")}
        >
          <Text text={"+"} style={[SEGMENT_TITLE, { textAlign: "center", fontSize: 30 }]} />
        </FloatingButton>
      </View>
    )
  },
)

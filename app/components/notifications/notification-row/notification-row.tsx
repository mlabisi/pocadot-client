import * as React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { AutoImage, Text } from "../../"
import {
  BODY,
  CONTAINER,
  IMAGE,
  INNER_ROW,
  NOTIFICATION_BODY,
  NOTIFICATION_TITLE,
  ROW,
} from "./styles"
import { NavigatorParamList } from "../../../navigators"
import { StackNavigationProp } from "@react-navigation/stack"

const stars = require("./img.png")

export interface NotificationRowProps {
  item: {}
  navigation: StackNavigationProp<NavigatorParamList>
}

export const NotificationRow = observer(function NotificationRow(props: NotificationRowProps) {
  return (
    <View style={CONTAINER}>
      <View style={ROW}>
        <View style={INNER_ROW}>
          <AutoImage style={IMAGE} source={stars} />
        </View>
        <View style={BODY}>
          <Text style={NOTIFICATION_TITLE} text={"8 New Recommendations"} />
          <Text
            style={NOTIFICATION_BODY}
            text={"There are 8 new photocard listings that match your preferences!"}
          />
        </View>
      </View>
    </View>
  )
})

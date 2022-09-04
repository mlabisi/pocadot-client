import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { FlatList, View } from "react-native"
import { CONTENT, LINK, ROW, TITLE, CELL } from "./styles"
import { Button, ListingCard, Text, Screen, PreferenceCard } from "../../../components"
import { translate } from "../../../i18n"
import { color, spacing } from "../../../theme"

export const MyProfileScreen: FC<StackScreenProps<NavigatorParamList, "myProfile">> = observer(
  function ProfileScreen({ navigation }) {
    const renderListingCard = ({ item }) => (
      <ListingCard
        key={"oop"}
        item={item}
        navigation={navigation}
        style={{ marginBottom: spacing[5] }}
        saveEnabled={false}
      />
    )

    const renderPreferenceCard = ({ item }) => (
      <PreferenceCard item={item} style={{ marginLeft: spacing[4], marginBottom: spacing[5] }} />
    )

    return (
      <Screen backgroundColor={color.fill} preset={"scroll"} unsafe={true}>
        <View style={CONTENT}>
          <View style={ROW}>
            <Text tx={"profile.myListingsTitle"} style={TITLE} />
            <Button text={`${translate("common.addNew")} →`} textStyle={LINK} preset={"link"} />
          </View>
          <View style={CELL}>
            <FlatList
              data={new Array(5).fill({})}
              renderItem={renderListingCard}
              horizontal={true}
            />
          </View>
          <View style={ROW}>
            <Text tx={"profile.myFavesTitle"} style={TITLE} />
            <Button text={`${translate("common.modify")} →`} textStyle={LINK} preset={"link"} />
          </View>
          <View style={CELL}>
            <FlatList
              data={new Array(4).fill({})}
              renderItem={renderPreferenceCard}
              horizontal={true}
            />
          </View>
        </View>
      </Screen>
    )
  },
)

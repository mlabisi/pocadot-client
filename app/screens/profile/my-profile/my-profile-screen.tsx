import React, { FC, useContext, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { FlatList, View } from "react-native"
import {
  CONTENT,
  LINK,
  ROW,
  TITLE,
  CELL,
  BUTTON_STYLE,
  HEADER,
  HEADER_CONTENT,
  headerHeight,
  LINKS,
  PROFILE_PIC,
} from "./styles"
import {
  Button,
  ListingCard,
  Text,
  Screen,
  PreferenceCard,
  AutoImage,
  Header,
} from "../../../components"
import { translate } from "../../../i18n"
import { color, spacing } from "../../../theme"
import { RootStoreContext, useQuery } from "../../../models"

const myPic = require("./myProfilePic.png")

export const MyProfileScreen: FC<StackScreenProps<NavigatorParamList, "myProfile">> = observer(
  function ProfileScreen({ navigation }) {
    const [myListings, setMyListings] = useState([])
    const [myPreferences, setMyPreferences] = useState([])
    const [user, setUser] = useState(undefined)
    const [editMode, setEditMode] = useState(false)
    const { currentUserId } = useContext(RootStoreContext)

    const myProfileQuery = useQuery((store) =>
      store.queryUsers({ input: { ids: [currentUserId] } }, (user) =>
        user.id.description.username
          .faveGroups((group) => group.name)
          .faveIdols((idol) => idol.stageName)
          .listings((listing) =>
            listing.id.type.isFeatured
              .groups((group) => group.name)
              .idols((idol) => idol.stageName),
          ),
      ),
    )

    useEffect(() => {
      if (myProfileQuery.data && !myListings.length) {
        setMyListings(myProfileQuery.data.users[0].listings)
      }

      if (myProfileQuery.data && !myPreferences.length) {
        setMyPreferences([
          ...myProfileQuery.data.users[0].faveGroups,
          ...myProfileQuery.data.users[0].faveIdols,
        ])
      }

      if (myProfileQuery.data && !user) {
        setUser(myProfileQuery.data.users[0])
      }
    }, [myProfileQuery.data, setMyListings, setMyPreferences, setUser])

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
        <Header headerHeight={headerHeight} style={HEADER} n={0.2}>
          <View style={HEADER_CONTENT}>
            <AutoImage source={myPic} style={PROFILE_PIC} />
            <Text text={`@${user?.username}`} preset={"header"} />
            <Text text={user?.description} style={TITLE} />
            <Text text={"ig | twt | carrd"} style={LINKS} />
            <Button
              tx={editMode ? "common.save" : "common.edit"}
              onPress={() => setEditMode((editMode) => !editMode)}
              style={BUTTON_STYLE}
            />
          </View>
        </Header>
        <View style={CONTENT}>
          <View style={ROW}>
            <Text tx={"profile.myListingsTitle"} style={TITLE} />
            <Button
              text={`${translate("common.addNew")} →`}
              textStyle={LINK}
              preset={"link"}
              onPress={() => navigation.navigate("myListings")}
            />
          </View>
          <View style={CELL}>
            {!myListings.length ? (
              <Text style={TITLE} tx={"common.loading"} />
            ) : (
              <FlatList data={myListings} renderItem={renderListingCard} horizontal={true} />
            )}
          </View>
          <View style={ROW}>
            <Text tx={"profile.myFavesTitle"} style={TITLE} />
            <Button
              text={`${translate("common.modify")} →`}
              textStyle={LINK}
              preset={"link"}
              onPress={() => navigation.navigate("modifyPreferences")}
            />
          </View>
          <View style={CELL}>
            {!myPreferences.length ? (
              <Text style={TITLE} tx={"common.loading"} />
            ) : (
              <FlatList data={myPreferences} renderItem={renderPreferenceCard} horizontal={true} />
            )}
          </View>
        </View>
      </Screen>
    )
  },
)

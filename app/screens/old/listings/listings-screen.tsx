import React, { FC, useContext } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { AllListings, FloatingButton, SuggestedListings, Text } from "../../../components"
import { SafeAreaView } from "react-native-safe-area-context"
import { CONTENT, FLOATING_BUTTON_CONTAINER, ROOT, SEGMENT_TITLE, TITLE } from "./styles"
import { ListingsMode } from "./listings-mode"
import { RootStoreContext, useQuery } from "../../../models"
import { Layout } from "@ui-kitten/components"

export const ListingsScreen: FC<StackScreenProps<NavigatorParamList, "listings">> = observer(
  function ListingsScreen({ navigation }) {
    const { listingsMode, currentUserId } = useContext(RootStoreContext)

    const query = useQuery((store) =>
      store.queryUserSuggestions({ input: currentUserId }, (listing) =>
        listing.id.type.description
          .groups((group) => group.name)
          .idols((idol) => idol.stageName)
          .listedBy((user) => user.username),
      ),
    )

    if (query.loading) {
      return (
        <SafeAreaView style={ROOT}>
          <View style={{ flexDirection: "column" }}>
            <Text style={TITLE} tx={"common.loading"} />
          </View>
        </SafeAreaView>
      )
    }

    return (
      <Layout style={CONTENT} level={"2"}>
        {listingsMode === ListingsMode.Suggested && (
          <SuggestedListings navigation={navigation} query={query} />
        )}
        {listingsMode === ListingsMode.All && <AllListings navigation={navigation} />}
        {listingsMode === ListingsMode.All && (
          <FloatingButton
            style={FLOATING_BUTTON_CONTAINER}
            onPress={() => navigation.navigate("addListing")}
          >
            <Text text={"+"} style={[SEGMENT_TITLE, { textAlign: "center", fontSize: 30 }]} />
          </FloatingButton>
        )}
      </Layout>
    )
  },
)

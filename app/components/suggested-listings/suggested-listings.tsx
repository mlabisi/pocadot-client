import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { Text } from "../text/text"
import { useQuery } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.lavender,
  paddingHorizontal: 15,
}

/**
 * Used to display all listings
 */
export const SuggestedListings = observer(function SuggestedListings() {
  const { data, loading } = useQuery((store) =>
    store.queryUserSuggestions(
      { input: "" },
      `id
    description
    type
    groups {
      name
    }
    idols {
      stageName
    }
    listedBy {
      username
    }`,
    ),
  )

  if (loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.ok"} />
        </View>
      </SafeAreaView>
    )
  }

  return data.userSuggestions.map((item) => (
    <Text key={item.id} style={TITLE}>
      {item.description}
    </Text>
  ))
})

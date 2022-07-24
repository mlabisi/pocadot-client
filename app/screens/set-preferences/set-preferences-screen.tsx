import React, { FC, useRef } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, PreferenceCard, Text } from "../../components"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"

const headerHeight = 75 * 2

const ROOT: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

const HEADER: ViewStyle = {
  backgroundColor: color.palette.white,
  zIndex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.black,
}
const SUBTITLE: TextStyle = {
  ...TITLE,
  fontSize: 10,
  textAlign: "center",
}

export const SetPreferencesScreen: FC<StackScreenProps<NavigatorParamList, "setPreferences">> =
  observer(function SetPreferencesScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const data = [].fill({}, 0, 10)
    const ref = useRef(null)

    return (
      <SafeAreaView style={ROOT}>
        <View style={HEADER}>
          <Header
            headerHeight={headerHeight}
            headerTx="setPreferences.title"
            leftIcon="back"
            onLeftPress={() => navigation.goBack()}
            titleStyle={TITLE}
            style={HEADER}
          >
            <Text tx="setPreferences.subtitle" style={SUBTITLE} />
          </Header>
        </View>
        <FlatList
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: headerHeight }}
          data={data}
          ref={ref}
          numColumns={2}
          renderItem={PreferenceCard}
          keyExtractor={(item) => item.label}
        />
      </SafeAreaView>
    )
  })

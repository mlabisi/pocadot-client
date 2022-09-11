import React, { FC, useCallback, useContext, useRef } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, FlatList, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../../navigators"
import { Button, Icon, ParsedText, Text, PreferencesGrid } from "../../../components"
import { color } from "../../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { RootStoreContext, useQuery } from "../../../models"
import BottomSheet from "react-native-gesture-bottom-sheet"
import { Divider } from "@rneui/base"
import Swipeable from "react-native-gesture-handler/Swipeable"

const { height } = Dimensions.get("window")

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const TITLE: TextStyle = {
  color: color.palette.black,
  textTransform: "uppercase",
  textAlign: "center",
  padding: 5,
}

const LINK_TEXT: TextStyle = {
  fontSize: 15,
  fontWeight: "300",
  color: color.palette.lavender,
}
const SELECTED_CT: TextStyle = {
  ...LINK_TEXT,
  fontWeight: "bold",
}

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.white,
}

const CHEVRON: ImageStyle = {
  alignItems: "center",
  width: 10,
}

const ROW_CONTAINER: ViewStyle = {
  paddingHorizontal: 10,
  alignItems: "flex-start",
  height: 45,
}

const ITEM: TextStyle = {
  padding: 10,
  color: color.palette.black,
}

const DELETE_CONTAINER: ViewStyle = {
  margin: 0,
  alignContent: "center",
  justifyContent: "center",
  width: 70,
}

const DELETE_BUTTON: ViewStyle = { backgroundColor: color.error, flex: 1 }

export const ModifyPreferencesScreen: FC<
  StackScreenProps<NavigatorParamList, "modifyPreferences">
> = observer(function ModifyPreferencesScreen({ navigation }) {
  const { selectedPreferences, setSelectedPreferences, filteredPreferences, currentUserId } =
    useContext(RootStoreContext)

  // ref
  const sheetRef = useRef<BottomSheet>(null)

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    sheetRef.current?.show()
  }, [])

  // render
  let row: Array<any> = []
  let prevOpenedRow

  const handleDelete = async (item) => {
    item.selected = !item.selected
    setSelectedPreferences((old) => old.filter((found) => found.id !== item.id))
  }

  const renderItem = ({ item, index }, onClick) => {
    const closeRow = (index) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close()
      }
      prevOpenedRow = row[index]
    }

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View style={DELETE_CONTAINER}>
          <Button style={DELETE_BUTTON} onPress={onClick} tx="common.delete"></Button>
        </View>
      )
    }

    return (
      <Swipeable
        renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, onClick)}
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightThreshold={-100}
      >
        <View style={ROW_CONTAINER}>
          <Text style={ITEM}> {item.name ?? item.stageName} </Text>
        </View>
        <Divider />
      </Swipeable>
    )
  }

  const preferencesFeedQuery = useQuery((store) =>
    store.queryPreferencesFeed({}, (feed) =>
      feed.idol((idol) => idol.stageName).group((group) => group.name),
    ),
  )

  const myPreferencesQuery = useQuery((store) =>
    store.queryUsers({ input: { ids: [currentUserId] } }, (user) =>
      user.id.faveGroups((group) => group.name).faveIdols((idol) => idol.stageName),
    ),
  )

  if (preferencesFeedQuery.loading) {
    return (
      <SafeAreaView style={ROOT}>
        <View style={{ flexDirection: "column" }}>
          <Text style={TITLE} tx={"common.loading"} />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <>
      <PreferencesGrid
        selectedItems={selectedPreferences}
        setSelectedItems={setSelectedPreferences}
        filteredItems={filteredPreferences}
      />

      <Button onPress={handlePresentModalPress} style={BUTTON}>
        <Icon icon="chevronUp" style={CHEVRON} />
        <ParsedText
          tx="preferences.label"
          txOptions={{ selectedCt: selectedPreferences.length }}
          style={LINK_TEXT}
          parse={[{ pattern: /(\d+)/, style: SELECTED_CT }]}
        />
      </Button>
      <BottomSheet ref={sheetRef} draggable={true} hasDraggableIcon={true} height={height * 0.8}>
        <Text tx="preferences.title" style={TITLE} />
        <FlatList
          data={[
            ...myPreferencesQuery.data.users[0].faveIdols,
            ...myPreferencesQuery.data.users[0].faveGroups,
          ]}
          keyExtractor={(item) => item.id}
          renderItem={(v) =>
            renderItem(v, async () => {
              await handleDelete(v.item)
            })
          }
        />
      </BottomSheet>
    </>
  )
})

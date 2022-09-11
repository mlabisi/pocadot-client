import React, { FC, useCallback, useContext, useRef } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Icon, ParsedText, Text, PreferencesGrid } from "../../components"
import { RootStoreContext } from "../../models"
import BottomSheet from "react-native-gesture-bottom-sheet"
import { Divider } from "@rneui/base"
import Swipeable from "react-native-gesture-handler/Swipeable"
import {
  BUTTON,
  CHEVRON,
  DELETE_BUTTON,
  DELETE_CONTAINER,
  height,
  ITEM,
  LINK_TEXT,
  ROW_CONTAINER,
  SELECTED_CT,
  TITLE,
} from "./styles"

export const PreferencesScreen: FC<StackScreenProps<NavigatorParamList, "preferences">> = observer(
  function PreferencesScreen({ navigation }) {
    let rootStore = useContext(RootStoreContext)
    const { selectedPreferences, setSelectedPreferences } = rootStore

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
      setSelectedPreferences(selectedPreferences.filter((found) => found !== item.id))
    }

    const renderItem = ({ item: id, index }, onClick) => {
      const itemName = rootStore.groups.has(id)
        ? rootStore.groups.get(id).name
        : rootStore.idols.get(id).stageName

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
            <Text style={ITEM}> {itemName} </Text>
          </View>
          <Divider />
        </Swipeable>
      )
    }

    return (
      <>
        <PreferencesGrid />

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
            data={selectedPreferences}
            keyExtractor={(item) => item}
            renderItem={(v) =>
              renderItem(v, async () => {
                await handleDelete(v.item)
              })
            }
          />
        </BottomSheet>
      </>
    )
  },
)

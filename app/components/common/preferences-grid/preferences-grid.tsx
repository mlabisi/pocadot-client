import * as React from "react"
import { ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../../theme"
import { load, save } from "../../../utils/storage"
import { FlatGrid } from "react-native-super-grid"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { PreferenceCard } from "../preference-card/preference-card"

const GRID: ViewStyle = {
  backgroundColor: color.palette.fill,
  flex: 1,
}

export interface PreferencesGridProps {
  filteredItems: any[]

  selectedItems: any[]

  setSelectedItems: Function
}

/**
 * Used to display all available preferences
 */
export const PreferencesGrid = observer(function PreferencesGrid(props: PreferencesGridProps) {
  const { selectedItems, setSelectedItems, filteredItems } = props

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => {
        if (item.selected) {
          item.selected = !item.selected
          setSelectedItems(() => selectedItems.filter((found) => found.id !== item.id))
        } else {
          item.selected = !item.selected
          setSelectedItems((prev) => [...prev, item])
        }
      }}
    >
      <PreferenceCard item={item} />
    </TouchableWithoutFeedback>
  )

  return (
    <FlatGrid
      style={GRID}
      keyExtractor={(item) => item.id}
      maxItemsPerRow={2}
      data={filteredItems.map((item) => {
        return { ...item, selected: !!selectedItems.find((found) => found.id === item.id) }
      })}
      renderItem={renderItem}
    />
  )
})

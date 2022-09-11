import * as React from "react"
import { ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../../theme"
import { FlatGrid } from "react-native-super-grid"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import { PreferenceCard } from "../preference-card/preference-card"
import { useContext } from "react"
import { RootStoreContext } from "../../../models"

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
  const { groups, idols } = useContext(RootStoreContext)

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => {
        if (selectedItems.includes(item.id)) {
          setSelectedItems(selectedItems.filter((found) => found !== item.id))
        } else {
          setSelectedItems([...selectedItems, item.id])
        }
      }}
    >
      <PreferenceCard item={item} selected={selectedItems.includes(item.id)} />
    </TouchableWithoutFeedback>
  )

  return (
    <FlatGrid
      style={GRID}
      keyExtractor={(item) => item.id}
      maxItemsPerRow={2}
      data={filteredItems.map((id) => groups.get(id) ?? idols.get(id))}
      renderItem={renderItem}
    />
  )
})

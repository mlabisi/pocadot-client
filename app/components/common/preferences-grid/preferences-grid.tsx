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

/**
 * Used to display all available preferences
 */
export const PreferencesGrid = observer(function PreferencesGrid() {
  const { selectedPreferences, setSelectedPreferences, filteredPreferences } =
    useContext(RootStoreContext)

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => {
        if (selectedPreferences.includes(item.id)) {
          setSelectedPreferences(selectedPreferences.filter((found) => found !== item.id))
        } else {
          setSelectedPreferences([...selectedPreferences, item.id])
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
      data={filteredPreferences}
      renderItem={renderItem}
    />
  )
})

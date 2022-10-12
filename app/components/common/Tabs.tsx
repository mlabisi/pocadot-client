import * as React from "react"
import {
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Tab} from "./Tab"
import { widthPercentageToDP } from "react-native-responsive-screen"

export interface TabsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  tabs: { label: string }[]

  selectedIndex: number

  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

/**
 * Describe your component here
 */
export const Tabs = observer(function Tabs(props: TabsProps) {
  const width = widthPercentageToDP(100) / props.tabs.length
  return (
    <ScrollView
      scrollEnabled={false}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={10}
      contentContainerStyle={props.style ?? {}}
    >
      {props.tabs.map((tab, i) => {
        return (
          <Tab
            key={i}
            label={tab.label}
            index={i}
            selectedIndex={props.selectedIndex}
            setSelectedIndex={props.setSelectedIndex}
            width={width}
          />
        )
      })}
    </ScrollView>
  )
})

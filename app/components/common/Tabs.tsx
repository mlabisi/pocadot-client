import * as React from "react"
import {
  ScrollView,
  StyleProp, StyleSheet,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Tab} from "./Tab"
import { widthPercentageToDP } from "react-native-responsive-screen"
import { colors, typography } from "../../theme"
import { MutableRefObject } from "react"

export interface TabsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  tabs: { label: string }[]

  tabWidth: number

  tabContent: MutableRefObject<ScrollView>

  selectedIndex: number

  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

/**
 * Describe your component here
 */
export const Tabs = observer(function Tabs(props: TabsProps) {
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
            width={props.tabWidth}
            tabContent={props.tabContent}
          />
        )
      })}
    </ScrollView>
  )
})

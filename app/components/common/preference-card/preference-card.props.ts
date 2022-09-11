import { StyleProp, ViewStyle } from "react-native"

export interface PreferenceCardProps {
  /**
   * The featured image to override the default image.
   */
  item: any

  style?: StyleProp<ViewStyle>

  selected?: boolean
}

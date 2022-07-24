import * as React from "react"
import { View, ViewStyle } from "react-native"

export interface SpacerProps {
  /**
   * The number of flex-spots to take up
   */
  n: number
}

/**
 * Takes up n of the parent component's flex-spots
 *
 * @param props The spacer props
 */
export function Spacer(props: SpacerProps) {
  const { n } = props
  const styles: ViewStyle = {
    flex: n
  }

  return (
    <View style={styles}/>
  )
}

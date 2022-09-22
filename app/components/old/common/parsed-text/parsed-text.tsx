import * as React from "react"
import { observer } from "mobx-react-lite"
import ReactNativeParsedText, { ParsedTextProps } from "react-native-parsed-text"
import { translate } from "../../../../i18n"
import { presets } from "../text/text.presets"
import { TextProps } from "../text/text.props"

export interface MyParsedTextProps extends ParsedTextProps, TextProps {}

/**
 * Combines the best of ParsedText and the i18n features of Ignite's Text component!
 */
export const ParsedText = observer(function ParsedText(props: MyParsedTextProps) {
  // grab the props
  const { preset = "default", tx, txOptions, text, children, style: styleOverride, ...rest } = props

  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const style = presets[preset] || presets.default
  const styles = [style, styleOverride]

  return (
    <ReactNativeParsedText {...rest} style={styles}>
      {content}
    </ReactNativeParsedText>
  )
})

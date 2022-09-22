import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native"
import { IconTypes } from "../icon/icons"
import { TxKeyPath } from "../../../../i18n"
import React from "react"

export interface HeaderProps {
  n?: number
  /**
   * Main header, e.g. POWERED BY IGNITE
   */
  headerTx?: TxKeyPath

  /**
   * header non-i18n
   */
  headerText?: string

  /**
   * overall height of the header
   */
  headerHeight?: number

  /**
   * child items to be shown in sub-header
   */
  children?: React.ReactNode

  /**
   * Key for text that should appear on the left
   */
  leftTx?: TxKeyPath
  /**
   * Key for text that should appear on the right
   */
  rightTx?: TxKeyPath
  /**
   * Text that should appear on the left
   */
  leftText?: string
  /**
   * Text that should appear on the right
   */
  rightText?: string

  /**
   * Icon that should appear on the left
   */
  leftIcon?: IconTypes
  /**
   * Icon that should appear on the right
   */
  rightIcon?: IconTypes

  /**
   * Container style overrides.
   */
  rightIconStyle?: StyleProp<ImageStyle>

  /**
   * Container style overrides.
   */
  leftIconStyle?: StyleProp<ImageStyle>

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>
  /**
   * Text style.
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void

  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void
}

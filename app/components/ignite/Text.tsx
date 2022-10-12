import i18n from "i18n-js"
import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { isRTL, translate, TxKeyPath } from "../../i18n"
import { colors, typography } from "../../theme"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography.primary
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export function Text(props: TextProps) {
  const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const preset: Presets = $presets[props.preset] ? props.preset : "default"
  const $styles = [
    $rtlStyle,
    $presets[preset],
    $fontWeightStyles[weight],
    $sizeStyles[size],
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } as TextStyle,
  md: { fontSize: 18, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } as TextStyle,
  h1: { fontSize: 48, lineHeight: 50 } as TextStyle,
  h2: { fontSize: 40, lineHeight: 42 } as TextStyle,
  h3: { fontSize: 32, lineHeight: 34 } as TextStyle,
  h4: { fontSize: 24, lineHeight: 26 } as TextStyle,
  h5: { fontSize: 20, lineHeight: 22 } as TextStyle,
  h6: { fontSize: 18, lineHeight: 20 } as TextStyle,
}

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
]

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,

  h1: [$baseStyle, $sizeStyles.h1, {fontFamily: typography.secondary.normal}] as StyleProp<TextStyle>,
  h2: [$baseStyle, $sizeStyles.h2, {fontFamily: typography.secondary.normal}] as StyleProp<TextStyle>,
  h3: [$baseStyle, $sizeStyles.h3, {fontFamily: typography.secondary.normal}] as StyleProp<TextStyle>,
  h4: [$baseStyle, $sizeStyles.h4, {fontFamily: typography.secondary.normal}] as StyleProp<TextStyle>,
  h5: [$baseStyle, $sizeStyles.h5, {fontFamily: typography.secondary.normal}] as StyleProp<TextStyle>,
  h6: [$baseStyle, $sizeStyles.h6, {fontFamily: typography.secondary.normal}] as StyleProp<TextStyle>,

  bodyXXS: [$baseStyle, $sizeStyles.xxs, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  bodyXS: [$baseStyle, $sizeStyles.xs, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  bodySM: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  bodyMD: [$baseStyle, $sizeStyles.md, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  bodyLG: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  bodyXL: [$baseStyle, $sizeStyles.xl, $fontWeightStyles.normal] as StyleProp<TextStyle>,
  bodyXXL: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.normal] as StyleProp<TextStyle>,

}

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}

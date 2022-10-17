import React, { ReactElement } from "react"
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"
import { Edge, SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"
import { colors, spacing, typography } from "../../theme"
import { Icon, IconTypes } from "./Icon"
import { Text, TextProps } from "./Text"
import { isRTL, translate } from "../../i18n"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"

const leftHeightPercent = 3
const heightPercent = 3


export interface HeaderProps {
  /**
   * The layout of the title relative to the action components.
   * - `center` will force the title to always be centered relative to the header. If the title or the action buttons are too long, the title will be cut off.
   * - `flex` will attempt to center the title relative to the action buttons. If the action buttons are different widths, the title will be off-center relative to the header.
   */
  titleMode?: "center" | "flex" | "left"
  /**
   * Optional title style override.
   */
  titleStyle?: StyleProp<TextStyle>
  /**
   * Optional header style override.
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * Background color
   */
  backgroundColor?: string
  /**
   * Title text to display if not using `tx` or nested components.
   */
  title?: TextProps["text"]
  /**
   * Title text which is looked up via i18n.
   */
  titleTx?: TextProps["tx"]
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  titleTxOptions?: TextProps["txOptions"]
  /**
   * Icon that should appear on the left.
   * Can be used with `onLeftPress`.
   */
  leftIcon?: IconTypes
  /**
   * An optional tint color for the left icon
   */
  leftIconColor?: string
  /**
   * Left action text to display if not using `leftTx`.
   * Can be used with `onLeftPress`. Overrides `leftIcon`.
   */
  leftText?: TextProps["text"]
  /**
   * Left action text text which is looked up via i18n.
   * Can be used with `onLeftPress`. Overrides `leftIcon`.
   */
  leftTx?: TextProps["tx"]
  /**
   * Left action custom ReactElement if the built in action props don't suffice.
   * Overrides `leftIcon`, `leftTx` and `leftText`.
   */
  LeftActionComponent?: ReactElement
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  leftTxOptions?: TextProps["txOptions"]
  /**
   * What happens when you press the left icon or text action.
   */
  onLeftPress?: TouchableOpacityProps["onPress"]
  /**
   * Icon that should appear on the right.
   * Can be used with `onRightPress`.
   */
  rightIcon?: IconTypes
  /**
   * An optional tint color for the right icon
   */
  rightIconColor?: string
  /**
   * Right action text to display if not using `rightTx`.
   * Can be used with `onRightPress`. Overrides `rightIcon`.
   */
  rightText?: TextProps["text"]
  /**
   * Right action text text which is looked up via i18n.
   * Can be used with `onRightPress`. Overrides `rightIcon`.
   */
  rightTx?: TextProps["tx"]
  /**
   * Right action custom ReactElement if the built in action props don't suffice.
   * Overrides `rightIcon`, `rightTx` and `rightText`.
   */
  RightActionComponent?: ReactElement
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  rightTxOptions?: TextProps["txOptions"]
  /**
   * What happens when you press the right icon or text action.
   */
  onRightPress?: TouchableOpacityProps["onPress"]
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: Edge[]
  /**
   * Pass any additional props directly to the SafeAreaView component.
   */
  SafeAreaViewProps?: SafeAreaViewProps

  isInline?: boolean
}

interface HeaderActionProps {
  backgroundColor?: string
  icon?: IconTypes
  iconColor?: string
  text?: TextProps["text"]
  tx?: TextProps["tx"]
  txOptions?: TextProps["txOptions"]
  onPress?: TouchableOpacityProps["onPress"]
  ActionComponent?: ReactElement
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 * The Header is meant to be used with the `screenOptions.header` option on navigators,routes, or screen components via `navigation.setOptions({ header })`.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Header.md)
 */
export function Header(props: HeaderProps) {
  const {
    backgroundColor = colors.background,
    LeftActionComponent,
    leftIcon,
    leftIconColor,
    leftText,
    leftTx,
    leftTxOptions,
    onLeftPress,
    onRightPress,
    RightActionComponent,
    rightIcon,
    rightIconColor,
    rightText,
    rightTx,
    rightTxOptions,
    safeAreaEdges = ["top"],
    SafeAreaViewProps,
    title,
    titleMode = "left",
    titleTx,
    titleTxOptions,
    isInline = false,
    titleStyle: $titleStyleOverride,
    containerStyle: $containerStyleOverride,
  } = props

  const Wrapper = safeAreaEdges?.length ? SafeAreaView : View

  const titleContent = titleTx ? translate(titleTx, titleTxOptions) : title

  return (
    <Wrapper
      edges={safeAreaEdges}
      {...SafeAreaViewProps}
      style={[$safeArea, SafeAreaViewProps?.style, { backgroundColor }]}
    >
      {titleMode === "left" ? (
        <View style={$column}>
          <View style={[$container, $containerStyleOverride]}>
            {!!titleContent && (
              <Text
                weight="medium"
                size="md"
                text={titleContent}
                style={[$leftTitle, $titleStyleOverride]}
              />
            )}

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: spacing.medium,
              }}
            >
              <HeaderAction
                tx={leftTx}
                text={leftText}
                icon={leftIcon}
                iconColor={leftIconColor}
                onPress={onLeftPress}
                txOptions={leftTxOptions}
                backgroundColor={backgroundColor}
                ActionComponent={LeftActionComponent}
              />
              <HeaderAction
                tx={rightTx}
                text={rightText}
                icon={rightIcon}
                iconColor={rightIconColor}
                onPress={onRightPress}
                txOptions={rightTxOptions}
                backgroundColor={backgroundColor}
                ActionComponent={RightActionComponent}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={[$column, isInline ? {justifyContent: "flex-start", height: $flexTitle.lineHeight} : {}]}>
          <View style={[$container, $containerStyleOverride]}>
            <HeaderAction
              tx={leftTx}
              text={leftText}
              icon={leftIcon}
              iconColor={leftIconColor}
              onPress={onLeftPress}
              txOptions={leftTxOptions}
              backgroundColor={backgroundColor}
              ActionComponent={LeftActionComponent}
            />

            {!!titleContent && (
              <Text
                weight="medium"
                size="md"
                text={titleContent}
                style={[
                  titleMode === "center" && $centerTitle,
                  titleMode === "flex" && $flexTitle,
                  $titleStyleOverride,
                ]}
              />
            )}

            <HeaderAction
              tx={rightTx}
              text={rightText}
              icon={rightIcon}
              iconColor={rightIconColor}
              onPress={onRightPress}
              txOptions={rightTxOptions}
              backgroundColor={backgroundColor}
              ActionComponent={RightActionComponent}
            />
          </View>
        </View>
      )}
    </Wrapper>
  )
}

function HeaderAction(props: HeaderActionProps) {
  const { backgroundColor, icon, text, tx, txOptions, onPress, ActionComponent, iconColor } = props

  const content = tx ? translate(tx, txOptions) : text

  if (ActionComponent) return ActionComponent

  if (content) {
    return (
      <TouchableOpacity
        style={[$actionTextContainer, { backgroundColor }]}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.8}
      >
        <Text weight="medium" size="md" text={content} style={$actionText} />
      </TouchableOpacity>
    )
  }

  if (icon) {
    return (
      <Icon
        size={24}
        icon={icon}
        color={iconColor}
        onPress={onPress}
        containerStyle={[$actionIconContainer, { backgroundColor }]}
        style={isRTL ? { transform: [{ rotate: "180deg" }] } : {}}
      />
    )
  }

  return <View style={[$actionFillerContainer, { backgroundColor }]} />
}

const $safeArea: ViewStyle = {
  width: "100%",
}

const $column: ViewStyle = {
  height: heightPercentageToDP(10),
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
}

const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $centerTitle: TextStyle = {
  position: "absolute",
  width: "100%",
  textAlign: "center",
  paddingHorizontal: spacing.huge,
  zIndex: 1,
  color: colors.tint,
  fontSize: heightPercentageToDP(heightPercent),
  lineHeight: 40}

const $flexTitle: TextStyle = {
  flex: 1,
  textAlign: "left",
  paddingLeft: spacing.extraSmall,
  fontFamily: typography.fonts.jua.normal,
  color: colors.tint,
  fontSize: heightPercentageToDP(heightPercent),
  lineHeight: 40}

const $leftTitle: TextStyle = {
  flex: 1,
  textAlign: "left",
  paddingLeft: spacing.medium,
  fontFamily: typography.fonts.jua.normal,
  color: colors.tint,
  fontSize: heightPercentageToDP(leftHeightPercent),
lineHeight: heightPercentageToDP(leftHeightPercent)
}

const $actionTextContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  paddingHorizontal: spacing.medium,
  zIndex: 2,
}

const $actionText: TextStyle = {
  color: colors.tint,
}

const $actionIconContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  paddingHorizontal: spacing.medium,
  zIndex: 2,
}

const $actionFillerContainer: ViewStyle = {
  width: 16,
}

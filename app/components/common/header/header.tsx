import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { color, spacing } from "../../../theme"
import { translate } from "../../../i18n"

// static styles
const BASE: ViewStyle = {
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[6],
  backgroundColor: color.palette.white,
}
const ROOT: ViewStyle = {
  ...BASE,
  flexDirection: "row",
}

const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = {
  flex: 1 / 3,
  flexDirection: "row",
  justifyContent: "center",
}
const LEFT: ViewStyle = {
  flex: 1 / 3,
  flexDirection: "row",
  justifyContent: "flex-start",
}
const RIGHT: ViewStyle = {
  flex: 1 / 3,
  flexDirection: "row",
  justifyContent: "flex-end",
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    rightIconStyle,
    leftIconStyle,
    rightTx,
    leftTx,
    rightText,
    leftText,
    headerText,
    headerTx,
    style,
    titleStyle,
    textStyle,
    headerHeight,
    children,
    n = 0.5,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <>
      <View style={[ROOT, { height: headerHeight * n }, style]}>
        <View style={LEFT}>
          {leftIcon ? (
            <Button preset="link" onPress={onLeftPress}>
              <Icon icon={leftIcon} style={leftIconStyle} />
            </Button>
          ) : leftTx ? (
            <Button preset="link" onPress={onLeftPress}>
              <Text tx={leftTx} style={textStyle} />
            </Button>
          ) : leftText ? (
            <Button preset="link" onPress={onLeftPress}>
              <Text text={leftText} style={textStyle} />
            </Button>
          ) : null}
        </View>
        <View style={TITLE_MIDDLE}>
          <Text style={[TITLE, titleStyle]} text={header} />
        </View>
        <View style={RIGHT}>
          {rightIcon ? (
            <Button preset="link" onPress={onRightPress}>
              <Icon icon={rightIcon} style={rightIconStyle} />
            </Button>
          ) : rightTx ? (
            <Button preset="link" onPress={onRightPress}>
              <Text tx={rightTx} style={textStyle} />
            </Button>
          ) : rightText ? (
            <Button preset="link" onPress={onRightPress}>
              <Text text={rightText} style={textStyle} />
            </Button>
          ) : null}
        </View>
      </View>
      <View style={[{ backgroundColor: color.palette.white }]}>{children}</View>
    </>
  )
}

import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
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
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <>
      <View style={[ROOT, style, { height: headerHeight / 2 }]}>
        {leftIcon ? (
          <Button preset="link" onPress={onLeftPress}>
            <Icon icon={leftIcon} />
          </Button>
        ) : leftTx ? (
          <Button preset="link" onPress={onLeftPress}>
            <Text tx={leftTx} style={textStyle} />
          </Button>
        ) : leftText ? (
          <Button preset="link" onPress={onLeftPress}>
            <Text text={leftText} style={textStyle} />
          </Button>
        ) : (
          <View style={LEFT} />
        )}
        <View style={TITLE_MIDDLE}>
          <Text style={[TITLE, titleStyle]} text={header} />
        </View>
        {rightIcon ? (
          <Button preset="link" onPress={onRightPress}>
            <Icon icon={rightIcon} />
          </Button>
        ) : rightTx ? (
          <Button preset="link" onPress={onRightPress}>
            <Text tx={rightTx} style={textStyle} />
          </Button>
        ) : rightText ? (
          <Button preset="link" onPress={onRightPress}>
            <Text text={rightText} style={textStyle} />
          </Button>
        ) : (
          <View style={RIGHT} />
        )}
      </View>
      <View style={{ height: headerHeight / 2 }}>{children}</View>
    </>
  )
}

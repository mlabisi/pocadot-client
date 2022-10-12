import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../../assets/icons/ignite/back.png"),
  bell: require("../../../assets/icons/ignite/bell.png"),
  caretLeft: require("../../../assets/icons/ignite/caretLeft.png"),
  caretRight: require("../../../assets/icons/ignite/caretRight.png"),
  check: require("../../../assets/icons/ignite/check.png"),
  clap: require("../../../assets/icons/ignite/clap.png"),
  community: require("../../../assets/icons/ignite/community.png"),
  components: require("../../../assets/icons/ignite/components.png"),
  debug: require("../../../assets/icons/ignite/debug.png"),
  fingerHeart: require("../../../assets/icons/fingerHeart.png"),
  github: require("../../../assets/icons/ignite/github.png"),
  heart: require("../../../assets/icons/ignite/heart.png"),
  hidden: require("../../../assets/icons/ignite/hidden.png"),
  ladybug: require("../../../assets/icons/ignite/ladybug.png"),
  lock: require("../../../assets/icons/ignite/lock.png"),
  menu: require("../../../assets/icons/ignite/menu.png"),
  more: require("../../../assets/icons/ignite/more.png"),
  pin: require("../../../assets/icons/ignite/pin.png"),
  podcast: require("../../../assets/icons/ignite/podcast.png"),
  settings: require("../../../assets/icons/ignite/settings.png"),
  slack: require("../../../assets/icons/ignite/slack.png"),
  view: require("../../../assets/icons/ignite/view.png"),
  x: require("../../../assets/icons/ignite/x.png"),
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}

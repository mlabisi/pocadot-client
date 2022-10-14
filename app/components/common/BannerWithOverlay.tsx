import * as React from "react"
import { ImageBackground, StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { spacing} from "../../theme"
import { AutoImage, useAutoImage } from "../index"

export interface BannerWithOverlayProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  width: number

  bannerImage: any

  overlayImage: any
}

/**
 * Describe your component here
 */
export const BannerWithOverlay = observer(function BannerWithOverlay(
  props: BannerWithOverlayProps,
) {
  const width = Math.floor(props.width)
  const [_, height] = useAutoImage(props.bannerImage, [width, 0])

  const overlayDimensions = width * 0.25
  const overlayOffset = overlayDimensions * -0.5

  return (
    <View style={[styles.Container, { marginBottom: overlayDimensions * 0.5 }]}>
      <ImageBackground
        source={{ uri: props.bannerImage.uri, width, height }}
        style={styles.Banner}
        imageStyle={[styles.BannerImage, { width }]}
      >
        <View style={styles.OverlayContainer}>
          <AutoImage
            source={{ uri: props.overlayImage.uri }}
            style={[
              styles.OverlayImage,
              {
                width: overlayDimensions,
                height: overlayDimensions,
                borderRadius: overlayDimensions,
                bottom: overlayOffset,
              },
            ]}
          />
        </View>
      </ImageBackground>
    </View>
  )
})

const styles = StyleSheet.create({
  Banner: {
    flex: 1,
    justifyContent: "flex-end",
  },
  BannerImage: {
    borderRadius: spacing.large,
    marginLeft: spacing.medium,
  },
  Container: {
    flex: 1,
    justifyContent: "center",
  },
  OverlayContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  OverlayImage: {
    position: "absolute",
  },
})

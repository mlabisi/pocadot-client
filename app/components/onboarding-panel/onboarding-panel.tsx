import * as React from "react"
import { Dimensions, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Layout, Text } from "@ui-kitten/components"
import { AutoImage } from "../old/common/auto-image/auto-image"

const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    alignItems: "center",
  },
  Illustration: {
    width: 330,
    height: 330,
  },
  Description: {
    textAlign: "center",
    marginTop: 5,
    width: Dimensions.get("window").width * 0.8,
  },
})

export interface OnboardingPanelProps {
  data: { image: any; label: string; desc: string }
}

export const OnboardingPanel = observer(function OnboardingPanel(props: OnboardingPanelProps) {
  const { image, label, desc } = props.data

  return (
    <Layout style={styles.Container}>
      <AutoImage style={styles.Illustration} source={image} />
      <Text category={"h4"}>{label}</Text>
      <Text style={styles.Description}>{desc}</Text>
    </Layout>
  )
})

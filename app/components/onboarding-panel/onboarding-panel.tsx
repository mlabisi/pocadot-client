import * as React from "react"
import { StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { Layout, Text } from "@ui-kitten/components"
import { AutoImage } from "../old/common/auto-image/auto-image"

const styles = StyleSheet.create({
  Container: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Illustration: {
    width: 330,
    height: 330,
    marginBottom: 33,
  },
  Label: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 36,
    color: "rgba(31,41,55,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 376,
    marginBottom: 18,
  },
  Description: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(75,85,99,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 266,
    marginBottom: 114,
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
      <Text style={styles.Label}>{label}</Text>
      <Text style={styles.Description}>{desc}</Text>
    </Layout>
  )
})

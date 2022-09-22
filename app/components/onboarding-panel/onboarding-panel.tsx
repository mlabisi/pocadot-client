import * as React from "react"
import { Dimensions, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { Layout, Text } from "@ui-kitten/components"
import { AutoImage } from "../common/auto-image/auto-image"

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    height: Dimensions.get("window").height - 25,
  },
  Column: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  KpopIllustration: {
    width: 330,
    height: 330,
    marginBottom: 33,
  },
  Txt137: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 36,
    color: "rgba(31,41,55,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 376,
    marginBottom: 18,
  },
  Txt077: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(75,85,99,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 266,
    marginBottom: 114,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Txt916: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(75,85,99,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 108,
  },
  PageIndicators: {
    display: "flex",
    flexDirection: "row",
    marginRight: 109,
  },
  FilledIndicator: {
    backgroundColor: "rgba(163,176,239,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  Indicator: {
    backgroundColor: "rgba(230,230,230,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  Ellipse3: {
    backgroundColor: "rgba(230,230,230,1)",
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  Frame: {
    width: 24,
    height: 24,
    color: color.primary,
  },

  tab: {
    height: 192,
    alignItems: "center",
    justifyContent: "center",
  },
})

export interface OnboardingPanelProps {
  data: { image: any; label: string; desc: string }
}

// @ts-ignore
export const OnboardingPanel = observer(function OnboardingPanel(props: OnboardingPanelProps) {
  const { image, label, desc } = props.data

  return (
    <Layout style={styles.Column}>
      <AutoImage style={styles.KpopIllustration} source={image} />
      <Text style={styles.Txt137}>{label}</Text>
      <Text style={styles.Txt077}>{desc}</Text>
    </Layout>
  )
})

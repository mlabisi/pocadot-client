import React, { FC, useState } from "react"
import { StyleSheet, Dimensions } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Layout, ViewPager } from "@ui-kitten/components"
import { OnboardingPanel } from "../../components"

const data = [
  {
    image: require("../../../assets/images/kpop.png"),
    label: "Tell Us Who You Stan",
    desc: "Let us know who your favorite Kpop groups and idols are",
  },
  {
    image: require("../../../assets/images/photocard.png"),
    label: "Sell & Trade Your Photocards",
    desc: "List the photocards you Want To Trade and/or Buy",
  },
  {
    image: require("../../../assets/images/tada.png"),
    label: "Fulfill Your Wishlist",
    desc: "We'll recommend photocard listings that match your preferences",
  },
]

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: Dimensions.get("window").height,
  },
  Column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  PageIndicators: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
  Frame: {
    width: 10,
    height: 10,
  },
})

export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "onboarding">> = observer(
  function OnboardingScreen({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
      <Layout style={styles.Container} level="1">
        <ViewPager selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
          {data.map((item, index) => (
            <OnboardingPanel data={item} key={index} />
          ))}
        </ViewPager>
        <Layout style={styles.Column}>
          <Layout style={styles.Row}>
            <Layout style={styles.PageIndicators}>
              <Layout style={selectedIndex === 0 ? styles.FilledIndicator : styles.Indicator} />
              <Layout style={selectedIndex === 1 ? styles.FilledIndicator : styles.Indicator} />
              <Layout style={selectedIndex === 2 ? styles.FilledIndicator : styles.Indicator} />
            </Layout>
            {selectedIndex === data.length - 1 && (
              <Button onPress={() => navigation.navigate("welcomeTab")} style={styles.Frame} />
            )}
          </Layout>
        </Layout>
      </Layout>
    )
  },
)

import React, { FC, useCallback, useRef, useState } from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Text, Button, Layout, useStyleSheet } from "@ui-kitten/components"
import { AuthModal, OnboardingPager } from "../../components"
import { translate } from "../../i18n"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { color } from "../../theme"

const data = [
  {
    image: require("../../../assets/images/kpop.png"),
    label: translate("onboarding.panels.a.label"),
    desc: translate("onboarding.panels.a.desc"),
  },
  {
    image: require("../../../assets/images/photocard.png"),
    label: translate("onboarding.panels.b.label"),
    desc: translate("onboarding.panels.b.desc"),
  },
  {
    image: require("../../../assets/images/wishlist.png"),
    label: translate("onboarding.panels.c.label"),
    desc: translate("onboarding.panels.c.desc"),
  },
]

const themedStyles = StyleSheet.create({
  Container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "space-around",
  },
  PageIndicators: {
    flexDirection: "row",
    justifyContent: "center",
  },
  FilledIndicator: {
    backgroundColor: "rgba(163,176,239,1)",
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: 5,
    marginRight: wp(1.5),
  },
  Indicator: {
    backgroundColor: "rgba(230,230,230,1)",
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: 5,
    marginRight: wp(1.5),
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    margin: 5,
    borderRadius: 12,
    width: wp(60),
  },
  ContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  SelectedTabText: {
    color: color.palette.lavender,
    paddingBottom: 3,
  },
  Underlined: {
    borderBottomWidth: 3,
    borderBottomColor: color.palette.lavender,
  },
  InputContainer: {
    flex: 0.99,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  Input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(190,197,209,1)",
    width: wp(95),
  },
  Disclaimer: {
    textAlign: "center",
  },
  Fields: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Handle: {
    paddingTop: 24,
    borderRadius: 50,
  },
  HandleIndicator: {
    backgroundColor: "color-basic-300",
  },
})

export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "onboarding">> = observer(
  function OnboardingScreen({ navigation }) {
    const styles = useStyleSheet(themedStyles)

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [authMode, setAuthMode] = useState(0)

    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)

    // callbacks
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present()
    }, [])

    return (
      <BottomSheetModalProvider>
        <Layout style={styles.Container} level={"1"}>
          <OnboardingPager
            selectedIndex={selectedIndex}
            updateState={(index) => setSelectedIndex(index)}
            data={data}
          />

          <View style={styles.PageIndicators}>
            <View style={selectedIndex === 0 ? styles.FilledIndicator : styles.Indicator} />
            <View style={selectedIndex === 1 ? styles.FilledIndicator : styles.Indicator} />
            <View style={selectedIndex === 2 ? styles.FilledIndicator : styles.Indicator} />
          </View>

          <View style={styles.ButtonContainer}>
            <Button
              onPress={() => {
                setAuthMode(0)
                handlePresentModalPress()
              }}
              style={styles.Button}
            >
              <Text>Create Account</Text>
            </Button>
            <Button
              onPress={() => {
                setAuthMode(1)
                handlePresentModalPress()
              }}
              style={styles.Button}
            >
              <Text>Sign In</Text>
            </Button>
          </View>

          <AuthModal
            authMode={authMode}
            bottomSheetModalRef={bottomSheetModalRef}
            setAuthMode={setAuthMode}
          />
        </Layout>
      </BottomSheetModalProvider>
    )
  },
)

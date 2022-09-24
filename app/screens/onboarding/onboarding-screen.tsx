import React, { FC, useCallback, useMemo, useRef, useState } from "react"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Text, Button, Layout, Input, Icon } from "@ui-kitten/components"
import { OnboardingPager, Spacer } from "../../components"
import { translate } from "../../i18n"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
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

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-evenly",
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
    width: wp(50),
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
    flex: 0.95,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  Input: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
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
})

export const OnboardingScreen: FC<StackScreenProps<NavigatorParamList, "onboarding">> = observer(
  function OnboardingScreen({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [authMode, setAuthMode] = useState(0)
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [secureRegPass, setSecureRegPass] = useState(true)

    const toggleSecureRegPass = () => {
      setSecureRegPass(!secureRegPass)
    }

    const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureRegPass}>
        <Icon {...props} name={secureRegPass ? "eye-off" : "eye"} />
      </TouchableWithoutFeedback>
    )

    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null)

    // variables
    const snapPoints = useMemo(() => ["85%"], [])

    // callbacks
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present()
    }, [])
    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index)
    }, [])

    return (
      <BottomSheetModalProvider>
        <Layout style={styles.Container}>
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

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.ContentContainer}>
              <View style={[authMode === 0 ? styles.Underlined : {}]}>
                <Text
                  category={"h6"}
                  style={[authMode === 0 ? styles.SelectedTabText : { paddingBottom: 3 }]}
                  onPress={() => {
                    setAuthMode(0)
                  }}
                >
                  Create Account
                </Text>
              </View>

              <View style={[authMode === 1 ? styles.Underlined : {}]}>
                <Text
                  category={"h6"}
                  style={[authMode === 1 ? styles.SelectedTabText : { paddingBottom: 3 }]}
                  onPress={() => {
                    setAuthMode(1)
                  }}
                >
                  Sign In
                </Text>
              </View>
            </View>

            <Spacer n={1 - styles.InputContainer.flex} />

            <View style={styles.InputContainer}>
              <View style={styles.Fields}>
                <Input
                  label={"Email Address"}
                  placeholder={"Enter your email"}
                  style={styles.Input}
                  value={emailInput}
                  onChangeText={(newValue) => setEmailInput(newValue)}
                />
                <Input
                  label={"Password"}
                  placeholder={"Enter your password"}
                  value={passwordInput}
                  style={styles.Input}
                  accessoryRight={renderIcon}
                  secureTextEntry={secureRegPass}
                  onChangeText={(newValue) => setPasswordInput(newValue)}
                />
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

              <Text style={styles.Disclaimer}>
                By logging in or registering, you agree to Our Terms of Service and Privacy Policy.
              </Text>
            </View>
          </BottomSheetModal>
        </Layout>
      </BottomSheetModalProvider>
    )
  },
)

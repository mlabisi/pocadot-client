import React, { FC, useCallback, useMemo, useRef, useState } from "react"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Text, Button, Layout, Input, Icon } from "@ui-kitten/components"
import { OnboardingPager } from "../../components"
import { translate } from "../../i18n"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"

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
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
    const snapPoints = useMemo(() => ["50%", "75%"], [])

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
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <Button
                appearance={authMode === 0 ? "outline" : "ghost"}
                onPress={() => {
                  setAuthMode(0)
                }}
              >
                Create Account
              </Button>
              <Button
                appearance={authMode === 1 ? "outline" : "ghost"}
                onPress={() => {
                  setAuthMode(1)
                }}
              >
                Sign In
              </Button>
            </View>
            <Input
              label={"Email Address"}
              placeholder={"Enter your Text"}
              value={emailInput}
              onChangeText={(newValue) => setEmailInput(newValue)}
            />
            <Input
              label={"Password"}
              placeholder={"Enter your Password"}
              value={passwordInput}
              accessoryRight={renderIcon}
              secureTextEntry={secureRegPass}
              onChangeText={(newValue) => setPasswordInput(newValue)}
            />
          </BottomSheetModal>
        </Layout>
      </BottomSheetModalProvider>
    )
  },
)

import * as React from "react"
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Button, Icon, Input, useStyleSheet } from "@ui-kitten/components"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

const themedStyles = StyleSheet.create({
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  RowContainer: {
    width: wp(90),
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 5,
  },
  Button: {
    margin: 5,
    borderRadius: 12,
    width: wp(50),
  },
  InputContainer: {
    flex: 0.99,
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
  Forgot: {
    color: "color-primary-500",
    fontWeight: "bold",
  },
})

export const Login = observer(function Login() {
  const styles = useStyleSheet(themedStyles)
  const navigator = useNavigation()

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

  const forgotPasswordFlow = () => {
    console.log("Forgot!")
  }

  const ForgotPasswordView = () => {
    return (
      <TouchableOpacity onPress={forgotPasswordFlow}>
        <View style={styles.RowContainer}>
          <Text style={styles.Forgot}>Forgot Password?</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const login = () => {
    // @ts-ignore
    navigator.navigate("tabs")
  }

  return (
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
        <ForgotPasswordView />
      </View>

      <View style={styles.ButtonContainer}>
        <Button style={styles.Button} onPress={login}>
          <Text>Sign In</Text>
        </Button>
        <Button style={styles.Button} onPress={login}>
          <Text>Sign In with Google</Text>
        </Button>
      </View>

      <Text style={styles.Disclaimer}>
        By logging in or registering, you agree to Our Terms of Service and Privacy Policy.
      </Text>
    </View>
  )
})

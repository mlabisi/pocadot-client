import React, { Dispatch, MutableRefObject, useCallback, useMemo } from "react"
import { StyleSheet, View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, useStyleSheet } from "@ui-kitten/components"
import { Login, Register, Spacer } from "../../components"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"
import { color } from "../../theme"
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types"

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
  Handle: {
    paddingTop: 24,
    borderRadius: 50,
  },
  HandleIndicator: {
    backgroundColor: "color-basic-300",
    width: wp(15),
    padding: 2,
  },
  ModalBackground: {
    backgroundColor: "background-basic-color-1",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
})

export interface AuthModalProps {
  authMode: number

  bottomSheetModalRef: MutableRefObject<BottomSheetModalMethods>

  setAuthMode: Dispatch<React.SetStateAction<number>>
}

export const AuthModal = observer(function AuthModal(props: AuthModalProps) {
  const styles = useStyleSheet(themedStyles)

  const { authMode, bottomSheetModalRef, setAuthMode } = props

  // variables
  const snapPoints = useMemo(() => ["75%"], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  const BottomSheetBackground = ({ style }) => {
    return <View style={[styles.ModalBackground, { ...style }]} />
  }

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleStyle={styles.Handle}
      handleIndicatorStyle={styles.HandleIndicator}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...backdropProps} />
      )}
      backgroundComponent={(props) => {
        // @ts-ignore
        return <BottomSheetBackground {...props} />
      }}
    >
      <View style={[styles.ContentContainer, { paddingTop: 15 }]}>
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

      {
        //@ts-ignore
        <Spacer n={1 - styles.InputContainer.flex} />
      }

      {authMode === 0 ? <Register /> : <Login />}
    </BottomSheetModal>
  )
})

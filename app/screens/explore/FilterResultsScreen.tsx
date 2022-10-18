import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, Image, ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { Screen, Text } from "../../components"
import { translate } from "../../i18n"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const FilterResultsScreen: FC<StackScreenProps<AppStackParamList, "FilterResults">> = observer(function FilterResultsScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [tabs] = useState([
    {
      key: "explore.search.filter.tabs.category",
      title: translate("explore.search.filter.tabs.category"),
    },
    {
      key: "explore.search.filter.tabs.price",
      title: translate("explore.search.filter.tabs.price"),
    },
    {
      key: "explore.search.filter.tabs.type",
      title: translate("explore.search.filter.tabs.type"),
    },
    {
      key: "explore.search.filter.tabs.shipping",
      title: translate("explore.search.filter.tabs.shipping"),
    },
  ])

  const setIndex = (index) => {
    setSelectedIndex(index)
  }

  return (
    <ScrollView contentContainerStyle={styles.AutoLayoutVertical3}>
      <View style={styles.AutoLayoutVertical2}>
        <View style={styles.AutoLayoutHorizontal1}>
          <View
            style={
              styles.StateActiveStyleNoneThemeDefaultComponentHorizontalTab
            }
          >
            <Text style={styles.Txt129}>Category</Text>
            <View style={styles.Rectangle} />
          </View>
          <View
            style={
              styles.StateActiveStyleNoneThemeDefaultComponentHorizontalTab
            }
          >
            <Text style={styles.Txt155}>Price</Text>
          </View>
          <View
            style={
              styles.StateActiveStyleNoneThemeDefaultComponentHorizontalTab
            }
          >
            <Text style={styles.Txt155}>Type</Text>
          </View>
          <View
            style={
              styles.StateActiveStyleNoneThemeDefaultComponentHorizontalTab
            }
          >
            <Text style={styles.Txt155}>Shipping</Text>
          </View>
        </View>
        <View style={styles.AutoLayoutVertical}>
          <View style={styles.AutoLayoutHorizontal2}>
            <Text style={styles.Txt399}>Category</Text>
            <Image
              style={styles.IconlyLightOutlineArrowUp2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-1539%3A24204?alt=media&token=6fba5bab-3953-433c-a565-2fe74244065d",
              }}
            />
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24206%3B1429%3A18113?alt=media&token=3811a8d4-6853-4e09-b37f-9c2ec10d07ae",
              }}
            />
            <Text style={styles.Txt436}>Boy Groups</Text>
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24207%3B1429%3A18113?alt=media&token=242415e7-cf7d-44fb-a9c3-cbd33fd6b673",
              }}
            />
            <Text style={styles.Txt436}>Girl Groups</Text>
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24208%3B442%3A2394?alt=media&token=ad8dad05-6866-4a08-9d46-e9a173f14095",
              }}
            />
            <Text style={styles.Txt436}>Solo Idols</Text>
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24209%3B442%3A2394?alt=media&token=e14ff02a-b96e-44e5-89d3-b441b67a504d",
              }}
            />
            <Text style={styles.Txt436}>Coed Groups</Text>
          </View>
          <View
            style={styles.StyleTextThemeLightStateUncheckedComponentCheckbox}
          >
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24210%3B1429%3A18113?alt=media&token=45ba0bff-301b-4f90-9e0f-af9517601527",
              }}
            />
            <Text style={styles.Txt436}>Other</Text>
          </View>
        </View>
        <View style={styles.AutoLayoutVertical}>
          <View style={styles.AutoLayoutHorizontal2}>
            <Text style={styles.Txt399}>Price</Text>
            <Image
              style={styles.IconlyLightOutlineArrowUp2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-1539%3A24179?alt=media&token=f4a94f60-63e5-4814-9da7-37878393869c",
              }}
            />
          </View>
          <View
            style={
              styles.StatusFillTypeNormalStateFilledInputThemeLightComponentInputField
            }
          >
            <Image
              style={styles.ChainEthereumComponentNftSymbol}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24193%3B1528%3A23717?alt=media&token=a0d90381-016f-4f6d-9bd3-e1eb21c40382",
              }}
            />
            <Text style={styles.Txt578}>USD</Text>
            <Image
              style={styles.IconlyBoldArrowDown2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24193%3B430%3A10358?alt=media&token=22f1fa27-70d5-4ee2-b1bd-40e184de710b",
              }}
            />
          </View>
          <View style={styles.AutoLayoutHorizontal3}>
            <View
              style={
                styles.StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField
              }
            >
              <Text style={styles.Txt453}>10.00</Text>
            </View>
            <Text style={styles.Txt585}>To</Text>
            <View
              style={
                styles.StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField1
              }
            >
              <Text style={styles.Txt453}>30.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.AutoLayoutVertical}>
          <View style={styles.AutoLayoutHorizontal2}>
            <Text style={styles.Txt399}>Type</Text>
            <Image
              style={styles.IconlyLightOutlineArrowUp2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-1539%3A24197?alt=media&token=d753bb36-fef7-4ece-be20-842d26f6976f",
              }}
            />
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Group}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24199%3B433%3A1093?alt=media&token=22f07b66-b45d-489c-823f-4f93eda8e63d",
              }}
            />
            <Text style={styles.Txt940}>WTS - Want To Sell</Text>
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Group}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24200%3B1429%3A18153?alt=media&token=d743ae2a-9dc4-437f-9f60-9591c751d985",
              }}
            />
            <Text style={styles.Txt940}>WTT - Want To Trade</Text>
          </View>
          <View
            style={styles.StyleTextThemeLightStateUncheckedComponentCheckbox}
          >
            <Image
              style={styles.Group}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24684%3B1429%3A18153?alt=media&token=c868f60c-7a59-4ee2-b071-086a893d67ab",
              }}
            />
            <Text style={styles.Txt940}>WTS/WTT</Text>
          </View>
        </View>
        <View style={styles.AutoLayoutVertical1}>
          <View style={styles.AutoLayoutHorizontal2}>
            <Text style={styles.Txt399}>Shipping</Text>
            <Image
              style={styles.IconlyLightOutlineArrowUp2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-1539%3A24214?alt=media&token=2f9eaaac-d91a-4b0a-8454-a644c5c5cfa8",
              }}
            />
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24216%3B442%3A2394?alt=media&token=7d3013ac-42e6-4f2b-b2aa-76e71cc0e9b5",
              }}
            />
            <Text style={styles.Txt436}>International Shipping</Text>
          </View>
          <View style={styles.AutoLayoutHorizontal2}>
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24217%3B442%3A2394?alt=media&token=c80caf70-ab54-461a-a5ee-429b31b3393f",
              }}
            />
            <Text style={styles.Txt436}>In-Person Delivery</Text>
          </View>
          <View
            style={styles.StyleTextThemeLightStateUncheckedComponentCheckbox}
          >
            <Image
              style={styles.Vector}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o3o1vcy77at-I1539%3A24219%3B1429%3A18113?alt=media&token=9fc471b0-f4a2-4001-9071-1803a6039b39",
              }}
            />
            <Text style={styles.Txt436}>Ships from Another Country</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
})



const styles = StyleSheet.create({
  AutoLayoutVertical3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 47,
    paddingLeft: 23,
    paddingRight: 23,
    width: 428,
    height: 1331,
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
  ThemeLightComponentNavbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 24,
    width: 380,
    height: 48,
  },
  AutoLayoutHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    width: 380,
  },
  IconTimesComponentAdditionalIcons: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
  Txt1101: {
    fontSize: 24,
    fontFamily: "Jua, sans-serif",
    fontWeight: "400",
    lineHeight: 29,
    color: "rgba(163,176,239,1)",
    width: 337,
  },

  AutoLayoutHorizontal1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 24,
    width: 380,
  },
  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 110,
  },
  Txt129: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(163,176,239,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 111,
    marginBottom: 12,
  },
  Rectangle: {
    backgroundColor: "rgba(163,176,239,1)",
    width: 110,
    height: 4,
    borderRadius: 100,
  },

  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 110,
  },
  Txt155: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 111,
  },

  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 110,
  },
  Txt155: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 111,
  },

  StateActiveStyleNoneThemeDefaultComponentHorizontalTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 110,
  },
  Txt155: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 111,
  },

  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 24,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    width: 380,
  },
  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Txt399: {
    fontSize: 20,
    fontFamily: "Jua, sans-serif",
    fontWeight: "400",
    lineHeight: 24,
    color: "rgba(33,33,33,1)",
    width: 305,
    marginRight: 12,
  },
  IconlyLightOutlineArrowUp2: {
    width: 24,
    height: 24,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },

  StyleTextThemeLightStateUncheckedComponentCheckbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },

  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 24,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    width: 380,
  },
  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Txt399: {
    fontSize: 20,
    fontFamily: "Jua, sans-serif",
    fontWeight: "400",
    lineHeight: 24,
    color: "rgba(33,33,33,1)",
    width: 305,
    marginRight: 12,
  },
  IconlyLightOutlineArrowUp2: {
    width: 24,
    height: 24,
  },

  StatusFillTypeNormalStateFilledInputThemeLightComponentInputField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: "rgba(250,250,250,1)",
    width: 340,
    height: 56,
  },
  ChainEthereumComponentNftSymbol: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  Txt578: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 237,
    marginRight: 12,
  },
  IconlyBoldArrowDown2: {
    width: 20,
    height: 20,
  },

  AutoLayoutHorizontal3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 340,
  },
  StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: "rgba(250,250,250,1)",
    width: 145,
    height: 56,
  },
  Txt453: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 106,
  },

  Txt585: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  StatusFillTypeDefaultStateFilledInputThemeLightComponentInputField1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 16,
    backgroundColor: "rgba(250,250,250,1)",
    width: 145,
    height: 56,
  },
  Txt453: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 106,
  },

  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 24,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    width: 380,
  },
  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Txt399: {
    fontSize: 20,
    fontFamily: "Jua, sans-serif",
    fontWeight: "400",
    lineHeight: 24,
    color: "rgba(33,33,33,1)",
    width: 305,
    marginRight: 12,
  },
  IconlyLightOutlineArrowUp2: {
    width: 24,
    height: 24,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Group: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  Txt940: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 305,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Group: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  Txt940: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 305,
  },

  StyleTextThemeLightStateUncheckedComponentCheckbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 340,
  },
  Group: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  Txt940: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 305,
  },

  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 19,
    paddingBottom: 19,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 24,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(238,238,238,1)",
    width: 380,
  },
  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Txt399: {
    fontSize: 20,
    fontFamily: "Jua, sans-serif",
    fontWeight: "400",
    lineHeight: 24,
    color: "rgba(33,33,33,1)",
    width: 305,
    marginRight: 12,
  },
  IconlyLightOutlineArrowUp2: {
    width: 24,
    height: 24,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },

  AutoLayoutHorizontal2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },

  StyleTextThemeLightStateUncheckedComponentCheckbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 340,
  },
  Vector: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  Txt436: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 316,
  },
})

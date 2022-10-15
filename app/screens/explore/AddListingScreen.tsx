import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { FormSection, Text, TintedButton } from "../../components"
import { colors, spacing } from "../../theme"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { Ionicons } from "@expo/vector-icons"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const AddListingScreen: FC<StackScreenProps<AppStackParamList, "AddListing">> = observer(
  function AddListingScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const handlePress = () => {}

    const scanBack = () => {}

    const scanFront = () => {}

    const getComponent = (type) => {
      switch (type) {
      }

      return <View />
    }

    const renderFormSection = ({ item }) => (
      <FormSection
        key={item.key}
        title={item.title}
        description={item.description}
        inputComponent={getComponent(item.component)}
      />
    )

    return (
      <View style={styles.Root}>
        <ScrollView style={styles.Form}>
          <FormSection
            title={"Photocard Scans"}
            description={
              "Use the camera on your phone to scan the front and back of your photocard."
            }
            inputComponent={
              <View style={styles.UploadsRow}>
                <TouchableOpacity onPress={scanFront} style={styles.UploadItem}>
                  <Ionicons name={"scan-circle-sharp"} color={colors.tint} size={45}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={scanBack} style={styles.UploadItem}>
                  <Ionicons name={"scan-circle-sharp"} color={colors.tint} size={45} />
                </TouchableOpacity>
              </View>
            }
          />
          <FormSection title={"Idol"} inputComponent={<View />} />
          <FormSection
            title={"Era / Release"}
            description={
              "Share the name of the album, season’s greetings, era, etc that this photocard came from."
            }
            inputComponent={<View />}
          />
          <FormSection
            title={"Description"}
            description={
              "This description will be included on your listing’s detail page underneath the image. If you'd like to trade, be sure to provide a description of what you're looking for."
            }
            inputComponent={<View />}
          />
          <FormSection title={"Condition"} inputComponent={<View />} />
          <FormSection
            title={"Listing Type"}
            description={
              "Whether you would like to list your item as for sale or as available to trade. You can mark your listing as both if you’d like!"
            }
            inputComponent={<View />}
          />
          <FormSection
            title={"Starting Price"}
            description={"What’s the lowest amount you’d be willing to accept for this photocard?"}
            inputComponent={<View />}
          />
          <FormSection title={"International Shipping"} inputComponent={<View />} />
        </ScrollView>
        <View style={styles.ButtonContainer}>
          <View style={styles.Row}>
            <TintedButton
              onPress={handlePress}
              style={[styles.Button, styles.CancelButton]}
              text={
                <Text preset={"h6"} style={styles.CancelButtonText}>
                  Cancel
                </Text>
              }
            />
            <TintedButton
              onPress={handlePress}
              style={styles.Button}
              text={
                <Text preset={"h6"} style={styles.ButtonText}>
                  Create
                </Text>
              }
            />
          </View>
        </View>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  Button: {
    marginHorizontal: spacing.medium,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: widthPercentageToDP(30),
  },
  ButtonContainer: {
    alignItems: "center",
    backgroundColor: colors.cardBackground,
    display: "flex",
    flexDirection: "column",
    height: heightPercentageToDP(10),
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: widthPercentageToDP(100),
  },
  ButtonText: {
    color: colors.palette.other.white,
  },
  CancelButton: {
    backgroundColor: colors.palette.primary["200"],
  },
  CancelButtonText: {
    color: colors.tint,
  },
  Form: {
    alignContent: "center",
    paddingBottom: heightPercentageToDP(10),
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  Row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.medium,
    width: widthPercentageToDP(100),
  },
  UploadItem: {
    alignItems: "center",
    backgroundColor: colors.palette.greyscale["50"],
    borderColor: colors.border,
    borderRadius: 20,
    borderStyle: "dashed",
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: spacing.medium,
    marginTop: spacing.medium,
    paddingHorizontal: spacing.huge,
    paddingVertical: spacing.massive,
  },
  UploadsRow: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
})

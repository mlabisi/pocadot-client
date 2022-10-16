import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import {
  Card,
  FormSection,
  Header,
  LightDivider,
  Text,
  TextField,
  TintedButton,
  Toggle,
} from "../../components"
import { colors, spacing } from "../../theme"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { Ionicons, Octicons } from "@expo/vector-icons"
import SearchableDropdown from "react-native-searchable-dropdown"
import { idols } from "./demo"
import { BlurView } from "expo-blur"
import {AirbnbRating, Rating} from "react-native-ratings"

const conditionStrings = ['Damaged', 'Okay', 'Great','Like New','Unopened']

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const AddListingScreen: FC<StackScreenProps<AppStackParamList, "AddListing">> = observer(
  function AddListingScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const [selectedIdols, setSelectedIdols] = useState([])
    const [idolModalVisible, setIdolModalVisible] = useState(false)
    const [internationalShippingEnabled, setInternationalShippingEnabled] = useState(false)
    const [wtsEnabled, setWtsEnabled] = useState(false)
    const [wttEnabled, setWttEnabled] = useState(false)
    const [condition, setCondition] = useState(3);

    const handlePress = () => {}

    const cancelButtonPress = () => navigation.goBack()

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
        <ScrollView contentContainerStyle={styles.Form}>
          <Header
            titleTx={"explore.listings.add"}
            titleMode={"flex"}
            LeftActionComponent={
              <Pressable
                onPress={() => {
                  navigation.goBack()
                }}
                style={{ paddingLeft: spacing.small, paddingRight: spacing.small }}
                hitSlop={25}
              >
                <Octicons name={"x"} size={24} color={colors.tint} />
              </Pressable>
            }
          />
          <FormSection
            title={"Photocard Scans"}
            description={
              "Use the camera on your phone to scan the front and back of your photocard."
            }
            inputComponent={
              <View style={styles.UploadsRow}>
                <TouchableOpacity onPress={scanFront} style={styles.UploadItem}>
                  <Ionicons name={"scan-circle-sharp"} color={colors.tint} size={45} />
                </TouchableOpacity>
                <TouchableOpacity onPress={scanBack} style={styles.UploadItem}>
                  <Ionicons name={"scan-circle-sharp"} color={colors.tint} size={45} />
                </TouchableOpacity>
              </View>
            }
          />
          <FormSection
            title={"Idol(s)"}
            inputComponent={
              <View>
                <TouchableOpacity onPress={() => setIdolModalVisible(!idolModalVisible)}>
                  <View style={[styles.SelectIdol, { borderColor: colors.border, borderWidth: 1 }]}>
                    <Text preset={"bodySM"}>Select an Idol</Text>
                    <Ionicons name={"add"} />
                  </View>
                </TouchableOpacity>
                <Modal
                  animationType={"fade"}
                  transparent={true}
                  visible={idolModalVisible}
                  onRequestClose={() => {
                    setIdolModalVisible(!idolModalVisible)
                  }}
                >
                  <BlurView intensity={5} style={styles.ModalContainer}>
                    <Pressable
                      // style={styles.container}
                      style={styles.ModalContainer}
                      onPressOut={() => {
                        setIdolModalVisible(!idolModalVisible)
                      }}
                    >
                      <TouchableWithoutFeedback>
                        <View style={styles.ModalContents}>
                          <Card width={widthPercentageToDP(75)} style={styles.ModalContents}>
                            <SearchableDropdown
                              multi={true}
                              selectedItems={selectedIdols}
                              onItemSelect={(item) => {
                                setSelectedIdols((prev) => [...prev, item])
                              }}
                              containerStyle={{
                                height: heightPercentageToDP(35),
                                width: widthPercentageToDP(65),
                                paddingVertical: spacing.medium,
                              }}
                              onRemoveItem={(item, index) => {
                                setSelectedIdols((prev) => prev.filter((it) => it.id !== item.id))
                              }}
                              itemStyle={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                marginVertical: spacing.extraSmall,
                                padding: spacing.small,
                                borderRadius: 16,
                                backgroundColor: colors.palette.transparentColors.blue,
                              }}
                              itemsContainerStyle={{ height: heightPercentageToDP(40) }}
                              items={idols
                                .sort((a, b) => a.stageName.localeCompare(b.stageName))
                                .map((idol) => ({
                                  id: idol.id,
                                  name: `${idol.stageName} ${
                                    idol.groups.length
                                      ? `- ${idol.groups.map((group) => group.name).join(", ")}`
                                      : ""
                                  }`,
                                }))}
                              chip={false}
                              resetValue={false}
                              textInputProps={{
                                placeholder: "Search for an idol",
                                underlineColorAndroid: "transparent",
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  padding: spacing.medium,
                                  borderRadius: 16,
                                  backgroundColor: colors.palette.transparentColors.blue,
                                  borderWidth: 1,
                                  borderStyle: "solid",
                                  borderColor: colors.tint,
                                },
                                onTextChange: (text) => {},
                              }}
                              listProps={{
                                nestedScrollEnabled: true,
                              }}
                            />
                            <TintedButton
                              onPress={() => setIdolModalVisible(!idolModalVisible)}
                              text={
                                <Text preset={"h6"} style={styles.ButtonText}>
                                  Save
                                </Text>
                              }
                            />
                          </Card>
                        </View>
                      </TouchableWithoutFeedback>
                    </Pressable>
                  </BlurView>
                </Modal>
                {selectedIdols.length > 0
                  ? selectedIdols.map((idol, i) => (
                      <View key={idol + i} style={styles.SelectIdol}>
                        <Text preset={"bodySM"}>{idol.name}</Text>
                        <TouchableOpacity
                          onPress={() =>
                            setSelectedIdols((prev) => prev.filter((it) => it.id !== idol.id))
                          }
                        >
                          <Octicons name={"x-circle-fill"} color={colors.tint} />
                        </TouchableOpacity>
                      </View>
                    ))
                  : null}
              </View>
            }
          />
          <FormSection
            title={"Era / Release"}
            description={
              "Share the name of the album, season’s greetings, era, etc that this photocard came from."
            }
            inputComponent={
              <View style={{ marginTop: spacing.extraSmall }}>
                <TextField
                  placeholder={"Ex: Album Version A, Season's Greeting '22, Fanmade, etc..."}
                  inputWrapperStyle={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: spacing.extraSmall,
                    padding: spacing.small,
                    borderRadius: 16,
                    backgroundColor: colors.palette.transparentColors.blue,
                    width: widthPercentageToDP(100) - spacing.extraLarge,
                  }}
                  style={{ fontSize: spacing.small, marginHorizontal: 0 }}
                />
              </View>
            }
          />
          <LightDivider style={styles.Divider} />

          <FormSection
            title={"Description"}
            description={
              "This description will be included on your listing’s detail page underneath the image."
            }
            inputComponent={
              <View style={{ marginTop: spacing.extraSmall }}>
                <TextField
                  multiline={true}
                  placeholder={"Provide a detailed description of the photocard you're listing.  If you'd like to trade, be sure to provide a description of what kind of photocard you're looking for."}
                  inputWrapperStyle={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: spacing.extraSmall,
                    padding: spacing.small,
                    borderRadius: 16,
                    backgroundColor: colors.palette.transparentColors.blue,
                    width: widthPercentageToDP(100) - spacing.extraLarge,
                  }}
                  style={{ fontSize: spacing.small, marginHorizontal: 0 }}
                />
              </View>
            }
          />
          <FormSection
            title={"Condition"}
            inputComponent={
              <View
                style={{
                  marginTop: spacing.extraSmall,
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1
                }}
              >
                <AirbnbRating
                  reviews={conditionStrings}
                  selectedColor={colors.tint}
                  unSelectedColor={colors.palette.greyscale["200"]}
                  showRating={false}
                  size={spacing.large}
                  onFinishRating={(value) => setCondition(value)}
                  starContainerStyle={{
                    marginVertical: spacing.extraSmall,
                  }}
                />
                <Text preset={"bodySM"}>{conditionStrings[condition - 1]}</Text>
              </View>
            }
          />
          <FormSection
            title={"Listing Type"}
            description={
              "Whether you would like to list your item as for sale or as available to trade. You can mark your listing as both if you’d like!"
            }
            inputComponent={
              <View
                style={{
                  marginTop: spacing.extraSmall,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Toggle
                  variant={"checkbox"}
                  value={wtsEnabled}
                  onValueChange={setWtsEnabled}
                  containerStyle={{ paddingRight: spacing.tiny }}
                />
                <Text preset={"bodyXS"} style={{ paddingRight: spacing.small }}>
                  WTS (Want To Sell)
                </Text>
                <Toggle
                  variant={"checkbox"}
                  value={wttEnabled}
                  onValueChange={setWttEnabled}
                  containerStyle={{ paddingRight: spacing.tiny }}
                />
                <Text preset={"bodyXS"} style={{ paddingRight: spacing.small }}>
                  WTT (Want To Trade)
                </Text>
              </View>
            }
          />
          <FormSection
            title={"Starting Price"}
            description={"What’s the lowest amount you’d be willing to accept for this photocard?"}
            inputComponent={
              <View style={{ marginTop: spacing.extraSmall }}>
                <TextField
                  placeholder={"Ex: $25"}
                  inputWrapperStyle={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: spacing.extraSmall,
                    padding: spacing.small,
                    borderRadius: 16,
                    backgroundColor: colors.palette.transparentColors.blue,
                    width: widthPercentageToDP(100) - spacing.extraLarge,
                  }}
                  style={{ fontSize: spacing.small, marginHorizontal: 0 }}
                />
              </View>
            }
          />
          <FormSection
            title={"International Shipping"}
            inputComponent={
              <View style={styles.Row}>
                <Text preset={"bodySM"} style={styles.SwitchLabel}>
                  Are you willing to ship outside of USA/CA?
                </Text>
                <Toggle
                  variant={"switch"}
                  value={internationalShippingEnabled}
                  onValueChange={setInternationalShippingEnabled}
                />
              </View>
            }
          />
        </ScrollView>
        <View style={styles.ButtonContainer}>
          <View style={styles.ButtonRow}>
            <TintedButton
              onPress={cancelButtonPress}
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
    shadowRadius: 18,
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
  Divider: {
    left: spacing.medium,
    backgroundColor: colors.palette.greyscale["200"],
    width: widthPercentageToDP(100) - spacing.large,
  },
  Form: {
    alignContent: "center",
    paddingBottom: heightPercentageToDP(10),
    width: widthPercentageToDP(100),
  },
  ModalContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: widthPercentageToDP(100),
  },
  ModalContents: {
    height: heightPercentageToDP(45),
  },
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  ButtonRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.medium,
    width: widthPercentageToDP(100),
  },
  Row: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.medium,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
  SelectIdol: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    height: 56,
    justifyContent: "space-between",
    marginTop: spacing.medium,
    padding: spacing.medium,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
  SwitchLabel: {
    width: widthPercentageToDP(70),
  },
  UploadItem: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
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
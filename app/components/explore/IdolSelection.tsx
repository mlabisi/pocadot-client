import * as React from "react"
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing } from "../../theme"
import { Card, FormSection, Text, TintedButton } from "../index"
import { Ionicons, Octicons } from "@expo/vector-icons"
import { BlurView } from "expo-blur"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import { idols } from "../../screens/explore/demo"
import SearchableDropdown from "react-native-searchable-dropdown"

export interface IdolSelectionProps {
  idolModalVisible: boolean
  setIdolModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  selectedIdols: any[]
  setSelectedIdols: React.Dispatch<React.SetStateAction<any[]>>
}

/**
 * Describe your component here
 */
export const IdolSelection = observer(function IdolSelection({
  idolModalVisible,
  setIdolModalVisible,
  selectedIdols,
  setSelectedIdols,
}: IdolSelectionProps) {
  return (
    <FormSection
      title={"Idol(s)"}
      inputComponent={
        <View>
          <TouchableOpacity onPress={() => setIdolModalVisible(!idolModalVisible)}>
            <View style={styles.SelectButtonContainer}>
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
                        containerStyle={styles.SearchableDropdownContainer}
                        onRemoveItem={(item) => {
                          setSelectedIdols((prev) => prev.filter((it) => it.id !== item.id))
                        }}
                        itemStyle={styles.SeachableDropdownItem}
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
                          style: styles.SearchableDropdownInput,
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
  )
})

const styles = StyleSheet.create({
  ButtonText: {
    color: colors.palette.other.white,
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
  SeachableDropdownItem: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: spacing.extraSmall,
    padding: spacing.small,
  },
  SearchableDropdownContainer: {
    height: heightPercentageToDP(35),
    paddingVertical: spacing.medium,
    width: widthPercentageToDP(65),
  },
  SearchableDropdownInput: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderColor: colors.tint,
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: spacing.medium,
  },
  SelectButtonContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.medium,
    padding: spacing.medium,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
  SelectIdol: {
    alignItems: "center",
    backgroundColor: colors.palette.transparentColors.blue,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.medium,
    padding: spacing.medium,
    width: widthPercentageToDP(100) - spacing.extraLarge,
  },
})

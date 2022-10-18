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
import { Select } from "@mobile-reality/react-native-select-pro"
import { idols } from "../../screens/explore/demo"
import SearchableDropdown from "react-native-searchable-dropdown"
import ModalDropdown from "react-native-modal-dropdown-v2"
import { useRef } from "react"
import { SelectRef } from "@mobile-reality/react-native-select-pro/dist/typescript/types"

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
  selectedIdols,
  setSelectedIdols,
}: IdolSelectionProps) {
  const dropdown = useRef<SelectRef>(null)
  return (
    <FormSection
      title={"Idol(s)"}
      inputComponent={
        <View>
          <Select
            ref={dropdown}
            searchable={true}
            multiSelection={true}
            selectControlStyle={styles.SelectButtonContainer}
            optionStyle={styles.SeachableDropdownItem}
            optionsListStyle={styles.ModalContainer}
            placeholderText={"Search for an idol..."}
            onSelect={(option) => {
              dropdown.current.clear()
              if (option) setSelectedIdols((prev) => [...prev, option])
            }}
            onRemove={() => {/* no-op */}}
            options={idols
              .map((idol) => ({
                name: idol.StageName,
                groups: [idol.Group, idol.OtherGroup, idol.FormerGroup].filter(Boolean),
              }))
              .map((idol) => ({
                value: `${idol.name} ${
                  idol.groups.length ? `- ${idol.groups.map((group) => group).join(", ")}` : ""
                }`,
                label: `${idol.name} ${
                  idol.groups.length ? `- ${idol.groups.map((group) => group).join(", ")}` : ""
                }`,
              }))}
          />

          {selectedIdols.length > 0
            ? selectedIdols.map((idol, i) => (
                <View key={idol + i} style={styles.SelectIdol}>
                  <Text preset={"bodySM"}>{idol.value}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedIdols((prev) => prev.filter((it) => it.value !== idol.value))
                    }}
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
    // backgroundColor: colors.palette.primary["100"],
    // borderColor: colors.tint,
    // borderBottomLeftRadius: 16,
    // borderBottomRightRadius: 16,
    // borderStyle: "solid",
    // borderWidth: 1,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    backgroundColor: colors.palette.transparentColors.blue,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
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

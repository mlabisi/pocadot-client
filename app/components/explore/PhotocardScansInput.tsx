import * as React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, spacing, typography } from "../../theme"
import { FormSection, Text } from "../index"
import { Ionicons } from "@expo/vector-icons"

export interface PhotocardScansInputProps {
}

/**
 * Describe your component here
 */
export const PhotocardScansInput = observer(function PhotocardScansInput(props: PhotocardScansInputProps) {
  const scanBack = () => {}

  const scanFront = () => {}

  return (
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
  )
})

const styles = StyleSheet.create({
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

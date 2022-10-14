import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList } from "../../navigators"
import { FormSection, Screen, Text, TintedButton } from "../../components"
import { colors } from "../../theme"
import { addListingSections } from "./demo"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

export const AddListingScreen: FC<StackScreenProps<AppStackParamList, "AddListing">> = observer(
  function AddListingScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()

    const handlePress = () => {

    }

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
        <ScrollView>
          {addListingSections.map((section) => renderFormSection({item: section}))}
          <TintedButton onPress={handlePress}/>
        </ScrollView>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  Root: {
    backgroundColor: colors.background,
    flex: 1,
  },
})

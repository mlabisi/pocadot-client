import * as React from "react"
import { observer } from "mobx-react-lite"
import { HEADER_TEXT, headerHeight } from "../../../screens/old/listings/styles"
import { Header } from "../../common/header/header"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export const MyListingsHeader = observer(function MyListingsHeader() {
  const [editMode, setEditMode] = useState(false)
  const navigation = useNavigation()

  return (
    <Header
      headerHeight={headerHeight}
      leftTx={"common.back"}
      rightTx={editMode ? "common.save" : "common.edit"}
      onLeftPress={() => navigation.goBack()}
      onRightPress={() => {
        setEditMode((oldMode) => !oldMode)
      }}
      textStyle={HEADER_TEXT}
    />
  )
})

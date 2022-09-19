import * as React from "react"
import { observer } from "mobx-react-lite"
import { Header } from "../../"
import { HEADER_TEXT, headerHeight } from "./styles"

export const NotificationsHeader = observer(function NotificationsHeader() {
  return (
    <Header headerHeight={headerHeight} textStyle={HEADER_TEXT} headerTx={"notifications.title"} />
  )
})

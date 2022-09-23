import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewPager } from "@ui-kitten/components"
import { OnboardingPanel } from "./onboarding-panel"

export interface OnboardingPagerProps {
  selectedIndex: number
  updateState: (number) => void
  data: { image: any; label: string; desc: string }[]
}

export const OnboardingPager = observer(function OnboardingPager(props: OnboardingPagerProps) {
  const { selectedIndex, updateState, data } = props

  return (
    <ViewPager selectedIndex={selectedIndex} onSelect={(index) => updateState(index)}>
      {data.map((item, index) => (
        <OnboardingPanel data={item} key={index} />
      ))}
    </ViewPager>
  )
})

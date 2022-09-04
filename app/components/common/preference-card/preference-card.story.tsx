import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen, UseCase } from "../../../storybook/views"
import { PreferenceCard } from "./preference-card"
import { color } from "../../../theme"

storiesOf("PreferenceCard", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Default" usage="Default option." style={{ backgroundColor: color.fill }}>
        <PreferenceCard />
      </UseCase>
      <UseCase text="Selected" usage="Selected option." style={{ backgroundColor: color.fill }}>
        <PreferenceCard selected={true} />
      </UseCase>
    </Story>
  ))

import { Instance } from "mobx-state-tree"
import { ChatModelBase } from "./ChatModel.base"

/* The TypeScript type of an instance of ChatModel */
export interface ChatModelType extends Instance<typeof ChatModel> {
}

/* A graphql query fragment builders for ChatModel */
export { selectFromChat, chatModelPrimitives, ChatModelSelector } from "./ChatModel.base"

/**
 * ChatModel
 */
export const ChatModel = ChatModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

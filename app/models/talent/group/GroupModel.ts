import { Instance } from "mobx-state-tree"
import { GroupModelBase } from "./GroupModel.base"

/* The TypeScript type of an instance of GroupModel */
export interface GroupModelType extends Instance<typeof GroupModel.Type> {}

/* A graphql query fragment builders for GroupModel */
export { selectFromGroup, groupModelPrimitives, GroupModelSelector } from "./GroupModel.base"

/**
 * GroupModel
 *
 * Represents a group in the system
 */
export const GroupModel = GroupModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

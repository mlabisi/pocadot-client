import { Instance } from "mobx-state-tree"
import { GroupFeedModelBase } from "./GroupFeedModel.base"

/* The TypeScript type of an instance of GroupFeedModel */
export interface GroupFeedModelType extends Instance<typeof GroupFeedModel> {
}

/* A graphql query fragment builders for GroupFeedModel */
export {
  selectFromGroupFeed,
  groupFeedModelPrimitives,
  GroupFeedModelSelector,
} from "./GroupFeedModel.base"

/**
 * GroupFeedModel
 */
export const GroupFeedModel = GroupFeedModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

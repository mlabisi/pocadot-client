import { Instance } from "mobx-state-tree"
import { UserFeedModelBase } from "./UserFeedModel.base"

/* The TypeScript type of an instance of UserFeedModel */
export interface UserFeedModelType extends Instance<typeof UserFeedModel> {
}

/* A graphql query fragment builders for UserFeedModel */
export {
  selectFromUserFeed,
  userFeedModelPrimitives,
  UserFeedModelSelector,
} from "./UserFeedModel.base"

/**
 * UserFeedModel
 */
export const UserFeedModel = UserFeedModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

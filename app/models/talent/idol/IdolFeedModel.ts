import { Instance } from "mobx-state-tree"
import { IdolFeedModelBase } from "./IdolFeedModel.base"

/* The TypeScript type of an instance of IdolFeedModel */
export interface IdolFeedModelType extends Instance<typeof IdolFeedModel> {}

/* A graphql query fragment builders for IdolFeedModel */
export {
  selectFromIdolFeed,
  idolFeedModelPrimitives,
  IdolFeedModelSelector,
} from "./IdolFeedModel.base"

/**
 * IdolFeedModel
 */
export const IdolFeedModel = IdolFeedModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

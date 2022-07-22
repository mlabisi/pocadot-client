import { Instance } from "mobx-state-tree"
import { CollectionFeedModelBase } from "./CollectionFeedModel.base"

/* The TypeScript type of an instance of CollectionFeedModel */
export interface CollectionFeedModelType extends Instance<typeof CollectionFeedModel.Type> {}

/* A graphql query fragment builders for CollectionFeedModel */
export {
  selectFromCollectionFeed,
  collectionFeedModelPrimitives,
  CollectionFeedModelSelector,
} from "./CollectionFeedModel.base"

/**
 * CollectionFeedModel
 */
export const CollectionFeedModel = CollectionFeedModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

import { Instance } from "mobx-state-tree"
import { CollectionModelBase } from "./CollectionModel.base"

/* The TypeScript type of an instance of CollectionModel */
export interface CollectionModelType extends Instance<typeof CollectionModel.Type> {}

/* A graphql query fragment builders for CollectionModel */
export {
  selectFromCollection,
  collectionModelPrimitives,
  CollectionModelSelector,
} from "./CollectionModel.base"

/**
 * CollectionModel
 *
 * Represents a collection owned by a user
 */
export const CollectionModel = CollectionModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

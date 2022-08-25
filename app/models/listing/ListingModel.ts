import { Instance } from "mobx-state-tree"
import { ListingModelBase } from "./ListingModel.base"

/* The TypeScript type of an instance of ListingModel */
export interface ListingModelType extends Instance<typeof ListingModel> {}

/* A graphql query fragment builders for ListingModel */
export {
  selectFromListing,
  listingModelPrimitives,
  ListingModelSelector,
} from "./ListingModel.base"

/**
 * ListingModel
 *
 * Represents a listing in the system
 */
export const ListingModel = ListingModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

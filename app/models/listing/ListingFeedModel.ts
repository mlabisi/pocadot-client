import { Instance } from "mobx-state-tree"
import { ListingFeedModelBase } from "./ListingFeedModel.base"

/* The TypeScript type of an instance of ListingFeedModel */
export interface ListingFeedModelType extends Instance<typeof ListingFeedModel> {
}

/* A graphql query fragment builders for ListingFeedModel */
export {
  selectFromListingFeed,
  listingFeedModelPrimitives,
  ListingFeedModelSelector,
} from "./ListingFeedModel.base"

/**
 * ListingFeedModel
 */
export const ListingFeedModel = ListingFeedModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

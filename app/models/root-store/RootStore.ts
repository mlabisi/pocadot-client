import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { RootStoreBase } from "./RootStore.base"
import { ListingModel, ListingModelType } from "../listing/ListingModel"
import { MSTGQLRef, withTypedRefs } from "mst-gql"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStore =
  RootStoreBase
    .props({
      selectedListingId: types.optional(types.string, ""),
    })
    .views(self => ({
        get store() {
          return self
        },
      }),
    )
    .actions(self => ({
      setSelectedListingId(listingId) {
        self.selectedListingId = listingId
      },
      log() {
        console.log(JSON.stringify(self))
      },
    }))

/**
 * The RootStore instance.
 */
export interface RootStoreType extends Instance<typeof RootStore> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStore> {}

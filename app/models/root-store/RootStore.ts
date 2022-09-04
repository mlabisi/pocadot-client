import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { RootStoreBase } from "./RootStore.base"
import { ListingsMode } from "../../screens/listings/listings-mode"
import { FavesMode } from "../../screens/faves/faves-mode"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStore = RootStoreBase.props({
  selectedListingId: types.optional(types.string, ""),
  favesMode: types.optional(
    types.enumeration<FavesMode>(Object.values(FavesMode)), FavesMode.Saved,
  ),
  listingsMode: types.optional(
    types.enumeration<ListingsMode>(Object.values(ListingsMode)), ListingsMode.Suggested,
  ),
  skippedSuggestions: types.optional(types.array(types.string), []),
  seenSuggestions: types.optional(types.array(types.string), []),
  remainingSuggestions: types.optional(types.array(types.string), []),
  shouldReloadSuggestions: types.optional(types.boolean, true),
})
  .views((self) => ({
    get store() {
      return self
    },
  }))
  .actions((self) => ({
    setShouldReloadSuggestions(flag) {
      self.shouldReloadSuggestions = flag
    },
    setSeenSuggestions(listingIds) {
      self.seenSuggestions = listingIds
    },
    setSkippedSuggestions(listingIds) {
      self.skippedSuggestions = listingIds
    },
    setRemainingSuggestions(listingIds) {
      self.remainingSuggestions = listingIds
    },
    setSelectedListingId(listingId: string) {
      self.selectedListingId = listingId
    },
    setListingsMode(mode: ListingsMode) {
      self.listingsMode = mode
    },
    setFavesMode(mode: FavesMode) {
      self.favesMode = mode
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

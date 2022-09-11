import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { RootStoreBase } from "./RootStore.base"
import { ListingsMode } from "../../screens/listings/listings-mode"
import { FavesMode } from "../../screens/faves/faves-mode"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStore = RootStoreBase.props({
  currentUserId: types.optional(types.string, ""),
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
  preferencesQuery: types.optional(types.string, ""),
  selectedPreferences: types.optional(types.array(types.string), []),
  filteredPreferences: types.optional(types.array(types.string), []),
})
  .views((self) => ({
    get store() {
      return self
    },
  }))
  .actions((self) => ({
    setFilteredPreferences(filtered) {
      self.filteredPreferences = filtered
    },
    setSelectedPreferences(selected) {
      self.selectedPreferences = selected
    },
    setPreferencesQuery(query) {
      self.preferencesQuery = query
    },
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
    setCurrentUserId(userId: string) {
      self.currentUserId = userId
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

import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const SavedStoreModel = types
  .model("SavedStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface SavedStore extends Instance<typeof SavedStoreModel> {}
export interface SavedStoreSnapshotOut extends SnapshotOut<typeof SavedStoreModel> {}
export interface SavedStoreSnapshotIn extends SnapshotIn<typeof SavedStoreModel> {}
export const createSavedStoreDefaultModel = () => types.optional(SavedStoreModel, {})

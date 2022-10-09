import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ExploreStoreModel = types
  .model("ExploreStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface ExploreStore extends Instance<typeof ExploreStoreModel> {}
export interface ExploreStoreSnapshotOut extends SnapshotOut<typeof ExploreStoreModel> {}
export interface ExploreStoreSnapshotIn extends SnapshotIn<typeof ExploreStoreModel> {}
export const createExploreStoreDefaultModel = () => types.optional(ExploreStoreModel, {})

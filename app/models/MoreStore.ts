import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const MoreStoreModel = types
  .model("MoreStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface MoreStore extends Instance<typeof MoreStoreModel> {}
export interface MoreStoreSnapshotOut extends SnapshotOut<typeof MoreStoreModel> {}
export interface MoreStoreSnapshotIn extends SnapshotIn<typeof MoreStoreModel> {}
export const createMoreStoreDefaultModel = () => types.optional(MoreStoreModel, {})

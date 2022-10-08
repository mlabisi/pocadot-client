import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const MyProfileStoreModel = types
  .model("MyProfileStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface MyProfileStore extends Instance<typeof MyProfileStoreModel> {}
export interface MyProfileStoreSnapshotOut extends SnapshotOut<typeof MyProfileStoreModel> {}
export interface MyProfileStoreSnapshotIn extends SnapshotIn<typeof MyProfileStoreModel> {}
export const createMyProfileStoreDefaultModel = () => types.optional(MyProfileStoreModel, {})

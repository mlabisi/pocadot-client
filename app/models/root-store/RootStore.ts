import { Instance, SnapshotOut } from "mobx-state-tree"
import { RootStoreBase } from "./RootStore.base"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStore = RootStoreBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))

/**
 * The RootStore instance.
 */
export interface RootStoreType extends Instance<typeof RootStore> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStore> {}

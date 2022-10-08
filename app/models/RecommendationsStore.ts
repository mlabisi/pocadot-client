import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const RecommendationsStoreModel = types
  .model("RecommendationsStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface RecommendationsStore extends Instance<typeof RecommendationsStoreModel> {}
export interface RecommendationsStoreSnapshotOut extends SnapshotOut<typeof RecommendationsStoreModel> {}
export interface RecommendationsStoreSnapshotIn extends SnapshotIn<typeof RecommendationsStoreModel> {}
export const createRecommendationsStoreDefaultModel = () => types.optional(RecommendationsStoreModel, {})

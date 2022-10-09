import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { MoreStoreModel } from "./MoreStore"
import { MyProfileStoreModel } from "./MyProfileStore"
import { ExploreStoreModel } from "./ExploreStore"
import { SavedStoreModel } from "./SavedStore"
import { RecommendationsStoreModel } from "./RecommendationsStore"
import { AuthenticationStoreModel } from "./AuthenticationStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  moreStore: types.optional(MoreStoreModel, {} as any),
  myProfileStore: types.optional(MyProfileStoreModel, {} as any),
  exploreStore: types.optional(ExploreStoreModel, {} as any),
  savedStore: types.optional(SavedStoreModel, {} as any),
  recommendationsStore: types.optional(RecommendationsStoreModel, {} as any),
  authenticationStore: types.optional(AuthenticationStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}

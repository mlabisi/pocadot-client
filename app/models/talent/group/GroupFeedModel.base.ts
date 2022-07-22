/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../../ModelBase"
import { GroupModel, GroupModelType } from "./GroupModel"
import { GroupModelSelector } from "./GroupModel.base"
import { RootStoreType } from "../../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  groups: IObservableArray<GroupModelType>
}

/**
 * GroupFeedBase
 * auto generated base class for the model GroupFeedModel.
 */
export const GroupFeedModelBase = withTypedRefs<Refs>()(
  ModelBase.named("GroupFeed")
    .props({
      __typename: types.optional(types.literal("GroupFeed"), "GroupFeed"),
      page: types.union(types.undefined, types.integer),
      groups: types.union(
        types.undefined,
        types.array(MSTGQLRef(types.late((): any => GroupModel))),
      ),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class GroupFeedModelSelector extends QueryBuilder {
  get page() {
    return this.__attr(`page`)
  }
  groups(
    builder:
      | string
      | GroupModelSelector
      | ((selector: GroupModelSelector) => GroupModelSelector)
      | undefined,
  ) {
    return this.__child(`groups`, GroupModelSelector, builder)
  }
}
export function selectFromGroupFeed() {
  return new GroupFeedModelSelector()
}

export const groupFeedModelPrimitives = selectFromGroupFeed().page

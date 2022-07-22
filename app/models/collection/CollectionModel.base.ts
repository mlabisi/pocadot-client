/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { GroupModel, GroupModelType } from "../talent/group/GroupModel"
import { GroupModelSelector } from "../talent/group/GroupModel.base"
import { IdolModel, IdolModelType } from "../talent/idol/IdolModel"
import { IdolModelSelector } from "../talent/idol/IdolModel.base"
import { UserModel, UserModelType } from "../user/UserModel"
import { UserModelSelector } from "../user/UserModel.base"
import { RootStoreType } from "../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType
  taggedGroups: IObservableArray<GroupModelType>
  taggedIdols: IObservableArray<IdolModelType>
}

/**
 * CollectionBase
 * auto generated base class for the model CollectionModel.
 *
 * Represents a collection owned by a user
 */
export const CollectionModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Collection")
    .props({
      __typename: types.optional(types.literal("Collection"), "Collection"),
      id: types.identifier,
      title: types.union(types.undefined, types.string),
      description: types.union(types.undefined, types.null, types.string),
      user: types.union(types.undefined, MSTGQLRef(types.late((): any => UserModel))),
      taggedGroups: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => GroupModel))),
      ),
      taggedIdols: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => IdolModel))),
      ),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class CollectionModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get title() {
    return this.__attr(`title`)
  }
  get description() {
    return this.__attr(`description`)
  }
  user(
    builder:
      | string
      | UserModelSelector
      | ((selector: UserModelSelector) => UserModelSelector)
      | undefined,
  ) {
    return this.__child(`user`, UserModelSelector, builder)
  }
  taggedGroups(
    builder:
      | string
      | GroupModelSelector
      | ((selector: GroupModelSelector) => GroupModelSelector)
      | undefined,
  ) {
    return this.__child(`taggedGroups`, GroupModelSelector, builder)
  }
  taggedIdols(
    builder:
      | string
      | IdolModelSelector
      | ((selector: IdolModelSelector) => IdolModelSelector)
      | undefined,
  ) {
    return this.__child(`taggedIdols`, IdolModelSelector, builder)
  }
}
export function selectFromCollection() {
  return new CollectionModelSelector()
}

export const collectionModelPrimitives = selectFromCollection().title.description

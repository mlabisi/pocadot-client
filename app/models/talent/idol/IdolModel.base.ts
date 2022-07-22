/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../../ModelBase"
import { CollectionModel, CollectionModelType } from "../../collection/CollectionModel"
import { CollectionModelSelector } from "../../collection/CollectionModel.base"
import { GroupModel, GroupModelType } from "../group/GroupModel"
import { GroupModelSelector } from "../group/GroupModel.base"
import { ListingModel, ListingModelType } from "../../listing/ListingModel"
import { ListingModelSelector } from "../../listing/ListingModel.base"
import { UserModel, UserModelType } from "../../user/UserModel"
import { UserModelSelector } from "../../user/UserModel.base"
import { RootStoreType } from "../../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  favedBy: IObservableArray<UserModelType>
  groups: IObservableArray<GroupModelType>
  inListings: IObservableArray<ListingModelType>
  wantedByListings: IObservableArray<ListingModelType>
  inCollections: IObservableArray<CollectionModelType>
}

/**
 * IdolBase
 * auto generated base class for the model IdolModel.
 *
 * Represents an idol in the system
 */
export const IdolModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Idol")
    .props({
      __typename: types.optional(types.literal("Idol"), "Idol"),
      id: types.identifier,
      stageName: types.union(types.undefined, types.string),
      favedBy: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => UserModel))),
      ),
      groups: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => GroupModel))),
      ),
      inListings: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => ListingModel))),
      ),
      wantedByListings: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => ListingModel))),
      ),
      inCollections: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => CollectionModel))),
      ),
      isFeatured: types.union(types.undefined, types.boolean),
      isSolo: types.union(types.undefined, types.boolean),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class IdolModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get stageName() {
    return this.__attr(`stageName`)
  }
  get isFeatured() {
    return this.__attr(`isFeatured`)
  }
  get isSolo() {
    return this.__attr(`isSolo`)
  }
  favedBy(
    builder:
      | string
      | UserModelSelector
      | ((selector: UserModelSelector) => UserModelSelector)
      | undefined,
  ) {
    return this.__child(`favedBy`, UserModelSelector, builder)
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
  inListings(
    builder:
      | string
      | ListingModelSelector
      | ((selector: ListingModelSelector) => ListingModelSelector)
      | undefined,
  ) {
    return this.__child(`inListings`, ListingModelSelector, builder)
  }
  wantedByListings(
    builder:
      | string
      | ListingModelSelector
      | ((selector: ListingModelSelector) => ListingModelSelector)
      | undefined,
  ) {
    return this.__child(`wantedByListings`, ListingModelSelector, builder)
  }
  inCollections(
    builder:
      | string
      | CollectionModelSelector
      | ((selector: CollectionModelSelector) => CollectionModelSelector)
      | undefined,
  ) {
    return this.__child(`inCollections`, CollectionModelSelector, builder)
  }
}
export function selectFromIdol() {
  return new IdolModelSelector()
}

export const idolModelPrimitives = selectFromIdol().stageName.isFeatured.isSolo

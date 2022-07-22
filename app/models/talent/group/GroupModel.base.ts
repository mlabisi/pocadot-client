/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../../ModelBase"
import { CollectionModel, CollectionModelType } from "../../collection/CollectionModel"
import { CollectionModelSelector } from "../../collection/CollectionModel.base"
import { IdolModel, IdolModelType } from "../idol/IdolModel"
import { IdolModelSelector } from "../idol/IdolModel.base"
import { ListingModel, ListingModelType } from "../../listing/ListingModel"
import { ListingModelSelector } from "../../listing/ListingModel.base"
import { UserModel, UserModelType } from "../../user/UserModel"
import { UserModelSelector } from "../../user/UserModel.base"
import { RootStoreType } from "../../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  favedBy: IObservableArray<UserModelType>
  idols: IObservableArray<IdolModelType>
  inListings: IObservableArray<ListingModelType>
  wantedByListings: IObservableArray<ListingModelType>
  inCollections: IObservableArray<CollectionModelType>
}

/**
 * GroupBase
 * auto generated base class for the model GroupModel.
 *
 * Represents a group in the system
 */
export const GroupModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Group")
    .props({
      __typename: types.optional(types.literal("Group"), "Group"),
      id: types.identifier,
      name: types.union(types.undefined, types.string),
      favedBy: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => UserModel))),
      ),
      idols: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => IdolModel))),
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
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class GroupModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get name() {
    return this.__attr(`name`)
  }
  get isFeatured() {
    return this.__attr(`isFeatured`)
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
  idols(
    builder:
      | string
      | IdolModelSelector
      | ((selector: IdolModelSelector) => IdolModelSelector)
      | undefined,
  ) {
    return this.__child(`idols`, IdolModelSelector, builder)
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
export function selectFromGroup() {
  return new GroupModelSelector()
}

export const groupModelPrimitives = selectFromGroup().name.isFeatured

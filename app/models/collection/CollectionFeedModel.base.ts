/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { CollectionModel, CollectionModelType } from "./CollectionModel"
import { CollectionModelSelector } from "./CollectionModel.base"
import { RootStoreType } from "../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  collections: IObservableArray<CollectionModelType>
}

/**
 * CollectionFeedBase
 * auto generated base class for the model CollectionFeedModel.
 */
export const CollectionFeedModelBase = withTypedRefs<Refs>()(
  ModelBase.named("CollectionFeed")
    .props({
      __typename: types.optional(types.literal("CollectionFeed"), "CollectionFeed"),
      page: types.union(types.undefined, types.integer),
      collections: types.union(
        types.undefined,
        types.array(MSTGQLRef(types.late((): any => CollectionModel))),
      ),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class CollectionFeedModelSelector extends QueryBuilder {
  get page() {
    return this.__attr(`page`)
  }
  collections(
    builder:
      | string
      | CollectionModelSelector
      | ((selector: CollectionModelSelector) => CollectionModelSelector)
      | undefined,
  ) {
    return this.__child(`collections`, CollectionModelSelector, builder)
  }
}
export function selectFromCollectionFeed() {
  return new CollectionFeedModelSelector()
}

export const collectionFeedModelPrimitives = selectFromCollectionFeed().page

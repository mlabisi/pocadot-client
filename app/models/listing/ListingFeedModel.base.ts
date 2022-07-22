/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { ListingModel, ListingModelType } from "./ListingModel"
import { ListingModelSelector } from "./ListingModel.base"
import { RootStoreType } from "../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  listings: IObservableArray<ListingModelType>
}

/**
 * ListingFeedBase
 * auto generated base class for the model ListingFeedModel.
 */
export const ListingFeedModelBase = withTypedRefs<Refs>()(
  ModelBase.named("ListingFeed")
    .props({
      __typename: types.optional(types.literal("ListingFeed"), "ListingFeed"),
      page: types.union(types.undefined, types.integer),
      listings: types.union(
        types.undefined,
        types.array(MSTGQLRef(types.late((): any => ListingModel))),
      ),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class ListingFeedModelSelector extends QueryBuilder {
  get page() {
    return this.__attr(`page`)
  }
  listings(
    builder:
      | string
      | ListingModelSelector
      | ((selector: ListingModelSelector) => ListingModelSelector)
      | undefined,
  ) {
    return this.__child(`listings`, ListingModelSelector, builder)
  }
}
export function selectFromListingFeed() {
  return new ListingFeedModelSelector()
}

export const listingFeedModelPrimitives = selectFromListingFeed().page

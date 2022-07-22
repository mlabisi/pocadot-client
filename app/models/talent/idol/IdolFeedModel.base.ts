/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../../ModelBase"
import { IdolModel, IdolModelType } from "./IdolModel"
import { IdolModelSelector } from "./IdolModel.base"
import { RootStoreType } from "../../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  idols: IObservableArray<IdolModelType>
}

/**
 * IdolFeedBase
 * auto generated base class for the model IdolFeedModel.
 */
export const IdolFeedModelBase = withTypedRefs<Refs>()(
  ModelBase.named("IdolFeed")
    .props({
      __typename: types.optional(types.literal("IdolFeed"), "IdolFeed"),
      page: types.union(types.undefined, types.integer),
      idols: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => IdolModel)))),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class IdolFeedModelSelector extends QueryBuilder {
  get page() {
    return this.__attr(`page`)
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
}
export function selectFromIdolFeed() {
  return new IdolFeedModelSelector()
}

export const idolFeedModelPrimitives = selectFromIdolFeed().page

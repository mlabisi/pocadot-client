/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { CardConditionEnumType } from "./enums/CardConditionEnum"
import { GroupModel, GroupModelType } from "../talent/group/GroupModel"
import { GroupModelSelector } from "../talent/group/GroupModel.base"
import { IdolModel, IdolModelType } from "../talent/idol/IdolModel"
import { IdolModelSelector } from "../talent/idol/IdolModel.base"
import { ListingModel, ListingModelType } from "./ListingModel"
import { ListingTypeEnumType } from "./enums/ListingTypeEnum"
import { UserModel, UserModelType } from "../user/UserModel"
import { UserModelSelector } from "../user/UserModel.base"
import { RootStoreType } from "../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  listedBy: UserModelType
  favedBy: IObservableArray<UserModelType>
  listings: IObservableArray<ListingModelType>
  groups: IObservableArray<GroupModelType>
  idols: IObservableArray<IdolModelType>
  targetListings: IObservableArray<ListingModelType>
  targetGroups: IObservableArray<GroupModelType>
  targetIdols: IObservableArray<IdolModelType>
}

/**
 * ListingBase
 * auto generated base class for the model ListingModel.
 *
 * Represents a listing in the system
 */
export const ListingModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Listing")
    .props({
      __typename: types.optional(types.literal("Listing"), "Listing"),
      id: types.identifier,
      release: types.union(types.undefined, types.null, types.string),
      description: types.union(types.undefined, types.null, types.string),
      condition: types.union(types.undefined, CardConditionEnumType),
      startingPrice: types.union(types.undefined, types.null, types.number),
      country: types.union(types.undefined, types.string),
      isFeatured: types.union(types.undefined, types.boolean),
      international: types.union(types.undefined, types.boolean),
      listedBy: types.union(types.undefined, MSTGQLRef(types.late((): any => UserModel))),
      favedBy: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => UserModel))),
      ),
      listings: types.union(
        types.undefined,
        types.array(MSTGQLRef(types.late((): any => ListingModel))),
      ),
      groups: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => GroupModel))),
      ),
      idols: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => IdolModel))),
      ),
      targetListings: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => ListingModel))),
      ),
      targetMinCondition: types.union(types.undefined, types.null, CardConditionEnumType),
      targetGroups: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => GroupModel))),
      ),
      targetIdols: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => IdolModel))),
      ),
      type: types.union(types.undefined, types.array(ListingTypeEnumType)),
      targetMinStaringPrice: types.union(types.undefined, types.null, types.number),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class ListingModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  get release() {
    return this.__attr(`release`)
  }
  get description() {
    return this.__attr(`description`)
  }
  get condition() {
    return this.__attr(`condition`)
  }
  get startingPrice() {
    return this.__attr(`startingPrice`)
  }
  get country() {
    return this.__attr(`country`)
  }
  get isFeatured() {
    return this.__attr(`isFeatured`)
  }
  get international() {
    return this.__attr(`international`)
  }
  get targetMinCondition() {
    return this.__attr(`targetMinCondition`)
  }
  get type() {
    return this.__attr(`type`)
  }
  get targetMinStaringPrice() {
    return this.__attr(`targetMinStaringPrice`)
  }
  listedBy(
    builder:
      | string
      | UserModelSelector
      | ((selector: UserModelSelector) => UserModelSelector)
      | undefined,
  ) {
    return this.__child(`listedBy`, UserModelSelector, builder)
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
  listings(
    builder:
      | string
      | ListingModelSelector
      | ((selector: ListingModelSelector) => ListingModelSelector)
      | undefined,
  ) {
    return this.__child(`listings`, ListingModelSelector, builder)
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
  idols(
    builder:
      | string
      | IdolModelSelector
      | ((selector: IdolModelSelector) => IdolModelSelector)
      | undefined,
  ) {
    return this.__child(`idols`, IdolModelSelector, builder)
  }
  targetListings(
    builder:
      | string
      | ListingModelSelector
      | ((selector: ListingModelSelector) => ListingModelSelector)
      | undefined,
  ) {
    return this.__child(`targetListings`, ListingModelSelector, builder)
  }
  targetGroups(
    builder:
      | string
      | GroupModelSelector
      | ((selector: GroupModelSelector) => GroupModelSelector)
      | undefined,
  ) {
    return this.__child(`targetGroups`, GroupModelSelector, builder)
  }
  targetIdols(
    builder:
      | string
      | IdolModelSelector
      | ((selector: IdolModelSelector) => IdolModelSelector)
      | undefined,
  ) {
    return this.__child(`targetIdols`, IdolModelSelector, builder)
  }
}
export function selectFromListing() {
  return new ListingModelSelector()
}

export const listingModelPrimitives =
  selectFromListing().release.description.condition.startingPrice.country.isFeatured.international
    .targetMinCondition.type.targetMinStaringPrice

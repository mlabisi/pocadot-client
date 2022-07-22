/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { CollectionModel, CollectionModelType } from "../collection/CollectionModel"
import { CollectionModelSelector } from "../collection/CollectionModel.base"
import { GroupModel, GroupModelType } from "../talent/group/GroupModel"
import { GroupModelSelector } from "../talent/group/GroupModel.base"
import { IdolModel, IdolModelType } from "../talent/idol/IdolModel"
import { IdolModelSelector } from "../talent/idol/IdolModel.base"
import { ListingModel, ListingModelType } from "../listing/ListingModel"
import { ListingModelSelector } from "../listing/ListingModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { RootStoreType } from "../index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  listings: IObservableArray<ListingModelType>;
  faveGroups: IObservableArray<GroupModelType>;
  faveIdols: IObservableArray<IdolModelType>;
  faveListings: IObservableArray<ListingModelType>;
  faveUsers: IObservableArray<UserModelType>;
  collections: IObservableArray<CollectionModelType>;
}

/**
 * UserBase
 * auto generated base class for the model UserModel.
 *
 * Represents a user in the system
 */
export const UserModelBase = withTypedRefs<Refs>()(ModelBase
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    id: types.identifier,
    username: types.union(types.undefined, types.string),
    country: types.union(types.undefined, types.string),
    isFeatured: types.union(types.undefined, types.boolean),
    description: types.union(types.undefined, types.null, types.string),
    listings: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => ListingModel)))),
    faveGroups: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => GroupModel)))),
    faveIdols: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => IdolModel)))),
    faveListings: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => ListingModel)))),
    faveUsers: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => UserModel)))),
    profilePicture: types.union(types.undefined, types.null, types.array(types.frozen())),
    collections: types.union(types.undefined, types.null, types.array(MSTGQLRef(types.late((): any => CollectionModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get username() { return this.__attr(`username`) }
  get country() { return this.__attr(`country`) }
  get isFeatured() { return this.__attr(`isFeatured`) }
  get description() { return this.__attr(`description`) }
  get profilePicture() { return this.__attr(`profilePicture`) }
  listings(builder: string | ListingModelSelector | ((selector: ListingModelSelector) => ListingModelSelector) | undefined) { return this.__child(`listings`, ListingModelSelector, builder) }
  faveGroups(builder: string | GroupModelSelector | ((selector: GroupModelSelector) => GroupModelSelector) | undefined) { return this.__child(`faveGroups`, GroupModelSelector, builder) }
  faveIdols(builder: string | IdolModelSelector | ((selector: IdolModelSelector) => IdolModelSelector) | undefined) { return this.__child(`faveIdols`, IdolModelSelector, builder) }
  faveListings(builder: string | ListingModelSelector | ((selector: ListingModelSelector) => ListingModelSelector) | undefined) { return this.__child(`faveListings`, ListingModelSelector, builder) }
  faveUsers(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`faveUsers`, UserModelSelector, builder) }
  collections(builder: string | CollectionModelSelector | ((selector: CollectionModelSelector) => CollectionModelSelector) | undefined) { return this.__child(`collections`, CollectionModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().username.country.isFeatured.description.profilePicture

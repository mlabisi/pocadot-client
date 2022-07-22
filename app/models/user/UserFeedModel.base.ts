/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "../index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  users: IObservableArray<UserModelType>;
}

/**
 * UserFeedBase
 * auto generated base class for the model UserFeedModel.
 */
export const UserFeedModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UserFeed')
  .props({
    __typename: types.optional(types.literal("UserFeed"), "UserFeed"),
    page: types.union(types.undefined, types.integer),
    users: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => UserModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserFeedModelSelector extends QueryBuilder {
  get page() { return this.__attr(`page`) }
  users(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined) { return this.__child(`users`, UserModelSelector, builder) }
}
export function selectFromUserFeed() {
  return new UserFeedModelSelector()
}

export const userFeedModelPrimitives = selectFromUserFeed().page

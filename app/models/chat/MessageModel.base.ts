/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { UserModel, UserModelType } from "../user/UserModel"
import { UserModelSelector } from "../user/UserModel.base"
import { RootStoreType } from "../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  author: UserModelType
}

/**
 * MessageBase
 * auto generated base class for the model MessageModel.
 */
export const MessageModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Message")
    .props({
      __typename: types.optional(types.literal("Message"), "Message"),
      author: types.union(types.undefined, MSTGQLRef(types.late((): any => UserModel))),
      body: types.union(types.undefined, types.string),
      id: types.identifier,
      timestamp: types.union(types.undefined, types.string),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class MessageModelSelector extends QueryBuilder {
  get body() {
    return this.__attr(`body`)
  }

  get id() {
    return this.__attr(`id`)
  }

  get timestamp() {
    return this.__attr(`timestamp`)
  }

  author(
    builder:
      | string
      | UserModelSelector
      | ((selector: UserModelSelector) => UserModelSelector)
      | undefined,
  ) {
    return this.__child(`author`, UserModelSelector, builder)
  }
}

export function selectFromMessage() {
  return new MessageModelSelector()
}

export const messageModelPrimitives = selectFromMessage().body.timestamp

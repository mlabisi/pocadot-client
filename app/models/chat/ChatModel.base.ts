/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "../ModelBase"
import { ListingModel, ListingModelType } from "../listing/ListingModel"
import { ListingModelSelector } from "../listing/ListingModel.base"
import { MessageModel, MessageModelType } from "./MessageModel"
import { MessageModelSelector } from "./MessageModel.base"
import { UserModel, UserModelType } from "../user/UserModel"
import { UserModelSelector } from "../user/UserModel.base"
import { RootStoreType } from "../index"

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  listings: IObservableArray<ListingModelType>
  messages: IObservableArray<MessageModelType>
  participants: IObservableArray<UserModelType>
}

/**
 * ChatBase
 * auto generated base class for the model ChatModel.
 */
export const ChatModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Chat")
    .props({
      __typename: types.optional(types.literal("Chat"), "Chat"),
      id: types.identifier,
      listings: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => ListingModel))),
      ),
      messages: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => MessageModel))),
      ),
      participants: types.union(
        types.undefined,
        types.null,
        types.array(MSTGQLRef(types.late((): any => UserModel))),
      ),
      timestamp: types.union(types.undefined, types.string),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>()
      },
    })),
)

export class ChatModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }

  get timestamp() {
    return this.__attr(`timestamp`)
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

  messages(
    builder:
      | string
      | MessageModelSelector
      | ((selector: MessageModelSelector) => MessageModelSelector)
      | undefined,
  ) {
    return this.__child(`messages`, MessageModelSelector, builder)
  }

  participants(
    builder:
      | string
      | UserModelSelector
      | ((selector: UserModelSelector) => UserModelSelector)
      | undefined,
  ) {
    return this.__child(`participants`, UserModelSelector, builder)
  }
}

export function selectFromChat() {
  return new ChatModelSelector()
}

export const chatModelPrimitives = selectFromChat().timestamp

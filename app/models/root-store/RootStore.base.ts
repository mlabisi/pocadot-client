/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { ChatModel, ChatModelType } from "../chat/ChatModel"
import { chatModelPrimitives, ChatModelSelector } from "../chat/ChatModel.base"
import { CollectionModel, CollectionModelType } from "../collection/CollectionModel"
import {
  collectionModelPrimitives,
  CollectionModelSelector,
} from "../collection/CollectionModel.base"
import { CollectionFeedModel, CollectionFeedModelType } from "../collection/CollectionFeedModel"
import {
  collectionFeedModelPrimitives,
  CollectionFeedModelSelector,
} from "../collection/CollectionFeedModel.base"
import { GroupModel, GroupModelType } from "../talent/group/GroupModel"
import { groupModelPrimitives, GroupModelSelector } from "../talent/group/GroupModel.base"
import { GroupFeedModel, GroupFeedModelType } from "../talent/group/GroupFeedModel"
import {
  groupFeedModelPrimitives,
  GroupFeedModelSelector,
} from "../talent/group/GroupFeedModel.base"
import { IdolModel, IdolModelType } from "../talent/idol/IdolModel"
import { idolModelPrimitives, IdolModelSelector } from "../talent/idol/IdolModel.base"
import { IdolFeedModel, IdolFeedModelType } from "../talent/idol/IdolFeedModel"
import { idolFeedModelPrimitives, IdolFeedModelSelector } from "../talent/idol/IdolFeedModel.base"
import { ListingModel, ListingModelType } from "../listing/ListingModel"
import { listingModelPrimitives, ListingModelSelector } from "../listing/ListingModel.base"
import { ListingFeedModel } from "../listing/ListingFeedModel"
import { MessageModel, MessageModelType } from "../chat/MessageModel"
// import { messageModelPrimitives, MessageModelSelector } from "../chat/MessageModel.base"
import { UserModel, UserModelType } from "../user/UserModel"
import { userModelPrimitives, UserModelSelector } from "../user/UserModel.base"
import { UserFeedModel, UserFeedModelType } from "../user/UserFeedModel"
import { userFeedModelPrimitives, UserFeedModelSelector } from "../user/UserFeedModel.base"

import {
  talentModelPrimitives,
  TalentModelSelector,
  TalentUnion,
} from "../talent/TalentModelSelector"

import { CardCondition } from "../listing/enums/CardConditionEnum"
import { ListingType } from "../listing/enums/ListingTypeEnum"

export type AddCollectionInput = {
  title?: string | null
  description: string
  user: string
  taggedIdols?: string[]
}
export type UpdateCollectionInput = {
  id: string
  title?: string | null
  description?: string | null
  user?: string | null
  taggedIdols?: string[]
}
export type CollectionFilters = {
  ids?: string[]
  fields?: CollectionFilterFields | null
}
export type CollectionFilterFields = {
  title?: string[]
  description?: string | null
  user?: string[]
  taggedGroups?: string[]
  taggedIdols?: string[]
}
export type GroupFilters = {
  ids?: string[]
  fields?: GroupFilterFields | null
}
export type GroupFilterFields = {
  name?: string[]
  favedBy?: string[]
  idols?: string[]
  inListings?: string[]
  wantedByListings?: string[]
}
export type IdolFilters = {
  ids?: string[]
  fields?: IdolFilterFields | null
}
export type IdolFilterFields = {
  stageName?: string[]
  groups?: string[]
  inListings?: string[]
  wantedByListings?: string[]
  inCollections?: string[]
  isSolo?: boolean | null
}
export type AddListingInput = {
  release?: string | null
  description?: string | null
  condition: CardCondition
  startingPrice?: number | null
  country: string
  international: boolean
  listedBy: string
  idols: string[]
  groups?: string[]
  targetIdols?: string[]
  targetMinCondition?: CardCondition | null
  targetGroups?: string[]
  type: ListingType[]
  targetMinStaringPrice?: number | null
}
export type UpdateListingInput = {
  id: string
  release?: string | null
  description?: string | null
  condition?: CardCondition | null
  startingPrice?: number | null
  country?: string | null
  international?: boolean | null
  listedBy?: string | null
  favedBy?: string[]
  idols?: string[]
  groups?: string[]
  targetIdols?: string[]
  targetMinCondition?: CardCondition | null
  targetGroups?: string[]
  type?: ListingType[]
  targetMinStaringPrice?: number | null
}
export type ListingFilters = {
  ids?: string[]
  fields?: ListingFieldFilters | null
}
export type SendMessageInput = {
  authorId: string
  conversationId: string
  message: string
}
export type StartChatInput = {
  fromId: string
  listingId: string
  toId: string
}
export type UniqueChatInput = {
  id: string
}
export type ListingFieldFilters = {
  release?: string[]
  description?: string[]
  condition?: CardCondition | null
  startingPrice?: number | null
  country?: string[]
  international?: boolean | null
  listedBy?: string[]
  favedBy?: string[]
  idols?: string[]
  groups?: string[]
  targetIdols?: string[]
  targetMinCondition?: CardCondition | null
  targetGroups?: string[]
  type?: ListingType | null
}
export type UserPreferencesInput = {
  id: string
  faveGroups?: string[]
  faveIdols?: string[]
}
export type AddUserInput = {
  username: string
  country: string
}
export type UpdateUserInput = {
  id: string
  username?: string | null
  country?: string | null
  listings?: string[]
  collections?: string[]
  faveGroups?: string[]
  faveIdols?: string[]
  faveListings?: string[]
  faveUsers?: string[]
}
export type UserFilters = {
  ids?: string[]
  fields?: UserFilterFields | null
}
export type UserFilterFields = {
  username?: string | null
  country?: string | null
  description?: string | null
  listings?: string[]
  faveGroups?: string[]
  faveIdols?: string[]
  faveListings?: string[]
  faveUsers?: string[]
  collections?: string[]
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  chats: ObservableMap<string, ChatModelType>
  collections: ObservableMap<string, CollectionModelType>
  groups: ObservableMap<string, GroupModelType>
  idols: ObservableMap<string, IdolModelType>
  listings: ObservableMap<string, ListingModelType>
  messages: ObservableMap<string, MessageModelType>
  users: ObservableMap<string, UserModelType>
}

/**
 * Enums for the names of base graphql actions
 */
export enum RootStoreBaseQueries {
  queryCollections = "queryCollections",
  queryCollectionsFeed = "queryCollectionsFeed",
  queryFetchChat = "queryFetchChat",
  queryGroups = "queryGroups",
  queryGroupsFeed = "queryGroupsFeed",
  queryIdols = "queryIdols",
  queryIdolsFeed = "queryIdolsFeed",
  queryListings = "queryListings",
  queryListingsFeed = "queryListingsFeed",
  queryUserSuggestions = "queryUserSuggestions",
  queryPreferencesFeed = "queryPreferencesFeed",
  queryUserPreferences = "queryUserPreferences",
  queryUsers = "queryUsers",
  queryUsersFeed = "queryUsersFeed",
}

export enum RootStoreBaseMutations {
  mutateAddCollection = "mutateAddCollection",
  mutateUpdateCollection = "mutateUpdateCollection",
  mutateDeleteCollections = "mutateDeleteCollections",
  mutateAddListing = "mutateAddListing",
  mutateUpdateListing = "mutateUpdateListing",
  mutateDeleteListings = "mutateDeleteListings",
  mutateUserPreferences = "mutateUserPreferences",
  mutateAddUser = "mutateAddUser",
  mutateDeleteChat = "mutateDeleteChat",
  mutateSendMessage = "mutateSendMessage",
  mutateStartChat = "mutateStartChat",
  mutateUpdateUser = "mutateUpdateUser",
  mutateDeleteUser = "mutateDeleteUser",
}

/**
 * Store, managing, among others, all the objects received through graphQL
 */
export const RootStoreBase = withTypedRefs<Refs>()(
  MSTGQLStore.named("RootStore")
    .extend(
      configureStoreMixin(
        [
          ["Chat", () => ChatModel],
          ["Collection", () => CollectionModel],
          ["CollectionFeed", () => CollectionFeedModel],
          ["Group", () => GroupModel],
          ["GroupFeed", () => GroupFeedModel],
          ["Idol", () => IdolModel],
          ["IdolFeed", () => IdolFeedModel],
          ["Listing", () => ListingModel],
          ["ListingFeed", () => ListingFeedModel],
          ["Message", () => MessageModel],
          ["User", () => UserModel],
          ["UserFeed", () => UserFeedModel],
        ],
        ["Chat", "Collection", "Group", "Idol", "Listing", "Message", "User"],
        "js",
      ),
    )
    .props({
      chats: types.optional(types.map(types.late((): any => ChatModel)), {}),
      collections: types.optional(types.map(types.late((): any => CollectionModel)), {}),
      groups: types.optional(types.map(types.late((): any => GroupModel)), {}),
      idols: types.optional(types.map(types.late((): any => IdolModel)), {}),
      listings: types.optional(types.map(types.late((): any => ListingModel)), {}),
      messages: types.optional(types.map(types.late((): any => MessageModel)), {}),
      users: types.optional(types.map(types.late((): any => UserModel)), {}),
    })
    .actions((self) => ({
      queryCollections(
        variables: { input: CollectionFilters },
        resultSelector:
          | string
          | ((
              qb: CollectionModelSelector,
            ) => CollectionModelSelector) = collectionModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ collections: CollectionModelType[] }>(
          `query collections($input: CollectionFilters!) { collections(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CollectionModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryCollectionsFeed(
        variables: { page: number },
        resultSelector:
          | string
          | ((
              qb: CollectionFeedModelSelector,
            ) => CollectionFeedModelSelector) = collectionFeedModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ collectionsFeed: CollectionFeedModelType }>(
          `query collectionsFeed($page: Int!) { collectionsFeed(page: $page) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CollectionFeedModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryFetchChat(
        variables: { input: UniqueChatInput },
        resultSelector:
          | string
          | ((qb: ChatModelSelector) => ChatModelSelector) = chatModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ fetchChat: ChatModelType }>(
          `query fetchChat($input: UniqueChatInput!) { fetchChat(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ChatModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryGroups(
        variables: { input: GroupFilters },
        resultSelector:
          | string
          | ((qb: GroupModelSelector) => GroupModelSelector) = groupModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ groups: GroupModelType[] }>(
          `query groups($input: GroupFilters!) { groups(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new GroupModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryGroupsFeed(
        variables: { page: number },
        resultSelector:
          | string
          | ((
              qb: GroupFeedModelSelector,
            ) => GroupFeedModelSelector) = groupFeedModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ groupsFeed: GroupFeedModelType }>(
          `query groupsFeed($page: Int!) { groupsFeed(page: $page) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new GroupFeedModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryIdols(
        variables: { input: IdolFilters },
        resultSelector:
          | string
          | ((qb: IdolModelSelector) => IdolModelSelector) = idolModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ idols: IdolModelType[] }>(
          `query idols($input: IdolFilters!) { idols(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new IdolModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryIdolsFeed(
        variables: { page: number },
        resultSelector:
          | string
          | ((
              qb: IdolFeedModelSelector,
            ) => IdolFeedModelSelector) = idolFeedModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ idolsFeed: IdolFeedModelType }>(
          `query idolsFeed($page: Int!) { idolsFeed(page: $page) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new IdolFeedModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryListings(
        variables: { input: ListingFilters },
        resultSelector:
          | string
          | ((
              qb: ListingModelSelector,
            ) => ListingModelSelector) = listingModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ listings: ListingModelType[] }>(
          `query listings($input: ListingFilters!) { listings(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListingModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryListingsFeed(
        variables?: {},
        resultSelector:
          | string
          | ((
              qb: ListingModelSelector,
            ) => ListingModelSelector) = listingModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ listingsFeed: ListingModelType[] }>(
          `query listingsFeed { listingsFeed {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListingModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryUserSuggestions(
        variables: { input: string },
        resultSelector:
          | string
          | ((
              qb: ListingModelSelector,
            ) => ListingModelSelector) = listingModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ userSuggestions: ListingModelType[] }>(
          `query userSuggestions($input: ID!) { userSuggestions(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListingModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryPreferencesFeed(
        variables?: {},
        resultSelector:
          | string
          | ((qb: TalentModelSelector) => TalentModelSelector) = talentModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ preferencesFeed: TalentUnion[] }>(
          `query preferencesFeed { preferencesFeed {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new TalentModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryUserPreferences(
        variables: { input: UserFilters },
        resultSelector:
          | string
          | ((qb: TalentModelSelector) => TalentModelSelector) = talentModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ userPreferences: TalentUnion[] }>(
          `query userPreferences($input: UserFilters!) { userPreferences(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new TalentModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryUsers(
        variables: { input: UserFilters },
        resultSelector:
          | string
          | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ users: UserModelType[] }>(
          `query users($input: UserFilters!) { users(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      queryUsersFeed(
        variables: { page: number },
        resultSelector:
          | string
          | ((
              qb: UserFeedModelSelector,
            ) => UserFeedModelSelector) = userFeedModelPrimitives.toString(),
        options: QueryOptions = {},
      ) {
        return self.query<{ usersFeed: UserFeedModelType }>(
          `query usersFeed($page: Int!) { usersFeed(page: $page) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserFeedModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options,
        )
      },
      mutateAddCollection(
        variables: { input: AddCollectionInput },
        resultSelector:
          | string
          | ((
              qb: CollectionModelSelector,
            ) => CollectionModelSelector) = collectionModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ addCollection: CollectionModelType }>(
          `mutation addCollection($input: AddCollectionInput!) { addCollection(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CollectionModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateUpdateCollection(
        variables: { input: UpdateCollectionInput },
        resultSelector:
          | string
          | ((
              qb: CollectionModelSelector,
            ) => CollectionModelSelector) = collectionModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ updateCollection: CollectionModelType }>(
          `mutation updateCollection($input: UpdateCollectionInput!) { updateCollection(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CollectionModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateDeleteCollections(
        variables: { input: string[] },
        resultSelector:
          | string
          | ((
              qb: CollectionModelSelector,
            ) => CollectionModelSelector) = collectionModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ deleteCollections: CollectionModelType[] }>(
          `mutation deleteCollections($input: [ID!]!) { deleteCollections(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CollectionModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateAddListing(
        variables: { input: AddListingInput },
        resultSelector:
          | string
          | ((
              qb: ListingModelSelector,
            ) => ListingModelSelector) = listingModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ addListing: ListingModelType }>(
          `mutation addListing($input: AddListingInput!) { addListing(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListingModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateUpdateListing(
        variables: { input: UpdateListingInput },
        resultSelector:
          | string
          | ((
              qb: ListingModelSelector,
            ) => ListingModelSelector) = listingModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ updateListing: ListingModelType }>(
          `mutation updateListing($input: UpdateListingInput!) { updateListing(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListingModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateDeleteListings(
        variables: { input: string[] },
        resultSelector:
          | string
          | ((
              qb: ListingModelSelector,
            ) => ListingModelSelector) = listingModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ deleteListings: ListingModelType[] }>(
          `mutation deleteListings($input: [ID!]!) { deleteListings(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListingModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateUserPreferences(
        variables: { input?: UserPreferencesInput | null },
        resultSelector:
          | string
          | ((qb: TalentModelSelector) => TalentModelSelector) = talentModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ userPreferences: TalentUnion[] }>(
          `mutation userPreferences($input: UserPreferencesInput) { userPreferences(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new TalentModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateAddUser(
        variables: { input: AddUserInput },
        resultSelector:
          | string
          | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ addUser: UserModelType }>(
          `mutation addUser($input: AddUserInput!) { addUser(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateUpdateUser(
        variables: { input: UpdateUserInput },
        resultSelector:
          | string
          | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ updateUser: UserModelType }>(
          `mutation updateUser($input: UpdateUserInput!) { updateUser(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateDeleteUser(
        variables: { input: string },
        resultSelector:
          | string
          | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ deleteUser: UserModelType }>(
          `mutation deleteUser($input: ID!) { deleteUser(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new UserModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateSendMessage(
        variables: { input: SendMessageInput },
        resultSelector:
          | string
          | ((qb: ChatModelSelector) => ChatModelSelector) = chatModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ sendMessage: ChatModelType }>(
          `mutation sendMessage($input: SendMessageInput!) { sendMessage(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ChatModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
      mutateStartChat(
        variables: { input: StartChatInput },
        resultSelector:
          | string
          | ((qb: ChatModelSelector) => ChatModelSelector) = chatModelPrimitives.toString(),
        optimisticUpdate?: () => void,
      ) {
        return self.mutate<{ startChat: ChatModelType }>(
          `mutation startChat($input: StartChatInput!) { startChat(input: $input) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ChatModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate,
        )
      },
    })),
)

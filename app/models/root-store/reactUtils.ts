/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { createStoreContext, createUseQueryHook } from "mst-gql"
import * as React from "react"
import { RootStoreType } from "./RootStore"

/**
 * Create a context we can use to
 * - Provide access to our stores from our root component
 * - Consume stores in our screens (or other components, though it's
 *   preferable to just connect screens)
 */
const RootStoreContext = createStoreContext<RootStoreType>(React)

/**
 * The provider our root component will use to expose the root store
 */
export const RootStoreProvider = RootStoreContext.Provider

/**
 * A hook that screens can use to track the state of an ongoing query or mutation, with
 *
 * ```
 * import { observer } from "mobx-react"
 *
 * ... = observer(() => {
 *     const { store, error, loading, data } = useQuery((store) =>
 *         store.queryMessages()
 *       )
 *     ...
 *   })
 * ```
 *
 * or less likely: `const rootStore = useContext(RootStoreContext)`
 */
export const useQuery = createUseQueryHook(RootStoreContext, React)

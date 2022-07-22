import { onSnapshot } from "mobx-state-tree"
import { RootStore, RootStoreType } from "./RootStore"
import { Environment } from "./environment"
import * as storage from "../../utils/storage"
import { createHttpClient } from "mst-gql"

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root"

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  const env = new Environment()
  await env.setup()
  return env
}

/**
 * Setup the root state.
 */
export async function setupRootStore() {
  let rootStore: RootStoreType
  let data: any

  // prepare the environment that will be associated with the RootStore.
  const env = await createEnvironment()
  try {
    // load data from storage
    data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
    rootStore = RootStore.create(data, {
      gqlHttpClient: createHttpClient("http://localhost:4000/")
    })
  } catch (e) {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    rootStore = RootStore.create(undefined, {
      gqlHttpClient: createHttpClient("http://localhost:4000/")
    })

    // but please inform us what happened
    __DEV__ && console.tron.error(e.message, null)
  }

  // reactotron logging
  if (__DEV__) {
    env.reactotron.setRootStore(rootStore, data)
  }

  // track changes & save to storage
  onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  return rootStore
}

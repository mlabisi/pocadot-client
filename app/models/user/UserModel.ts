import { Instance } from "mobx-state-tree"
import { UserModelBase } from "./UserModel.base"

/* The TypeScript type of an instance of UserModel */
export interface UserModelType extends Instance<typeof UserModel> {}

/* A graphql query fragment builders for UserModel */
export { selectFromUser, userModelPrimitives, UserModelSelector } from "./UserModel.base"

/**
 * UserModel
 *
 * Represents a user in the system
 */
export const UserModel = UserModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

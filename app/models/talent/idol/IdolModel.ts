import { Instance } from "mobx-state-tree"
import { IdolModelBase } from "./IdolModel.base"

/* The TypeScript type of an instance of IdolModel */
export interface IdolModelType extends Instance<typeof IdolModel.Type> {}

/* A graphql query fragment builders for IdolModel */
export { selectFromIdol, idolModelPrimitives, IdolModelSelector } from "./IdolModel.base"

/**
 * IdolModel
 *
 * Represents an idol in the system
 */
export const IdolModel = IdolModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))

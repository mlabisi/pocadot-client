/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum CardCondition {
  OKAY="OKAY",
GOOD="GOOD",
GREAT="GREAT",
NEW="NEW"
}

/**
* CardCondition
 *
 * Used to classify photocard conditions
*/
export const CardConditionEnumType = types.enumeration("CardCondition", [
        "OKAY",
  "GOOD",
  "GREAT",
  "NEW",
      ])

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ListingType {
  WTS = "WTS",
  WTT = "WTT",
}

/**
 * ListingType
 *
 * Used to classify listings
 */
export const ListingTypeEnumType = types.enumeration("ListingType", ["WTS", "WTT"])

/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { GroupModelType } from "./group/GroupModel"
import { GroupModelSelector } from "./group/GroupModel.base"
import { IdolModelType } from "./idol/IdolModel"
import { IdolModelSelector } from "./idol/IdolModel.base"

export type TalentUnion = GroupModelType | IdolModelType

export class TalentModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`)
  }
  group(
    builder?: string | GroupModelSelector | ((selector: GroupModelSelector) => GroupModelSelector),
  ) {
    return this.__inlineFragment(`Group`, GroupModelSelector, builder)
  }
  idol(
    builder?: string | IdolModelSelector | ((selector: IdolModelSelector) => IdolModelSelector),
  ) {
    return this.__inlineFragment(`Idol`, IdolModelSelector, builder)
  }
}
export function selectFromTalent() {
  return new TalentModelSelector()
}

export const talentModelPrimitives = selectFromTalent()

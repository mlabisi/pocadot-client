import { GroupModel } from "./group/GroupModel"
import { IdolModel } from "./idol/IdolModel"
import { types } from "mobx-state-tree"

export const TalentUnionModel = types.union(
  {
    dispatcher: (snapshot) => {
      if (snapshot.name) return GroupModel
      return IdolModel
    },
  },
  GroupModel,
  IdolModel,
)

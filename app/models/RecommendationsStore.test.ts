import { RecommendationsStoreModel } from "./RecommendationsStore"

test("can be created", () => {
  const instance = RecommendationsStoreModel.create({})

  expect(instance).toBeTruthy()
})

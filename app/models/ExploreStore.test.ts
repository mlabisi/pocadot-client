import { ExploreStoreModel } from "./ExploreStore"

test("can be created", () => {
  const instance = ExploreStoreModel.create({})

  expect(instance).toBeTruthy()
})

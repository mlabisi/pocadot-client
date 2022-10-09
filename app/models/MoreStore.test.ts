import { MoreStoreModel } from "./MoreStore"

test("can be created", () => {
  const instance = MoreStoreModel.create({})

  expect(instance).toBeTruthy()
})

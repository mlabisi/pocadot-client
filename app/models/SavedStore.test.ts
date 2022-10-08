import { SavedStoreModel } from "./SavedStore"

test("can be created", () => {
  const instance = SavedStoreModel.create({})

  expect(instance).toBeTruthy()
})

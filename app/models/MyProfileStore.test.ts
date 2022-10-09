import { MyProfileStoreModel } from "./MyProfileStore"

test("can be created", () => {
  const instance = MyProfileStoreModel.create({})

  expect(instance).toBeTruthy()
})

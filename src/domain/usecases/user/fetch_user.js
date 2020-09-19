import * as R from "ramda"
import * as Either from "fp-ts/lib/Either"
import * as Option from "fp-ts/lib/Option"

import { Storage } from "../../../core/storage"

// imported from somewhere
const container = { resolve: () => {} }

// fetchUser :: IO (Maybe User)
export const fetchUser = () => {
  const userRepository = container.resolve(UserRepository) // this can be whatever the infra layer wants it to be
  const storage = container.resolve(Storage) // this can be async_storage or realm db

  return (
    storage.getUserToken()
    |> userRepository.refetchUser
    |> Either.fold(
      storage.getUser,
      user => user |> R.tap(storage.saveUser) |> Option.some
    )
  )
}

import * as R from "ramda"
import * as Either from "fp-ts/lib/Either"
import * as Option from "fp-ts/lib/Option"

import { UserRepository } from "../repositories/user_repository"
import { Storage } from "../../core/storage"

// imported from somewhere
const container = { resolve: () => {} }

// fetchUser :: IO (Maybe User)
export const fetchUser = () => {
  const userRepository = container.resolve(UserRepository)
  const storage = container.resolve(Storage)

  return (
    storage.getUserToken()
    |> userRepository.refetchUser
    |> Either.fold(
      storage.getUser(),
      user =>
        user |> R.tap(storage.saveUser) |> Option.some(user)
    )
  )
}

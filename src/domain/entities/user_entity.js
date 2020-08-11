export class User {
  #uuid

  #username

  #email

  #displayName

  constructor(props) {
    Object.assign(this, props)
  }

  toJSON = () => ({
    uuid: this.#uuid,
    username: this.#username,
    email: this.#email,
    displayName: this.#displayName,
  })
}

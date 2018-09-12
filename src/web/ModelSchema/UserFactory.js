class UserFactory {
  constructor () {
    this.schema = {
      username: {
        type: String,
        required: true,
        unique: true
      }
    }
  }
}

export default UserFactory

import mongoose from 'mongoose'

class UserModelFactory {
  constructor () {
    this.UserModel = mongoose.model('UserModel',
      mongoose.Schema({
        username: {
          type: String,
          required: true,
          unique: true
        }
      }))
  }

  findUserByUsername (username) {
    this.UserModel.findOne({ username })
      .then((user) => {
        return user
      })
  }

  findUserByEmail (email) {
    this.UserModel.findOne({ email })
      .then((user) => {
        return user
      })
  }

  deleteUser () {}

  updateUserCredentials () {}
}

export default UserModelFactory

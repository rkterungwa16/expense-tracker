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
      .catch((err) => {
        return new Error(`User does not exist with this username ${err}`)
      })
  }

  findUserByEmail (email) {
    this.UserModel.findOne({ email })
      .then((user) => {
        return user
      })
      .catch((err) => {
        return new Error(`User does not exist with this email ${err}`)
      })
  }

  deleteUser () {}

  updateUserCredentials () {}
}

export default UserModelFactory

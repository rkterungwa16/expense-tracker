import mongoose from 'mongoose'

class UserModelFactory {
  constructor () {
    this.UserModel = mongoose.model('UserModel',
      mongoose.Schema({
        username: {
          type: String,
          required: true,
          unique: true
        },
        password: {
          type: String,
          required: true,
          unique: true
        }
      }))
    this.findUserByUsername = this.findUserByUsername.bind(this)
    this.findUserByEmail = this.findUserByEmail.bind(this)
  }

  findUserByUsername (username) {
    return new Promise((resolve, reject) => {
      this.UserModel.findOne({ username })
        .then((user) => {
          if (user === null) {
            return resolve(user)
          }

          return reject(new Error('User already exists'))
        })
        .catch((err) => {
          return reject(new Error(`Oops Something has occurred ${err}`))
        })
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

  saveUser (userInfo) {
    const UserModel = this.UserModel
    new UserModel(userInfo).save()
      .then((user) => {
        return { status: true, info: user }
      })
      .catch((err) => {
        return { status: false, err: new Error(`User could not be create ${err}`) }
      })
  }

  deleteUser () {}

  updateUserCredentials () {}
}

export default UserModelFactory

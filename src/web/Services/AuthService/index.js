
class AuthService {
  /**
   * @param {Object} userModel
   */
  constructor (userModel) {
    this.userModel = userModel
    this.createUser = this.createUser.bind(this)
  }

  /**
   * find registered user in database
   *
   * @param {String} username username of registered user
   * @param {String} password password of registered user
   * @return {Object} An object signifying registered user
   */
  createUser (username, password) {
    return new Promise((resolve, reject) => {
      this.userModel.findUserByUsername(username)
        .then((user) => {
          return resolve(user)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }

  checkToken () {}
}

export default AuthService


class AuthService {
  /**
   * @param {Object} userModel
   */
  constructor (userModel) {
    this.userModel = userModel
  }

  /**
   * find registered user in database
   *
   * @param {String} username username of registered user
   * @param {String} password password of registered user
   * @return {Object} An object signifying registered user
   */
  login (username, password) {
    this.userModel.findByUsername(username)
      .then((user) => {
        return user
      })
      .catch((err) => err)
  }

  checkToken () {}
}

export default AuthService

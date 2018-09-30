/**
 * Class to handle user authentication
 */
class AuthController {
  /**
   * @param {FunctionConstructor} authService
   */
  constructor (authService) {
    this.authService = authService
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
  }

  /**
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Function} next the next middleware to be executed
   * @return {*} null
   */
  login (req, res, next) {
    this.authService.login(req.body.username, req.body.password)
      .then(user => user)
      .catch(err => err)
  }

  /**
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Function} next the next middleware to be executed
   * @return {*} null
   */
  register (req, res, next) {
    const value = this.authService.createUser(req.body.username, req.body.password)
    value.then((user) => {
      return user
    })
    return value
  }
}

export default AuthController

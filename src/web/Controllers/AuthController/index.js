
class AuthController {
  /**
   * @param {FunctionConstructor} authService
   */
  constructor (authService) {
    this.authService = authService
  }
  /**
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Function} next the next middleware to be executed
   */
  login (req, res, next) {
    this.authService.login(req.body.username, req.body.password)
      .then(user => user)
      .catch(err => err)
  }
}

export default AuthController

const authRoute = (app, authController) => {
  app.post('api/v1/login', authController.login)
}

export default authRoute

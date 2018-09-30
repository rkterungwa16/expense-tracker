const authRoute = (app, authController) => {
  app.post('/api/v1/register', authController.register)
}

export default authRoute

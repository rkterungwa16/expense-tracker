const authRoute = (app, authController) => {
  console.log('posted this', authController)
  app.post('/api/v1/register', authController.register)
}

export default authRoute

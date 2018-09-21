import express from 'express'
// import bodyParser from 'body-parser'
import authRoute from './Routes/AuthRoutes'
import DiContainer from '../web/DiContainer'
import AuthController from '../web/Controllers/AuthController/'
import AuthService from '../web/Services/AuthService/'
import { UserModel } from '../web/Models'
import { config } from '../config'
import db from '../web/Db/mongodb'

const diContainer = new DiContainer()

diContainer.register('dbName', config.database.mongodb.name)
diContainer.register('dbUrl', config.database.mongodb.url)
diContainer.register('tokenSecret', config.tokenSecret)
diContainer.register('userModel', UserModel)
diContainer.factory('db', db)
diContainer.factory('authService', AuthService)
diContainer.factory('authController', AuthController)

const dbConnect = diContainer.get('db')
dbConnect.connect(config.database.mongodb.url)
const authController = diContainer.get('authController')

const app = express()
authRoute(app, authController)

export default app

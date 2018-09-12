import express from 'express'
// import bodyParser from 'body-parser'
import DiContainer from '../web/DiContainer'
import { config } from '../config'
import db from '../web/Db/mongodb'

const diContainer = new DiContainer()

diContainer.register('dbName', config.database.mongodb.name)
diContainer.register('tokenSecret', config.tokenSecret)
diContainer.factory('db', db)

const app = express()

export default app

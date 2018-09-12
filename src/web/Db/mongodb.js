import mongoose from 'mongoose'
import logger from 'winston'
import Db from './db'

class MongoDb extends Db {
  constructor (dbType) {
    super()
    this.dbType = dbType
  }
  connect (url, cb) {
    mongoose.connect(this.dbConfig.url, { safe: true })
      .catch((err) => {
        logger.error(`database connection failure: \n${err.stack}`)
        process.exit(1)
      })
  }
}

export default MongoDb

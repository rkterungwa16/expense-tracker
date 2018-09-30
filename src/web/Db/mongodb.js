import mongoose from 'mongoose'
import logger from 'winston'
import Db from './db'

class MongoDb extends Db {
  constructor (dbUrl) {
    super()
    this.dbUrl = dbUrl
  }
  connect () {
    mongoose.connect(this.dbUrl, { safe: true })
      .then((data) => {
        logger.info(`database connection true: \n${data}`)
      })
      .catch((err) => {
        logger.error(`database connection failure: \n${err.stack}`)
        process.exit(1)
      })
  }
}

export default MongoDb

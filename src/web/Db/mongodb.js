import mongoose from 'mongoose'
import logger from 'winston'

import Db from './db'

/**
 * Class to connect with mongodb database
 */
class MongoDb extends Db {
  /**
   *
   * @param {*} dbUrl
   */
  constructor (dbUrl) {
    super()
    this.dbUrl = dbUrl
  }

  /**
   * @return {*} null
   */
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

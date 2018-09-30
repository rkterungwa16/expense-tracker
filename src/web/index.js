
// import { promisify } from 'es6-promisify'
import logger from 'winston'

import app from './server'

const { config } = require('../config/')

// const serverListen = promisify(app.listen, app)

// serverListen(config.server.port)
//   .then(() => logger.info(`App is listening on port ${config.server.port}`))
//   .catch((err) => {
//     logger.error('Error happened during server start', err)
//     process.exit(1)
//   })
app.listen(config.server.port)
logger.info(`App is listening on port ${config.server.port}`)

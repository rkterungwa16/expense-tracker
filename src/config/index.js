import Dotenv from 'dotenv'

Dotenv.config({ silent: true })

const env = process.env.NODE_ENV

const development = {
  server: {
    port: parseInt(process.env.DEV_APP_PORT) || 3000
  },
  database: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || 'db'
  }
}
const test = {
  server: {
    port: parseInt(process.env.TEST_APP_PORT) || 3000
  },
  database: {
    host: process.env.TEST_DB_HOST || 'localhost',
    port: parseInt(process.env.TEST_DB_PORT) || 27017,
    name: process.env.TEST_DB_NAME || 'test'
  },
  logger: {},
  google: {},
  facebook: {}
}

class ConfigSettings {
  getConfig (env) {
    if (env === 'development') {
      return development
    } else if (env === 'test') {
      return test
    } else {
      throw new Error('There is no configuration for this environment')
    }
  }
}

const configSettings = new ConfigSettings()

export const config = configSettings.getConfig(env)

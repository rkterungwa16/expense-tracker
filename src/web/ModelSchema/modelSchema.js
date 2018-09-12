import mongoose from 'mongoose'

class Models {
  constructor () {
    this.modelFactories = {}
  }

  /**
   * Register all model schema factories into a collection
   *
   * @param {String} modelName name of model schema factory
   * @param {Object} modelFactory model schema factory
   */
  registerModelFactory (modelName, modelFactory) {
    this.modelFactories[modelName] = this.modelFactories
  }

  /**
   * Get a database model from collection of models
   *
   * @param {String} modelName name of database model schema factory
   * @return {object} database model created from model schema factory
   */
  getModel (modelName) {
    const factory = new this.modelFactories[modelName]()
    return mongoose.model(modelName,
      mongoose.Schema(factory.schema))
  }
}
export default Models

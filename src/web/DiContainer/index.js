import argsList from 'args-list'

class DiContainer {
  constructor () {
    this.dependencies = {}
    this.diContainer = {}
    this.factories = {}
  }

  /**
   * Store all module factories for app
   *
   * @param {String} name name of factory
   * @param {Object} factory object of factory
   */
  factory (name, factory) {
    this.factories[name] = factory
  }

  /**
   * Store app factory dependencies that can be used through
   * out the application in one place such as config values
   * logger etc
   *
   * @param {String} name
   * @param {*} dep
   */
  register (name, dep) {
    this.dependencies[name] = dep
  }

  /**
   * Get desired module factory
   *
   * @param {*} name
   */
  get (name) {
    if (!this.dependencies[name]) {
      const factory = this.factories[name]
      this.dependencies[name] = factory &&
        this.diContainer.inject(factory)
      if (!this.dependencies[name]) {
        throw new Error(`Cannot find module ${name}`)
      }
    }

    return this.dependencies[name]
  }

  inject (factory) {
    const args = argsList(factory)
      .map((dependency) => {
        return this.diContainer.get(dependency)
      })
    return factory.apply(null, args)
  }
}

export default DiContainer

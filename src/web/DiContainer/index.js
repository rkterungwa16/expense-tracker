// import argsList from 'args-list'
import { extractArgsList } from 'es6-class-constructor-args-list'
// import { extractArgsList } from './extractArgsList'

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
   * Check if name is a registered dependency or a registered factory
   * If not a dep but a factory and
   *
   * @param {*} name
   */
  get (name) {
    if (!this.dependencies[name]) {
      const factory = this.factories[name]
      this.dependencies[name] = factory &&
        this.inject(factory)
      if (!this.dependencies[name]) {
        throw new Error(`Cannot find module ${name}`)
      }
    }
    return this.dependencies[name]
  }

  /**
   * Get the factory object
   * Collect all argument of factory consisting of dependency names
   * get factory of each retrieved depency
   * Invoke these factories
   *
   * Note: this invokes all arguments of a module
   * It assumes arguments represents factories
   *
   * The aim of this function is to invoke given factory
   * Not that arg of a factory is similar of string key
   * in dependency object
   *
   * The string is required to get the factory hence the use of argList
   * which gets all factory arguments as an array of strings
   *
   * @param {*} factory
   */
  inject (Factory) {
    const args = extractArgsList(Factory)
      .map((dependency) => {
        return this.get(dependency)
      })
    return new Factory(...args)
  }
}
// Problem: cannot read constructor arguments at run time
// Get the parameters of a constructor
export default DiContainer

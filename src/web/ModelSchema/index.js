import UserFactory from './UserFactory'
import ModelSchema from './modelSchema'

const Models = new ModelSchema()

Models.registerModelFactory('User', UserFactory)
const User = Models.getModel('User')
export {
  User
}

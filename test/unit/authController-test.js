import chai from 'chai'
import AuthController from '../../src/web/Controllers/AuthController'
import AuthService from '../mocks/mockAuthService'

const { expect } = chai

const AuthContrl = new AuthController(AuthService)
const req = {
  body: { username: 'terungwa', password: '12345' }
}

const res = {}


describe('Es6 class Arg list', () => {
  it('Should return an array of string', () => {
    console.log('value', AuthContrl.register(req, res).then(user => user))
    // expect(AuthContrl.login(req, res)).to.equal(Promise { { username: 'terungwa', password: '12345' } })
  })
})

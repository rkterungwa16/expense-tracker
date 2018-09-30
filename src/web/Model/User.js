// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'

// class User {
//   constructor (userModel, tokenSecret) {
//     this.userModel = userModel
//     this.tokenSecret = tokenSecret
//   }

//   createUser (userDetails) {
//     const User = this.userModel
//     const passwordHash = this.generatePasswordHash(userDetails.password)
//     userDetails.password = passwordHash.hash
//     User.findOne(userDetails)
//       .then((user) => new Error('User already exists'))
//       .catch((err) => {
//         if (err) {
//           new User(userDetails).save()
//             .then((user) => {
//               return this.createToken(user.id)
//             })
//             .catch((err) => {
//               return new Error(err)
//             })
//         }
//       })
//     // Check if user already exists
//     // If user already exists return error
//     // If user does not exist create user
//     // When creating a user, if there is an error
//   }

//   login (loginDetails) {
//     User.findUserByEmail(loginDetails.email)
//       .then((user) => {
//         return this.createToken(user.id)
//       })
//       .catch((err) => err)
//   }

//   generatePasswordHash (password) {
//     const salt = bcrypt.genSalt(10)
//     const hash = bcrypt.hash(password, salt)
//     return {
//       salt, hash
//     }
//   }

//   findUserById () {}

//   findUserByUsername () {}

//   findeUserByEmail () {}

//   createToken (tokenCredentials) {
//     return jwt.sign({
//       exp: new Date(),
//       id: tokenCredentials
//     }, this.tokenSecret)
//   }
// }

// export default User

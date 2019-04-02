const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { createUser, getUserByEmail } = require('./userAction')

const signup = (data) => {
  return new Promise((resolve, reject) => {
    createUser(data).then(
      (user) => {
        console.log('user created')
        resolve(true)
      }
    ).catch(reject)
  })
}

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    getUserByEmail(email).then((user) => {
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) reject(err)
        console.log(isValid)
        isValid ? resolve(user) : reject(new Error('Password does not match'))
        //  isValid ? resolve(createToken(user)) : reject(new Error('Password does not match'))
      })
    }
    ).catch(reject)
  })
}

module.exports = {
  signup,
  login
}

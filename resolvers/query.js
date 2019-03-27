const mock = require('../mock')
const user = require('../models/user')

const hello = (_, { name }) => `Hello ${name || 'World'}`
const Sum = (_, { a, b }) => (a + b)
const User = (_, { data }) => { return { name: data.name, lastName: data.lastName, email: data.email } }
// Users:(_) => mock
const SearchUsers = (_, { key }) => mock.filter((user) => user.name.includes(key))

const getUsers = (_) => {
  user.find().exec()
    .then((users) => {
      return users
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  hello,
  Sum,
  User,
  SearchUsers,
  getUsers
}

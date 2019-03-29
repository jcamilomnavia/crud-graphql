const mock = require('../mock')
const { userAction, postAction } = require('../actions')

const hello = (_, { name }) => `Hello ${name || 'World'}`

const Sum = (_, { value1, value2 }) => (value1 + value2)

// const User = (_, { data }) => ({ name: data.name, lastName: data.lastName, email: data.email })

// const Users = (_) => mock

const SearchUser = (_, { key }) => mock.filter((user) => user.name.includes(key))

const User = (_, args) => userAction.user(args.id)
const Users = (_) => userAction.users()

const Posts = (_) => postAction.posts()

module.exports = {
  hello,
  Sum,
  User,
  Users,
  SearchUser,
  Posts
}

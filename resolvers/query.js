const mock = require('../mock')
const { userAction, postAction, authAction } = require('../actions')

const hello = (_, { name }) => `Hello ${name || 'World'}`
const Sum = (_, { value1, value2 }) => (value1 + value2)

const SearchUser = (_, { key }) => mock.filter((user) => user.name.includes(key))

const Login = (_, args) => {
  return authAction.login(args.email, args.password)
    .then(user => user)
    .catch(err => err)
}

const User = (_, args) => userAction.user(args.id)
//  const GetUserByEmail = (_, args) => userAction.getUserByEmail(args.email)
const Users = (_) => userAction.users()
const Posts = (_) => postAction.posts()

// const User = (_, { data }) => ({ name: data.name, lastName: data.lastName, email: data.email })
// const Users = (_) => mock

module.exports = {
  hello,
  Sum,
  User,
  Users,
  SearchUser,
  Posts,
  Login
}

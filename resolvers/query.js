const { userAction, postAction, authAction } = require('../actions')

const hello = (_, { name }) => `Hello ${name || 'World'}`
const Sum = (_, { value1, value2 }) => (value1 + value2)

const Login = (_, args) => {
  return authAction.login(args.email, args.password)
    .then(user => user)
    .catch(err => err)
}

const User = (_, args) => userAction.user(args.id)
const Users = (_) => userAction.users()
const Posts = (_) => postAction.posts()

module.exports = {
  hello,
  Sum,
  User,
  Users,
  Posts,
  Login
}

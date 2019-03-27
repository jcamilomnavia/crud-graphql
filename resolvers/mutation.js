const user = require('../models/user')

const createUsers = (_, { data }) => {
  const { name, email, level } = data
  return user.create({ name, email, level })
    .then((users) => {
      return users
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  createUsers
}

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  level: { type: String, required: true },
  password: { type: String, required: true },
  course: [{
    name: String,
    hour: Number
  }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

const SALT_FACTOR = 1

UserSchema.pre('save', function (next) {
  let user = this
  console.log(JSON.stringify(user))
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema)

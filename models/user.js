const mongoose = require('mongoose')

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

module.exports = mongoose.model('User', UserSchema)

const mongoose = require('mongoose')

const DB_URL = process.env.DB_URL
const connectDB = () => mongoose.connect(DB_URL, { useCreateIndex: true, useNewUrlParser: true })

module.exports = { connectDB }

const express = require('express')
const db = require('./services/db')
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT

const app = express()
const dbConnection = db.connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/user', userRoutes)

dbConnection.then(() => {
  console.log('connected to DB')
})

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`)
})

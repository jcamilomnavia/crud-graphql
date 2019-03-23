/**
 * Creando un servidor express y mongoose
 */

// body todos menos get

const express = require('express')
const db = require('./services/db')
const User = require('./models/user')

const PORT = process.env.PORT

const app = express()
const dbConnection = db.connectDB()

dbConnection.then(() => {
  console.log('connected to DB')
})

// app.get('/:name', (req, res) => {
//   let apellido = req.query.apellido ? req.query.apellido : ''
//   res.status(200).send(`Hello ${req.params.name} ${apellido}  ${req.query.cedula}`)
// })

app.get('/cats', (req, res) => {
  const jsonstring = '{"saludo":"hola"}'
  const jsonconverted = JSON.parse(jsonstring)
  res.status(200).send({
    cats: jsonconverted.saludo
  })
})

app.post('/User/Create', (req, res) => {
  User.create({
    name: req.query.name,
    email: req.query.email,
    level: req.query.level
    // req.body
  })
    .then((user) => {
      res.status(200).send(`user created succesfully id: ${user._id}`)
    })
    .catch((err) => {
      res.status(503).send(`Error${err}`)
    })
})

app.get('/User', (req, res) => {
  User.find().exec()
    .then((users) => {
      res.status(200).send(users)
    })
    .catch((err) => {
      res.status(503).send(`${err}`)
    })
})

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`)
})

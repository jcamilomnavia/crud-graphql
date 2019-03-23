const User = require('../models/user')

const express = require('express')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// app.get('/:name', (req, res) => {
//   let apellido = req.query.apellido ? req.query.apellido : ''
//   res.status(200).send(`Hello ${req.params.name} ${apellido}  ${req.query.cedula}`)
// })

// router.get('/cats', (req, res) => {
//   const jsonstring = '{"saludo":"hola"}'
//   const jsonconverted = JSON.parse(jsonstring)
//   res.status(200).send({
//     cats: jsonconverted.saludo
//   })
// })

router.post('/Create', (req, res) => {
  User.create(req.body)
  //   {
  //   // name: req.query.name,
  //   // email: req.query.email,
  //   // level: req.query.level
  //   // req.body
  // }
    .then((user) => {
      res.status(200).send(`user created succesfully id: ${user._id}`)
    })
    .catch((err) => {
      res.status(503).send(`Error${err}`)
    })
})

router.get('/', (req, res) => {
  User.find().exec()
    .then((users) => {
      res.status(200).send(users)
    })
    .catch((err) => {
      res.status(503).send(`${err}`)
    })
})

module.exports = router

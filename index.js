/**
 * Creando un servidor express
 */
const express = require('express')
const app = express()
const PORT = process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/cats', (req, res) => {
  const jsonstring = '{"saludo":"hola"}'
  const jsonconverted = JSON.parse(jsonstring)
  res.status(200).send({
    cats: jsonconverted.saludo
  })
})
app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`)
})

//  import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const express = require('express')
// var graphQLHTTP = require('express-graphql')
const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = importSchema('./schemas.graphql')
const resolvers = require('./resolvers')

const db = require('./services/db')
const PORT = process.env.PORT

const dbConnection = db.connectDB()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

dbConnection.then(() => {
  console.log('connected to DB')
}).catch((err) => {
  console.log(err)
})

const server = new GraphQLServer({ schema })

server.start({ port: PORT }, () => {
  console.log(`Server is running on localhost:${PORT}`)
})
// const server = new GraphQLServer({ schema })
// server.start(() => console.log('Server is running on localhost:4000'))
// var app = express()
// app.use('/', graphQLHTTP({ schema: schema, pretty: true }))

// app.listen(PORT, () => {
//   console.log(`GraphQL Server is now running on localhost:${PORT}`);
// })

// dbConnection.then(() => {
//   console.log('connected to DB')
// })

//  const query = require('./resolvers/query')

// const mock = require('./mock')
// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//     Sum: (_, { a, b }) => (a + b),
//     User: (_, { data }) => {
//       return { name: data.name, lastName: data.lastName, email: data.email }
//     },
//     // Users:(_) => mock
//     SearchUsers: (_, { key }) => mock.filter((user) => user.name.includes(key))
//   }
// }

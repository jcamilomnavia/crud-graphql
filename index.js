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

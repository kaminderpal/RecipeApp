// Imports: GraphQL
const { ApolloServer } = require('apollo-server-express');
// Imports: GraphQL TypeDefs & Resolvers
const typeDefs  = require('./types.js');
const resolvers = require('./resolvers.js');
// GraphQL: Schema
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:5000/graphql`,
    settings: {
      'editor.theme': 'dark'
    }
  }
});
module.exports = apolloServer;
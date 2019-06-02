const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getAllRecipes: [Recipe]
  }
  type Mutation {
    addRecipe(
      name: String!,
      category: String!,
      description: String!,
      instructions: String!,
      createdDate: String,
      likes: Int,
      username: String
    ): Recipe
  }
  type Recipe {
    _id : ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    _id : ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
  }
`;
module.exports = typeDefs;

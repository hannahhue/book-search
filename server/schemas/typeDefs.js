const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    _id: ID!
    authors: [String]!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type Query {
    me: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String]!
      description: String!
      bookId: String!
      image: String!
      link: String!
      title: String!
    ): User
    removeBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;

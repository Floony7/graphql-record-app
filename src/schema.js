/* eslint-disable no-unused-vars */
import { createSchema } from "graphql-yoga";

import Query from "./resolvers/Query.js";
import Mutation from "./resolvers/Mutation.js";
import Post from "./resolvers/Post.js";
import User from "./resolvers/User.js";
import Comment from "./resolvers/Comment.js";

// Type definitions
export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      users(query: String): [User!]!
      posts(query: String): [Post!]
      me: User
      post: Post
      comments: [Comment]!
    }

    type Mutation {
      createUser(data: CreateUserInput!): User!
      deleteUser(id: ID!): User!
      createPost(data: CreatePostInput!): Post!
      deletePost(id: ID!): Post!
      createComment(data: CreateCommentInput!): Comment!
      deleteComment(id: ID!): Comment!
    }

    input CreateUserInput {
      name: String!
      email: String!
      age: Int
    }

    input CreatePostInput {
      title: String!
      body: String!
      published: Boolean!
      author: ID!
    }

    input CreateCommentInput {
      text: String!
      author: ID!
      post: ID!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
      posts: [Post!]!
      comments: [Comment]!
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      author: User!
      published: Boolean!
      comments: [Comment]
    }

    type Comment {
      id: ID!
      text: String!
      author: User!
      post: Post
    }
  `,
  resolvers: {
    Query,
    Mutation,
    Post,
    User,
    Comment,
  },
});

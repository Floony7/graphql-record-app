/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from "uuid";

const Mutation = {
  createUser: (parent, args, { db }, info) => {
    const { name, email, age } = args.data;
    const emailTaken = db.users.some((user) => user.email === email);
    if (emailTaken) {
      throw new Error("Email already used by another user");
    }

    const user = {
      id: uuidv4(),
      ...args.data,
    };

    db.users.push(user);
    return user;
  },
  deleteUser: (parent, args, { db }, info) => {
    const userIndex = db.users.findIndex((user) => user.id === args.id);
    if (userIndex === -1) {
      throw new Error("Userd does not exist");
    }
    const deletedUsers = db.users.splice(userIndex, 1);
    db.posts = db.posts.filter((post) => {
      const match = post.author === args.id;

      if (match) {
        db.comments = db.comments.filter((c) => c.post === post.id);
      }
      return !match;
    });
    db.comments = db.comments.filter((c) => c.author !== args.id);
    return deletedUsers[0];
  },
  createPost: (parent, args, { db }, info) => {
    const { title, body, published, author } = args.data;
    const userExists = db.users.some((user) => user.id === author);

    if (!userExists) {
      throw new Error(`User with id ${author} does not exist`);
    }

    const post = {
      id: uuidv4(),
      ...args.data,
    };

    db.posts.push(post);
    return post;
  },
  deletePost: (parent, args, { db }, info) => {
    const postIndex = db.posts.findIndex((p) => p.id === args.id);
    if (postIndex === -1) {
      throw new Error(`Cannot find post`);
    }
    const deletedPosts = db.posts.splice(postIndex, 1);
    db.comments = db.comments.filter((c) => c.post !== args.id);

    return deletedPosts[0];
  },
  createComment: (parent, args, { db }, info) => {
    const { text, author, post } = args.data;
    const userExists = db.users.some((user) => user.id === author);
    const postExists = db.posts.some((p) => p.id === post && p.published);
    if (!userExists) {
      throw new Error(`User with id ${author} does not exist`);
    }
    if (!postExists) {
      throw new Error(`Post with id ${post} does not exist`);
    }

    const comment = {
      id: uuidv4(),
      ...args.data,
    };

    db.comments.push(comment);
    return comment;
  },
  deleteComment: (parent, args, { db }) => {
    const commentIndex = db.comments.findIndex((c) => c.id === args.id);
    if (commentIndex === -1) {
      throw new Error("Comment could not be found");
    }
    const deletedComments = db.comments.splice(commentIndex, 1);

    return deletedComments.at(0);
  },
};

export default Mutation;

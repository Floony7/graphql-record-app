/* eslint-disable no-unused-vars */
const Query = {
  users: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  me: () => {
    return {
      id: "123098",
      name: "Mike",
      email: "mike@example.com",
      age: 46,
    };
  },
  post: () => {
    return {
      id: "345ac",
      title: "New post on something cool",
      body: "Awesome post content you'll really like.",
      published: true,
    };
  },
  posts: (parent, args, { db }, info) => {
    if (!args.query) {
      return db.posts;
    }
    const query = args.query.toLowerCase();
    return db.posts.filter((post) => {
      const isTitleMatch = post.title.toLowerCase().includes(query);
      const isBodyMatch = post.body.toLowerCase().includes(query);

      return isTitleMatch || isBodyMatch;
    });
  },
  comments: (parent, args, { db }, info) => {
    return db.comments;
  },
};

export default Query;

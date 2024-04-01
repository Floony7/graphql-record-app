const comments = [
  {
    id: "101",
    text: "This is a great observational comment",
    author: "1",
    post: "1",
  },
  { id: "102", text: "This is comment 2, the return", author: "1", post: "2" },
  { id: "103", text: "Comments like this are golden!", author: "2", post: "3" },
  {
    id: "104",
    text: "A comment should be insightful and engaging",
    author: "3",
    post: "2",
  },
];

const users = [
  {
    id: "1",
    name: "Jerry",
    email: "jerry@example.com",
    age: 34,
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com",
    age: 54,
  },
  {
    id: "3",
    name: "Jenna",
    email: "jenna@example.com",
    age: 21,
  },
];

const posts = [
  {
    id: "1",
    title: "Post One",
    body: "Test content",
    author: "1",
    published: true,
  },
  {
    id: "2",
    title: "Post Two",
    body: "This is great content. The best.",
    author: "1",
    published: false,
  },
  {
    id: "3",
    title: "Post Three",
    body: "Absolutely superb content. Perhaps the greatest content ever.",
    author: "3",
    published: true,
  },
];

const db = {
  users,
  posts,
  comments,
};

export default db;

import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { schema } from "./schema.js";
import db from "./db.js";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema,
  context: {
    db,
  },
});

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});

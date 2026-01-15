const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const db = require("./db");

const app = express();

// Sync DB
db.sync().then(() => console.log("Database synced"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log("Server running at http://localhost:4000/graphql")
);

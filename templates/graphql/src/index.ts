import { GraphQLServer } from "graphql-yoga";
import * as fs from "fs";

const resolvers = {
  Query: {
    hello: (_: any, { name }: { name: string }) => `Hello ${name || "World"}`
  }
};

const server = new GraphQLServer({
  typeDefs: fs.readFileSync(`${__dirname}/schema.graphql`, {
    encoding: "UTF-8"
  }),
  resolvers
});

server.start(() => console.log("Server is running on http://localhost:4000"));

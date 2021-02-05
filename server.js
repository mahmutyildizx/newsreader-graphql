import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ...datasources,
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});

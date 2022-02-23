const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
      name: 'Franklin Clinton',
      email: 'franklin@gmail.com',
      projects:[{title:'Site Upgrade - Summer 2022'}]
    },
    {
      name: 'Trevor',
      email: 'trevor@gmail.com',
      projects:[{title:'Site Upgrade - Winter 2022'}]
    },
  ];

const typeDefs = gql`
  type User {
    name: String
    email: String
    projects: [Project]
  }
  type Project {
      title:String
      active:Boolean!
      members: [User]
  }
  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

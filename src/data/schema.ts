import { makeExecutableSchema } from 'graphql-tools';

import userType, { userResolver, usersResolver } from './User/User.gql'

// The GraphQL schema in string form
const typeDefs = `
    type Query {
        user(id: ID!): User
        users: [User]
    }
    ${userType}
`;

// The resolvers
const resolvers = {
    Query: {
        user: userResolver,
        users: usersResolver
    },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
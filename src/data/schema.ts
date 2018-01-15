import { makeExecutableSchema } from 'graphql-tools';

import userType, { userResolver, usersResolver } from './User/User.gql'

// The GraphQL schema in string form
const typeDefs = `
    type Query {
        userById(id: ID!): User
        users: [Users]
        user: [User]
    }
    type Users {
        users:[User]
    }
    type User {
        _id: String!
        name: String
        email: String
    }
`;

// The resolvers
const resolvers = {
    Query: {
        userById: userResolver,
        users: usersResolver
    },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
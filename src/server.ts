import * as restify from 'restify';
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify';

import schema from './data/schema';

const PORT = 3000;

const server = restify.createServer({
    title: 'Apollo Server',
});

const graphQLOptions = { schema: schema };

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post('/graphql', graphqlRestify(graphQLOptions));
server.get('/graphql', graphqlRestify(graphQLOptions));

server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
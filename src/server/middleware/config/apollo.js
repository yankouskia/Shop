'use strict';

import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';

import { graphqlExpress } from 'graphql-server-express';

import schema from '../../graphql-models/schema';
import resolvers from '../../graphql-models/resolvers';
//import Mocks from './apollo/mocks';

export default (app) => {
    app.set('apollo-port', 3080);

    const executableSchema = makeExecutableSchema({
        typeDefs: schema,
        resolvers,
        allowUndefinedInResolve: true,
        printErrors: true
    });

    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }));

    /*app.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql',
    }));*/

    console.log('apollo configured');
}

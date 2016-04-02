'use strict';

import simpleSchema from './simple_schema';
import graphqlHTTP from 'express-graphql';

export default graphqlHTTP({ schema: simpleSchema, pretty: true });
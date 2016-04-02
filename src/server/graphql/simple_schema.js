'use strict';

import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString
} from 'graphql';

let count = 1;

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                resolve: function() {
                    return count;
                }
            }
        }
    })
});

export default schema;
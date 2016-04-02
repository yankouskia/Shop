'use strict';

var graphql = require('graphql');
import _ from 'lodash';

// Import our data set from above
var data = {
    "1": {
        "id": "1",
        "name": "Alex"
    }, 
    "2": {
        "id": "2",
        "name": "Serge"
    }, 
    "3": {
        "id": "3",
        "name": "Andrew"
    }, 
    "4": {
        "id": "4",
        "name": "Stas"
    }, 
}

// Define our user type, with two string fields; `id` and `name`
var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        name: { type: graphql.GraphQLString },
    }
});


// Define our schema, with one top level field, named `user`, that
// takes an `id` argument and returns the User with that ID.
var schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                args: {
                    id: { type: graphql.GraphQLString }
                },
                resolve: function (root, args) {
                    return _.isEmpty(args) ? _.keys(data) : data[args.id];
                }
            }
        }
    })
});

export default schema;
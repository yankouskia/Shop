import {
    graphql,
    GraphQLSchema,
    GraphQLEnumType,
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLInterfaceType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

const DeviceType = new GraphQLInterfaceType({
    name: 'Device',
    fields: {
        mark: { type: GraphQLString },
        model: { type: GraphQLString },
        color: { type: GraphQLString },
        wifi: { type: GraphQLString }
    }
});

const DeviceEnum = new GraphQLEnumType({
    name: 'DeviceType',
    values: {
        COMPUTER: {
            value: 0
        },
        PHONE: {
            value: 1
        },
        PRINT: {
            value: 2
        }
    }
});

const DeviceQueryInput = new GraphQLInputObjectType({
    name: 'DeviceQuery',
    fields: {
        device: { type: new GraphQLNonNull(DeviceEnum) }
    }
});

const ComputerType = new GraphQLObjectType({
    name: 'Computer',
    interfaces: [ DeviceType ],
    fields: {
        isLaptop: { type:  GraphQLBoolean }
    }
});

const PhoneType = new GraphQLObjectType({
    name: 'Phone',
    interfaces: [ DeviceType ],
    fields: {
        gps: { type:  GraphQLBoolean }
    }
});

const PrinterType = new GraphQLObjectType({
    name: 'Printer',
    interfaces: [ DeviceType ],
    fields: {
        printTechnology: { type:  GraphQLString }
    }
});

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            search: {
                type: GraphQLString,
                args: {
                    device: { type: new GraphQLNonNull(DeviceEnum) }
                },
                resolve(root, args) {
                    return "test";
                }
            }
        }
    })
});

const query = `
    {
        search(device: COMPUTER)
    }
`;

export default function test() {
    graphql(Schema, query).then(result => {
        console.log(result);
    }).catch({
        function (fault) {
            console.log(fault);
        }
    });
}

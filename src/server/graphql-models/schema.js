const typeDefinitions = `

interface Device {
    _id: ID
    mark: String
    model: String
    color: String
    price: Int
    memory: Int
    operatingSystem: String
}

type Computer implements Device {
    _id: ID
    mark: String
    model: String
    color: String
    price: Int
    memory: Int
    operatingSystem: String

    isLaptop: Boolean
}

type Phone implements Device {
    _id: ID
    mark: String
    model: String
    color: String
    price: Int
    memory: Int
    operatingSystem: String

    gsp: Boolean
}

type RootQuery {
    computers: [Computer]
    phones: [Phone]
}

schema {
    query: RootQuery
}
`;

export default [typeDefinitions];

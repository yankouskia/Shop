const typeDefinitions = `
type RootQuery {
  search(type: String): String
}

schema {
  query: RootQuery
}
`;

export default [typeDefinitions];

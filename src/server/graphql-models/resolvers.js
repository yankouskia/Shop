export default {
  RootQuery: {
    search(_, req, resp) {
      return req.type;
    }
  }
};

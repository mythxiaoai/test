const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
  } = require('graphql');
const queryObj = new GraphQLObjectType({
  name: 'myFirstQuery',
  description: 'a hello world demo',
  fields: {
      hello: {
          name: 'a hello world query',
          description: 'a hello world demo',
          type: GraphQLString,
          resolve(parentValue, args, request) {
              return 'hello world !';
          }
      }
  }
});
module.exports = new GraphQLSchema({
query: queryObj
});
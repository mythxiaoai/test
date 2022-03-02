var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

//schema  类型定义
//query查询字段
//字段返回
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
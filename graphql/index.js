const {
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

//Require GraphQL queries
const queries = require('./queries');


//Create the GraphQL Schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            queries
        }
    })
});

module.exports = schema;
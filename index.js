const express = require('express');
const graphQLExpress = require('express-graphql');

//Require the GraphQL Schema
const schema = require('./graphql');

//Instance express
let app = express();

app.use('/graphql', graphQLExpress({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
   console.log('Running');
});
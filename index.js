const express = require('express');
const graphQLExpress = require('express-graphql');
const mongoose = require('mongoose');

//Require the GraphQL Schema
const schema = require('./graphql');

let app = express();

app.use('/graphql', graphQLExpress({
    schema: schema,
    graphiql: true
}));

//Create connection to mongodb with mongoose
mongoose.connect("mongodb://localhost:27017/graphql", (error, res) => {
    if (error){
        return res.send(500, { message : 'Error' });
    } else {
        app.listen(4000, () => {
            console.log('Running on port 4000');
        });
    }
});


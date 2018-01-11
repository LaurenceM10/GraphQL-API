const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');


const TaskType = new GraphQLObjectType({
    name: 'Task',
    description: 'This represent a task',
    fields: () => ({
        title: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: GraphQLString}
    })
});


module.exports = TaskType;
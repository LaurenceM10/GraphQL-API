const {
    GraphQLObjectType,
    GraphQLList
} = require('graphql/index');
const {Types} = require('graphql/queries/task/tasks');

//Require the task model
const TaskModel = require('../../../models/task');

//Require the GraphQL Type
const TaskType = require('../../types/task');


const TaskQuery = new GraphQLObjectType({
    type: new GraphQLList(TaskType),
    args: {},
    resolve(root, params) {
        return TaskModel.find({});
    }
});


module.exports = {TaskQuery};
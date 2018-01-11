const mongoose = require('mongoose');


let taskSchema = new  mongoose.Schema({
    title: {
       type: String,
       required: true
    },
    description: {
        type: String
    },
    timeLimit: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('task', taskSchema);
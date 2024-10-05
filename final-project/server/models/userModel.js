const mongose = require('mongoose');

const taskSchema = new mongose.Schema({
    taskName : {
        type : String,
        required : true,
        min : 0,
    },
    date : {
        type : String,
        required : true,
    },
    isFulfiled : {
        type : Boolean,
        required : true,
    }
});

const userSchema = new mongose.Schema({
    name : {
        type : String,
        required : true,
        min: 0,     
    },
    email : {
        type : String,
        required : true,
        unique : true,
        min : 0,
    },
    password : {
        type : String,
        required : true,
        min : 0,
    },
    tasks : {
        type : [],
        required : false,
        default : [taskSchema],
    }
});

module.exports = mongose.model('User', userSchema);
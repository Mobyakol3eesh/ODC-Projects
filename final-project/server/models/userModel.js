const mongose = require('mongoose');

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
        default : [],
    }
});

module.exports = mongose.model('User', userSchema);
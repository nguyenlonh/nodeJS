var mongoose = require('mongoose');
var StoreSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required : [true, 'name can not be empty']
        },
        type :{
            type : String,
            enum : ['action', 'funny']
        },
        price:{
            type : Number,
        },
        des:{
            type: String
        },
        image : String
    }
)

var gameModel = mongoose.model('game', StoreSchema, 'game');

module.exports = gameModel;
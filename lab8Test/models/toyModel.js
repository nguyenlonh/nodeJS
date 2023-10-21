var mongoose = require('mongoose');
var StoreSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required : [true, 'name can not be empty']
        },
        size :{
            type : Number,
            min : [0, 'size can not be negative'],
            max : 200
        },
        color:{
            type : String
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

var toyModel = mongoose.model('store', StoreSchema, 'toy');

module.exports = toyModel;
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true, 'please add a text'],
    },
    phone: {
        type: Number,
        required: [true, 'please add a text'],
    },
    email: {
        type:String,
        required: [true, 'please add a text'],
        unique:true
    },
 }, { timestamps:true
})
module.exports = mongoose.model ('goal',goalSchema )
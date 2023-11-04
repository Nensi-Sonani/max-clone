const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        type: String,
        title: String,
        price: Number,
        description:String,
        category:String,
        color:String,
        image:[]
});

const user = mongoose.model('User', userSchema);
module.exports = user;

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
       userid:String,
       id:String
});

const cartmodels = mongoose.model('Cart', cartSchema);
module.exports = cartmodels;

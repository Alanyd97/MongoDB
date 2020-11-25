const mongoose = require('mongoose');
const {Schema} = mongoose;

const ShoppingCartSchema = new Schema({
    product: {type: Array},
    total:{type:Number, required: true}
});

module.exports =  mongoose.model('ShoppingCart', ShoppingCartSchema);
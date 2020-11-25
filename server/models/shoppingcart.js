const mongoose = require('mongoose');

const {Schema} = mongoose;

const ShoppingCartSchema = new Schema({
    product: {type:[ProductSchema], required: true},
    total:{type:Number, required: true}
});

module.exports =  mongoose.model('ShoppingCart', ShoppingCartSchema);
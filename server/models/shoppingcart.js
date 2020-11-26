const mongoose = require('mongoose');
const {Schema} = mongoose;
const datosRequeridos = new Schema({ 
    id: {type:String},
    stockSolicitado :{type:Number}
});
module.exports = mongoose.model('productoStock', datosRequeridos);
const ShoppingCartSchema = new Schema({
    product: {type:[datosRequeridos], required:true},
    total:{type:Number, required: true}
});

module.exports =  mongoose.model('ShoppingCart', ShoppingCartSchema);
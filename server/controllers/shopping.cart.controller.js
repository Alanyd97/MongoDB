
const shoppingCartController = {};
const ProductModel = require('../models/product');
const Cart = require('../models/shoppingcart');


//get all
shoppingCartController.getHistory = async (req, res) => {
    const cart = await Cart.find();
    if(cart){
       res.json(cart);
    }
    else{
       res.json({"status" : "No encontrado"});
    }
 }
 //get by id
 shoppingCartController.findShoppingCart = async (req, res) =>{
    const cart = await Cart.findById(req.params.id);
    res.json(cart);
 }
 
 
 //Post
 shoppingCartController.createShoppingCart = async (req, res) =>{
    let productRequest = {
        "products": req.body.products,
        "gastoTotal": req.body.gastoTotal
    }
    producRequest.products.forEach(producto => {
        let product = await ProductModel.findById(producto.id);
        if(product){
            if(product.stock >= producto.stockSolicitado){
                //La comprobacion de stock se hace desde el frontend.
                let newStock = product.stock - producto.stockSolicitado;
                ProductModel.findByIdAndUpdate(producto.id, {$set: {stock: newStock}})
            }
        }
    });  
    const cart = new Cart(req.body);
    let respuesta = await cart.save();
    if (respuesta){
        res.json({"status" : "Guardado"});
    }
 }
 
 module.exports = shoppingCartController;
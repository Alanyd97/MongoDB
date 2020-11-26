
const shoppingCartController = {};
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
    const cart = new Cart();
    cart.total = req.body.total;
    req.body.products.forEach(producto => {
        cart.product.push(producto);
    });
    //await cart.save();
    res.json({"status" : "Guardado"});
 }
 
 module.exports = shoppingCartController;

const shoppingCartController = {};
const productController = require ('../controllers/product.controller');
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
    const cart = new Cart(req.body);
    let respuesta = await cart.save();
    if (respuesta){
        res.json({"status" : "Guardado"});
    }
 }
 
 module.exports = shoppingCartController;
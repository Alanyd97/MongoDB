const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shopping.cart.controller');
/**
 * Cuando el usuario accede a la ruta inicial 
 * llama a shoppingCart controller la funcion get shoppingCart
 */
//get all
router.get('/', shoppingCartController.getHistory);
//get by id
router.get('/:id', shoppingCartController.findShoppingCart);
//post
router.post('/', shoppingCartController.createShoppingCart);



module.exports = router;
const express = require('express');
const router = express.Router();
const productController = require ('../controllers/product.controller');
/**
 * Cuando el usuario accede a la ruta inicial 
 * llama a products controller la funcion get products
 */
router.get('/', productController.getProducts);

router.get('/:id', productController.findProduct);

router.post('/', productController.createProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);


module.exports = router;
const productController = {};
const Product = require('../modules/product');

productController.getProducts = async (req, res) => {
   const products = await Product.find();
}



productController.createProduct = function(){

}

productController.findProduct = function(){

}

productController.updateProduct = function(){

}
productController.deleteProduct = function(){

}


module.exports = productController;
const productController = {};
const Product = require('../models/product');

productController.getProducts = async (req, res) => {
   const products = await Product.find();
   res.json(products);
}



productController.createProduct = async (req, res) =>{
   const product = await Product.findById(req.params.id);
   res.json({
      "status" : "Guardado"
   });
}

productController.findProduct = async (req, res) =>{
   const product = await Product.findById(req.params.id);
   res.json(product);

}

productController.updateProduct =async (req, res) =>{
   const {id } = req.params;
   const product = {
      "name" : req.body.name,
      "description": req.body.description,
      "price": req.body.price,
      "stock": req.body.stock
   }
   console.log("asd: " + product.name);
   await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
   res.json({
      "status": "Updated"
   });

}
productController.deleteProduct = async (req, res) =>{
   await Product.findByIdAndRemove(req.params.id);
   res.json({
      "status" : "Deleted"
   });
}


module.exports = productController;
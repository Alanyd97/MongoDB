const productController = {};
const Product = require('../models/product');
const Cart = require('../models/shoppingcart');


//Gets
productController.getProducts = async (req, res) => {
   const products = await Product.find();
   if(products){
      res.json(products);
   }
   else{
      res.json({"status" : "nope"});
   }
}

productController.findProduct = async (req, res) =>{
   const product = await Product.findById(req.params.id);
   res.json(product);

}

//Post
productController.createProduct = async (req, res) =>{
   const product = new Product(req.body);
   await product.save();
   res.json({"status" : "Guardado"});
   
}

//Put
productController.updateProduct =async (req, res) =>{
   const { id } = req.params;
   const product = {
      "name" : req.body.name,
      "description": req.body.description,
      "price": req.body.price,
      "stock": req.body.stock
   }
   try {
      await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
      res.json({
         "status": "Updated"
      });
   } catch (error) {
      res.json({
         "status": error
      });
   }
}
productController.updateStock =async (req, res) =>{
   console.log("llego");
   const cart = new Cart();
    cart.total = req.body.total;
    req.body.products.forEach(producto => {
        cart.product.push(producto);
    });
   cart.product.forEach(async producto => {
      const product = await Product.findById(producto.id);
      if(product.stock >= producto.stokRequerido){
         product.stock = product.stock -  producto.stokRequerido;
         await Product.findByIdAndUpdate(producto.id, {$set: product});
         res.json({
            "status": "Updated"
         });
      }else{
         res.json({
            "status": "No tiene suficiente stock"
         });
      }
   });
   
   
}

//Delete
productController.deleteProduct = async (req, res) =>{
   await Product.findByIdAndRemove(req.params.id);
   res.json({
      "status" : "Deleted"
   });
}


module.exports = productController;
const express = require('express');
const router = express.Router();
const {ProductsModel} = require('../models/productsModel');


router.get('/getproducts', async(req,res)=>{
    let data = await ProductsModel.find({});
    res.json(data);
});


router.post('/addproducts', async (req, res) => {
    try {
        console.log('Request Body:', req.body);  

        const newProduct = new ProductsModel({
            name: req.body.name,
            color: req.body.color,
            category: req.body.category,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
      const deletedProduct = await ProductsModel.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  router.put('/:id/updateColor', async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await ProductsModel.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Toggle color
      product.color = product.color === 'red' ? 'green' : 'red';
      await product.save();
  
      res.json(product);
    } catch (error) {
      console.error('Error updating product color:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


module.exports = router;
const express = require('express');
const router = express.Router();
const {ProductsModel} = require('../models/productsModel');


router.get('/', async(req,res)=>{
    let data = await ProductsModel.find({});
    res.json(data);
});


router.post('/', async (req, res) => {
    try {
        console.log('Request Body:', req.body);  // Log the entire request body

        const newProduct = new ProductsModel({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
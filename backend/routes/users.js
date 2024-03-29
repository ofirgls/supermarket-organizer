const express = require('express');
const router = express.Router();
const {UsersModel} = require('../models/usersModel');


router.get('/', async(req,res)=>{
    let data = await UsersModel.find({});
    res.json(data);
});


router.post('/', async (req, res) => {
    try {
        console.log('Request Body:', req.body);  // Log the entire request body

        const newUser = new UsersModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
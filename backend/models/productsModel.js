const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema ({
    name: String,
    price: Number,
    category:String,
});

const ProductsModel = mongoose.model("products", productsSchema);
exports.ProductsModel = ProductsModel;
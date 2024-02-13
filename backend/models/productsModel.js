const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    category: String,
    color: {
        type: String,
        default: "red"
    }
}, {
    id: true,
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

const ProductsModel = mongoose.model("products", productsSchema);
exports.ProductsModel = ProductsModel;

//aaaaaa

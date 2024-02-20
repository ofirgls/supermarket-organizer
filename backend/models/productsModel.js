const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    category: String,
    status: {
        type: String,
        enum:["bought", "deleted", "added"],
        default: "added"
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


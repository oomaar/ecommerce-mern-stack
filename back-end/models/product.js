const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    description: {
        type: String,
        requried: true
    },
    price: {
        type: Number,
        requried: true
    },
    countInStock: {
        type: Number,
        requried: true
    },
    imageUrl: {
        type: String,
        requried: true
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
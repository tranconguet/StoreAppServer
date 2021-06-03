
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    images: { type: Array, required: false }, 
    description: { type: String, required: true }, 
    price: { type: String, required: true }, 
    type: { type: String, required: true }, 
    rating: { type: Number, required: true },
    love: { type: Boolean, required: true },
})

module.exports = mongoose.model('Product', ProductSchema, 'products');
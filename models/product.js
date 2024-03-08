const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);

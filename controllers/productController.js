const Product = require('../models/product')


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    try {
        const product = await Product.findByIdAndUpdate(id, updatedProduct)
        if (!product) {
            return res.status(404).json({ message: `Can't find product with ID ${id}` })
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ message: `Can't find product with ID ${id}` })
        }
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};

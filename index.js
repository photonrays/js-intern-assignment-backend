require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use(cors())
app.use('/api/v1/products', productRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();

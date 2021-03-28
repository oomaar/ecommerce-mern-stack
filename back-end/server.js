require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

connectDB();

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/front-end/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Api running');
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
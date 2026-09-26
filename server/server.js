// Import Express
const express = require('express');

// Create an Express application
const app = express();

app.use(express.json());

// Define the server port
const PORT = 3000;

const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');

app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/users', usersRouter);


// Start the server
app.listen(PORT);
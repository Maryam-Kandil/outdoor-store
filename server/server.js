// Import Express
const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

// Load route modules to keep each resource's endpoints in a separate file
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');

app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/users', usersRouter);

// Start the server and listen for incoming requests
app.listen(PORT);
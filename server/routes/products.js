const express = require('express');
const productsRouter = express.Router();
const pool = require('../db');

// Get all products
productsRouter.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a product by ID with its category
productsRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await pool.query(
            `SELECT
                products.name AS product_name,
                products.price,
                categories.name AS category_name
             FROM products
             JOIN product_categories
                ON products.id = product_categories.product_id
             JOIN categories
                ON product_categories.category_id = categories.id
             WHERE products.id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Product not found'
            });
        }

        res.json(result.rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

module.exports = productsRouter;
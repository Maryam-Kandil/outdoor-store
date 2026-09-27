const express = require('express');
const categoriesRouter = express.Router();
const pool = require('../db');

// Get all categories
categoriesRouter.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categories');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all products belonging to a category
categoriesRouter.get('/:id/products', async (req, res) => {
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
             WHERE product_categories.category_id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: 'Category not found or has no products'
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

module.exports = categoriesRouter;
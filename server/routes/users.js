const express = require('express');

const usersRouter = express.Router();

const pool = require('../db');

usersRouter.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});


usersRouter.post('/', async (req, res) => {
    const { first_name, last_name, email, phone } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO users
            (first_name, last_name, email, phone)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [first_name, last_name, email, phone]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});


module.exports = usersRouter;
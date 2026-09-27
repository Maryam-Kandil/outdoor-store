// Load environment variables from .env
require('dotenv').config();

// Create a PostgreSQL connection pool
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;
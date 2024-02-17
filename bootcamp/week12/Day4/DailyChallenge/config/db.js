const { Pool } = require('pg');

const pool = new Pool({
    user: 'database',
    host: 'localhost',
    database: 'database',
    password: '12345',
    port: 5432,
});

module.exports = pool;

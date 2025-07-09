// db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'testdb',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

// app.js
const db = require('./db');

async function createUser(name) {
  const result = await db.query('INSERT INTO users(name) VALUES($1) RETURNING *', [name]);
  return result.rows[0];
}

module.exports = { createUser };

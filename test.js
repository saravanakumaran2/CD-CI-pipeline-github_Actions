// test.js
const db = require('./db');
const { createUser } = require('./app');

beforeAll(async () => {
  await db.query(`CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, name VARCHAR(100))`);
});

afterAll(async () => {
  await db.query('DROP TABLE IF EXISTS users');
});

test('create user in DB', async () => {
  const user = await createUser('Visali');
  expect(user.name).toBe('Visali');
});

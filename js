const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://appuser:strongpassword@localhost:5432/restaurantdb',
  pool: { min: 0, max: 10 }
});
module.exports = knex;

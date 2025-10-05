const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',    // replace with your PostgreSQL username
  host: 'localhost',
  database: 'Sports_Scheduler',              // replace with your database name
  password: 'Dharun@1322',// replace with your password
  port: 5432,                        // default PostgreSQL port
});

module.exports = pool;

const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.POSTGRESPWD,
  host: process.env.POSTGRESHOST,
  port: 5432,
  database: "postgres",
});

module.exports = pool;

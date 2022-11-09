const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ProvaKettal",
  host: "db.wfnbrusciikjtbgvlpro.supabase.co",
  port: 5432,
  database: "postgres",
});

module.exports = pool;

const { Pool } = require('pg');
const pool = new Pool({
  user: 'pskwmdia',
  host: 'silly.db.elephantsql.com',
  database: 'pskwmdia',
  password: 'VqC2IE9h3bfjNLH6kSLiqCA_M3lVUzBo',
  port: 5432,
})

//apenas testando a conexão
exports.connection = pool;

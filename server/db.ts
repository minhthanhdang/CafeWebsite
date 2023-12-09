import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ZenCafe',
  password: 'thanh123',
  port: 5432,
});

module.exports = pool;

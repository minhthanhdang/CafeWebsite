"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ZenCafe',
    password: 'thanh123',
    port: 5432,
});
module.exports = pool;

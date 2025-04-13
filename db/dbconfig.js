const {Pool} = require("pg")
require('dotenv').config()


const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:  process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

module.exports = pool;
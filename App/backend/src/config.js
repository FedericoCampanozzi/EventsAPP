require('dotenv').config()

const { URL, PORT, PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env

const { Client } = require('pg')

const pg_client = new Client({
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE
});

pg_client.connect();

module.exports = {
  'URL' : URL,
  'PORT' : PORT
}
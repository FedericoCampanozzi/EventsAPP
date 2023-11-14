'use strict';

let envfile = "";
process.argv.forEach(function (val, index, array) {
  if(index == 2) envfile = val;
});
const dotenv = require('dotenv');
const assert = require('assert');
const { env } = require('process');

//dotenv.config({ path: `./.env.${envfile}` });

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER } = process.env;

const sqlEncrypt = process.env.ENCRYPT === "true";
console.log("this.port=",this.port, ";this.host=",this.host);
//assert(PORT, 'PORT is required');
//assert(HOST, 'HOST is required');

const configuration = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true
    }
  }
}

console.log(configuration,"\n");

module.exports = configuration
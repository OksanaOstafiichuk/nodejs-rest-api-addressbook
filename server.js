const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
});

db.connect((error) => {
  if (!error) {
    console.error('Connection with DB is well done.');
  } else
  {
    console.log('Connection is failed.');
  }
    
 });


module.exports = db;
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
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
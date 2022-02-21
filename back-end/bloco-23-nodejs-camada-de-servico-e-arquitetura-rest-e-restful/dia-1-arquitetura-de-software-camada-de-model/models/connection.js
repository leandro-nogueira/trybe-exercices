const mysql= require('mysql2/promise');
// require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1108',
  database: 'users_crud',
});

module.exports = connection;


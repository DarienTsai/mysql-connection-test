require('dotenv').config();
const mysql = require('mysql');


const connection = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  port: process.env.PORT
};


console.log(connection);


const db = mysql.createConnection(connection);

db.connect();

db.query('SELECT * FROM ' + process.env.TABLE, function(err, rows, fields){
  if (err) throw err;
  console.log('connected');
  console.log( rows );
  console.log( fields );
});

db.end();
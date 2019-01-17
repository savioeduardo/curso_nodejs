var mysql = require('mysql');

var connMySQL = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'savio',
    password: 'saviobd',
    database: 'portal_noticias'
  });
}

module.exports = function(){
  return connMySQL;
}

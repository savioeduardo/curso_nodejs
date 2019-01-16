var mysql = require('mysql');

module.exports = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'savio',
    password: 'saviobd',
    database: 'portal_noticias'
  });
}

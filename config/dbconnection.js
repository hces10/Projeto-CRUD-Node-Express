/*
/     configurações de acesso ao banco de dados
*/
var mysql = require('mysql');
var database = 'dados182n';

// instanciar objeto de acesso ao banco de dados
var client = mysql.createConnection({
    user: 'root',
    password: '',
    host: '127.0.0.1',
    port: 3306
});

client.query('USE ' + database);

module.exports = client;

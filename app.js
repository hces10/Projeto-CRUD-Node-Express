var http = require('http');
var server = require('./config/server.js');

http.createServer(server).listen(server.get('port'), function(){
  console.log('Express estralando na porta. ' + server.get('port'));
});


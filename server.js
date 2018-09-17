var connect  = require('connect');
var static = require('serve-static');
var server = connect();


server.use(  static(__dirname + '/src'));
server.listen(5555);

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/src");

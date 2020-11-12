var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/src/data/images'));
server.listen(3001);
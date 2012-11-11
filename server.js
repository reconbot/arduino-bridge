/**
 *  * Module dependencies.
 *   */

var express = require('express')
  , sio = require('socket.io')
  , http = require('http')

var app = express();

var server = http.createServer(app);
var io = sio.listen(server);


app.get('/message',function(req,res){
  io.sockets.emit('text', req.params.text);
  res.end('OK');
});


server.listen(3000);

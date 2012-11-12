/**
 *  * Module dependencies.
 *   */

var express = require('express')
  , sio = require('socket.io')
  , http = require('http')

var app = express();

var server = http.createServer(app);
var io = sio.listen(server);

var url = 'http://coalition-for-the-li.nko3.jit.su/success';

app.get('/message',function(req,res){
  if(typeof req.query.text == 'string' && req.query.text){
    io.sockets.emit('text', req.query.text);
    res.redirect(url);
  }else{
    res.end('notok');
  }
});


server.listen(3000);

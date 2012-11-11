/**
 *  * Module dependencies.
 *   */

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , sio = require('../../lib/socket.io')

var app = express.createServer();

app.configure(function () {
  app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }))
  app.use(express.static(__dirname + '/public'));

  function compile (str, path) {
    return stylus(str)
      .set('filename', path)
        .use(nib());
  };
});


app.listen(3000, function () {
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});

var io = sio.listen(app)



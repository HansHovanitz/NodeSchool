//Exercise 12
/*
 ## HTTP UPPERCASERER (Exercise 12 of 13)

  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
*/
"use strict";

var portNum = process.argv[2];
var http = require("http");
var map = require("through2-map");

var server = http.createServer(function(req, res) {
	if (req.method == "POST") {
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase()
		})).pipe(res);
	}
	else {
		res.end();
	}
})
server.listen(portNum);

//Given Solution: 
/*
  var http = require('http')
  var map = require('through2-map')

  var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
      return res.end('send me a POST\n')

    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  })

  server.listen(Number(process.argv[2]))
*/
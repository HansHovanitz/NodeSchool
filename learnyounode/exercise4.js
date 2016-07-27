//Exercise 4
//ASYNC I/O

'use strict';

var fs = require("fs");

fs.readFile(process.argv[2], finishedReading)

function finishedReading(error, theData){
	if (error){
		return console.error(error)
	}
	var buffString = theData.toString();
	var count = buffString.split('\n');
	console.log((count.length) - 1);
}


//Given Solution:
/*
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/
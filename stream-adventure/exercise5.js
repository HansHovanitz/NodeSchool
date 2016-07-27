"use strict";



var through = require('through2');
var split = require('split');
var num = 1;


var tr = through(function(buf, _, next) {
		if (num % 2 == 0) {
			this.push(buf.toString().toUpperCase()+ "\n");
		}
		else {
			this.push(buf.toString().toLowerCase()+ "\n");
		}
		num++;
      	next();

	});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);



/*
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)

*/
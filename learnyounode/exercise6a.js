"use strict";

var dir = process.argv[2];
var ext = process.argv[3];

//The .js is optional 
var exercise6b = require ("./exercise6b.js");

exercise6b(dir, ext, function(error, list) {
	if(error) {
		return console.log(error);
	}
	list.forEach(function(file){
		console.log(file);
	})
})
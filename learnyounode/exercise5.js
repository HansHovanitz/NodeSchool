"use strict";

var fs = require("fs");
var path = require("path");
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, cb)

function cb(error, theData){
	if (error){
		return console.log(error);
	}
	for (var i = 0; i < theData.length; i++)
	{
		if (path.extname(theData[i]) == "." + ext){
			console.log(theData[i]);
		}
	}
}

//Given solution:
/*
 var fs = require('fs')
 var path = require('path')

 var folder = process.argv[2]
 var ext = '.' + process.argv[3]

 fs.readdir(folder, function (err, files) {
   if (err) return console.error(err)
   files.forEach(function(file) {
       if (path.extname(file) === ext) {
           console.log(file)
       }
   })
 })
 */



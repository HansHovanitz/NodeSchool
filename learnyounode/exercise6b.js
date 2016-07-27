"use strict";

var fs = require("fs");
var path = require("path");
var newList = [];

module.exports = function(dir, ext, cb){
	fs.readdir(dir, function(error, theData){
		if (error) {
			return cb(error);
		}
		else {
			for (var i = 0; i < theData.length; i++) {
				if (path.extname(theData[i]) == "." + ext){
					newList.push(theData[i]);
				}
			}
			return cb(null, newList);
		}
	})
}


//Given Solution:
/*
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/


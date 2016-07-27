//Exercise 9
/*
This problem is the same as the previous problem (HTTP COLLECT) in that
you need to use http.get(). However, this time you will be provided with
three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs
and print it to the console (stdout). You don't need to print out the
length, just the data as a String; one line per URL. The catch is that you
must print them out in the same order as the URLs are provided to you as
command-line arguments.
*/

"use strict";

var http = require("http");

var urls = [];
var numOfUrlsReturned = 0;
var responses = [];
for (var i = 0; i < (process.argv.length) -2; i++){
	urls[i] = process.argv[i+2];
}

//^ Could also use .slice to be more compact
//var allURL = process.argv.slice(2);

urls.forEach(function(url, index){
	http.get(url, function(response){
		var characters = "";
		response.setEncoding("utf8");
		response.on("data", function(data){
			characters = characters + data;
		});
		response.on("end", function(data){
			numOfUrlsReturned++;
			responses[index] = characters;
			if (numOfUrlsReturned==urls.length){
				responses.forEach(function(a){
					console.log(a);
				});
			}
		});
	});
});


//Given Soltuon:
/*
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/



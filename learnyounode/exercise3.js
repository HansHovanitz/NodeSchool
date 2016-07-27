//Exercise 3
//Print the number of newline character in a given file.

var fs = require("fs");

//Argument is the path to a file (in this case the file is given as a cmdline arg)
var buff = fs.readFileSync(process.argv[2]);

var buffString = buff.toString();

var count = buffString.split('\n');

console.log((count.length) - 1);
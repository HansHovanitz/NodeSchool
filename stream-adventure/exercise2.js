"use strict";

var arg = process.argv[2];
var fs = require("fs");
fs.createReadStream(arg).pipe(process.stdout);
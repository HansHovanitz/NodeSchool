"use strict";

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (var i = 0; i < num; i++){
  	operation();
  }
}

// Do not remove the line below
module.exports = repeat

//Given solution:
/*
function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

module.exports = repeat
*/
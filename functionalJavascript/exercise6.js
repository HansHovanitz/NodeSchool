"use strict";

/*
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
*/

//var arr = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
//var occur = {};


/*
var obj = { };
for (var i = 0, j = arr.length; i < j; i++) {
   console.log(obj[arr[i]] = (obj[arr[i]] || 0) + 1);
}
*/

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords



function countWords(inputWords) {
  var result = {};
  inputWords.reduce(function(prev, current, idx, arry) {
  	if(!result[current]) {
  		result[current] = 1;
  	} else {
  		result[current]++;
  	}
  	return current;
  }, null);
  return result;
}

module.exports = countWords
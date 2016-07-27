"use strict";

/*
Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll
*/
//var numbers = [1,4,9];

function doubleAll(numbers) {
	var doubles = numbers.map(function(num) {
		return num *2;
	})
	return doubles;
}

module.exports = doubleAll; 

/*
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(doubles);



function doubleAll(numbers) {
  var result = []
  numbers.map(function(number) {
  	result.push(number * 2);
  });
  return result
}

module.exports = doubleAll
*/
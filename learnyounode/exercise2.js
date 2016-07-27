//Exercise 2
var total = 0;	

for (var i = 2; i < process.argv.length; i++) {
	total = total + +process.argv[i];
}

console.log(total);
"use strict";

function foo () {
	var bar;
	quux = 5;
	function zip() {
		var quux = 2;
		bar = true;
	}
	return zip;
}


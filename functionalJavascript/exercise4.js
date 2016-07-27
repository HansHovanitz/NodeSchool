

"use strict";

function getShortMessages(messages) {
	var result = [];
	messages.filter(function (msg) {
		if (msg.message.length < 50) {
			result.push(msg.message);
		}
	});
	return result;

}

module.exports = getShortMessages;



//Given solution:
/*
module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}




//OR



function getShortMessages(messages) {
  var filtered = messages.filter(function(msg) {
  	if(msg.message && msg.message.length < 50) {
  		return true;
  	}
  });

  
  return filtered.map(function(msg) {
  	return msg.message;
  })
}

module.exports = getShortMessages
*/
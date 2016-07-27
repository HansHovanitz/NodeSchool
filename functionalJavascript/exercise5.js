

"use strict";

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function (submitEle, index, array){
    	return goodUsers.some(function (goodEle, index, array) {
    		return submitEle.id == goodEle.id;
    	})
    })
  };
}

module.exports = checkUsersValid





/*

function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submit) {
    	return goodUsers.some(function(good) {
    		return good.id === submit.id;
    	})
    })
  };
}

module.exports = checkUsersValid

*/
"use strict";

var goodUsers = [
    {id: 1},
    {id: 2},
    {id: 3},
];

var submittedUsers = [
    { id: 1},
    { id: 3}
];

//console.log(goodUsers[2].id);
//console.log(submittedUsers);



function myTesThree(submittedUsers){
    return submittedUsers.every(function (element, index, array){
        console.log("inside every");
        return goodUsers.some(function (elementTwo, index, array){
            console.log("inside some");
            console.log(element.id == elementTwo.id);
            return element.id == elementTwo.id;
        })

    });

}




console.log(myTesThree(submittedUsers));
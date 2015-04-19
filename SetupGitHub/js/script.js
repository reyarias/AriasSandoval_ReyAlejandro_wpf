/*
Rey Arias
Test Js File
Date :) (Just copied form the video)

alert("Testing 1, 2, 3");
*/
console.log("Testing the console.log");

var name = prompt("Want to know how much it will cost you to cut your hair? \n Type your name!");
var HairCosts = prompt(name+", How much does the cut of hair cost?\n Please type a number only");
var PeopleCuthair = prompt(name+", How many people are gonna get their hair cut? \n Please type a number only");
var CostPerPerson = HairCosts * parseInt(PeopleCuthair);
alert(name+", It would cost $"+CostPerPerson+" If "+PeopleCuthair+" person(s) cut their hair.");
console.log(name+", It would cost $"+CostPerPerson+" If "+PeopleCuthair+" person(s) cut their hair.");

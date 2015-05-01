/**
 * Created by reyarias1 on 4/28/15.
 * Rey Alejandro Arias Sandoval
 04/16/15
 Conditionals Assignment, Week 3.
 */
//Asks the user for their name.
var UsersName = prompt("Hello, want to know how manu calories you have taken in?\nWhat's your name?");
//Makes sure the user didn't leave blank and lets the user input something again
while (UsersName==="") {
    UsersName = prompt("You forgot to put something. Please don't leave it blankc.\n What's your name?");
}
//Asks the user for their gender
var UsersGender = prompt("Are you a male or female?");
//Makes sure the user didn't leave the prompt blank.
while(UsersGender==""){
    UsersGender = prompt(UsersName+", you left it blank! Please tell us your gender.\n Are you Male or Female?");
}
//The average daily intake of calories based on gender
var DailMaleCal = 2500;
var DailFemaleCal = 2000;
//Asks the user for the number of calories in their food.
var CaloriesToday = prompt("How many calories does the food you ate have?");
//Makes sure the user didn't leave blank and lets the user input something again
while(CaloriesToday==="" ){
    CaloriesToday = prompt("Oops! You forgot to input a number! Please don't leave it blank.\n How many calories does the food contain?");
}
//Asks the user for the total foods consumed with the same amount of calories
var FoodsEaten = prompt("How many time have you eaten the food with the same number of calories?");
//Makes sure the user didn't leave blank and lets the user input something again
while(FoodsEaten==="") {
    CaloriesToday = prompt("Oops! You forgot to input a number! Please don't leave it blank.\n How many foods have you consumed with the same number of calories?");
}
//Created a function that does the math of total calories consumed
var UsersCalories = function(CalInFood, TimeFoodEaten){
    var totalCal = CalInFood * TimeFoodEaten;
    return totalCal;
};
//does the same as above but with more variables if the user wants to add more calories
function usersCal(FoodCal1,FoodTotl,FoodCal2,FoodTotl1,FoodCal3,TotalFoods){
    var CalInotherFoods = (FoodCal1 * FoodTotl) + (FoodCal2 * FoodTotl1) + (FoodCal3 * TotalFoods);
    return CalInotherFoods;
}

//asks the user if they want to add more calories
var MoreFoods = prompt("Do you have more foods that have different calories?(3 more)\nIf you do, Please type yes or no.");
while(MoreFoods==""){
    Morefoods = prompt(UsersName+" You left it blank! Please say yes or no if you have more foods you want to add.")
}
if(MoreFoods=="yes"||MoreFoods=="Yes") {
    //asks the user for the number of calories the food has
    var MorefoodsTot = prompt("Now please type the number of calories the food has.");
    //Makes sure the user didn't leave blank and lets the user input something again
    while(MorefoodsTot==""){
        Morefoods = prompt(UsersName+" You left it blank! Please say the number of calories the food has.");
    }
    //Asks the user for the amount of foods eaten that contain the same amount of calories
    var MoreFoods1 = prompt("Please type the number of foods you ate that have the same amount of calories.\n(Please don't leave it blank.)");
    //Makes sure the user didn't leave blank and lets the user input something again
    while(MoreFoods1==""){
        Morefoods = prompt(UsersName+" You left it blank! Please say the number of foods you ate that have the same amount of calories.");
    }
    //asks the user for the number of calories the food has
    var MorefoodsTot2 = prompt("Now please type how many calories the food has.");
    //Makes sure the user didn't leave blank and lets the user input something again
    while(MorefoodsTot2==""){
        Morefoods = prompt(UsersName+" You left it blank! Please say the amount of calories that food has.");
    }
    //Asks the user for the amount of foods eaten that contain the same amount of calories
    var MoreFoods2 = prompt("Please type the number of foods you ate that have the same amount of calories.\n(Please don't leave it blank.)");
    //Makes sure the user didn't leave blank and lets the user input something again
    while(MoreFoods2==""){
        Morefoods = prompt(UsersName+" You left it blank! Please say the number of foods you ate that have the same amount of calories.");
    }
    //asks the user for the number of calories the food has
    var MorefoodsTot3 = prompt("Now please type how many calories the food has.");
    //Makes sure the user didn't leave blank and lets the user input something again
    while(MorefoodsTot3==""){
        Morefoods = prompt(UsersName+" You left it blank! Please say the number of calories the food has.");
    }
    //Asks the user for the amount of foods eaten that contain the same amount of calories
    var MoreFoods3 = prompt("Please type the number of foods you ate that have the same amount of calories.\n(Please don't leave it blank.)");
    //Makes sure the user didn't leave blank and lets the user input something again
    while(MoreFoods3==""){
        Morefoods = prompt(UsersName+" You left it blank! Please say the number of foods you ate that have the same amount of calories.");
    }
    //Puts the function in a variable to be shorter in length
    var TheUsersCalcCalor = usersCal(MorefoodsTot,MoreFoods1,MorefoodsTot2,MoreFoods2,MorefoodsTot3,MoreFoods3) + (CaloriesToday * FoodsEaten);
    //lets the user know the total calories consumed
    alert(UsersName+", you have consumed "+TheUsersCalcCalor+" calories in total");
    console.log(UsersName+" has consumed "+TheUsersCalcCalor+" calories in total.");

    //checks to see if the user is a male
    if(UsersGender=="male"||UsersGender=="Male"){
        //informs the user the average intake of calories of males
        alert("The average male needs to consume atleast 2500 calories each day.");
        if(DailMaleCal<TheUsersCalcCalor){
            var overConsCal = TheUsersCalcCalor - DailMaleCal;
            alert("You consumed "+overConsCal+" more calories than the average male. No offense "+UsersName+", but you need to exercise.");
        }else if(DailMaleCal>TheUsersCalcCalor){
            var needMoreCal = DailMaleCal - TheUsersCalcCalor;
            alert("You need to eat more "+needMoreCal+" calories!");
        }
        //checks to see if the user is a female
    }else if(UsersGender=="female"||UsersGender=="Female"){
        alert("The average female needs to consume atleast 2000 calories each day.");
        if(DailfemaleCal<TheUsersCalcCalor){
            var OverFemConsCal = TheUsersCalcCalor - DailfemaleCal;
            alert("You consumed "+OverFemConsCal+" more calories than the average male. No offense "+UsersName+", but you need to exercise.");
        }else if(DailfemaleCal>TheUsersCalcCalor){
            var NeedMoreCal1 = DailfemaleCal - TheUsersCalcCalor;
            alert("You need to eat more "+NeedMoreCal1+" calories!");
        }
    }
}else if(MoreFoods=="no"||MoreFoods=="No") {
    var ShorterFunName = UsersCalories(CaloriesToday, FoodsEaten);
    alert("You consumed a total of " + ShorterFunName + " calories from the food.");
    console.log("You have a total of " + ShorterFunName + " calories in the the total food consumed.");
    if(UsersGender=="male"||UsersGender=="Male"){
        alert("The average male needs to consume atleast 2500 calories each day.");
        if(DailMaleCal<ShorterFunName){
            var OverConsCal = ShorterFunName - DailMaleCal;
            alert("You consumed "+OverConsCal+" more calories than the average male. No offense "+UsersName+", but you need to exercise.");
        }else if(DailMaleCal>ShorterFunName){
            var NeedMoreCal = DailMaleCal - ShorterFunName;
            alert("You need to eat "+NeedMoreCal+" more calories!");
        }
    }else if(UsersGender=="female"||UsersGender=="Female"){
        alert("The average female needs to consume atleast 2000 calories each day.");
        if(DailFemaleCal<ShorterFunName){
            var OverFemConsCal = ShorterFunName - DailFemaleCal;
            alert("You consumed "+OverFemConsCal+" more calories than the average female. No offense "+UsersName+", but you need to exercise.");
        }else if(DailFemaleCal>ShorterFunName){
            var NeedMoreCal1 = DailFemaleCal - ShorterFunName;
            alert("You need to eat "+NeedMoreCal1+" more calories!");
        }
    }

}

/*
I said i'm male, had eaten 4 foods that contain 600 calories which said i had consumed 2400, do not have more foods
 that I would want to add, and calories and need 100 calories more to get the daily average calories for males.
 */


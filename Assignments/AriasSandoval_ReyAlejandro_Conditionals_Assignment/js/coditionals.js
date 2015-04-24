/**
 * Created by reyarias1 on 4/20/15.
 */
/*
 Rey Alejandro Arias Sandoval
 04/16/15
 Conditionals assignment, week 3.
 var arr = [1,2,3,4,5,6]
 var arrTotal = 0;

 for(var j=0; j<arr.length;j++){
 arrTotal +=arr[j];
 }


 */

//Ask if they would like to know how much time is left before the warranty expires
var WouldYou = prompt("Would you like to know how long before your warranty expires? (Yes or No)");
if(WouldYou===""){
    WouldYou = prompt("I think you pressed enter in accident, You didn't say yes or no!\n Please don't leave it blank this time.");
}
//We ask for the persons full name
var FirstName = prompt("What is your name?");
var LastName = prompt("What is your last name?");
console.log("This person full name is: "+FirstName+" "+LastName+".");
alert("Welcome, "+FirstName+" "+LastName+"!");
var PurchDate;
//Leap years
var leapYears = [2008,2012,2016,2020,2024,2028,2032];
//days in each month
var JanThroughDec = [31,28,31,30,31,30,31,31,30,31,30,31];
var TotalDaysInYear = 0;
for(var i=0; i<JanThroughDec.length; i++){
    TotalDaysInYear += JanThroughDec[i];
}
//days in each month if it was a leap year
var LeapYearDaysInMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
//adds all days in the month
var TotalDaysInLeapYear = 0;
for(var j=0; j<LeapYearDaysInMonth.length; j++){
    TotalDaysInLeapYear += LeapYearDaysInMonth[j];
}

if(WouldYou ==="no" || WouldYou ==="No"){
    alert("Have a nice day then, "+FirstName+".");
    console.log(FirstName+" doesn't want to know how much time he/she has left on their warranty.");
} else if(WouldYou==="yes" || WouldYou==="Yes") {
    // ask the current date
    var CurrentYear = prompt("What year is it now?");
    var CurrentDay = prompt("What day is it now?\n(for example: \"06\", for the 6th of a month.)");
    var CurrentMonth = prompt("What month is it now?\n(for example: \"06\", for June.)");
    var CurrentDaysInYear;
    CurrentDaysInYear = (CurrentYear == leapYears[0] || CurrentYear == leapYears[1] || CurrentYear == leapYears[2] || CurrentYear == leapYears[3] || CurrentYear == leapYears[4] || CurrentYear == leapYears[5] || CurrentYear == leapYears[6]) ? 366 : 365;

    //Ask if the person remembers the date the item was purchased
    PurchDate = prompt(FirstName + ", do you remember the exact day, month, and year you purchased it?\n(Just type \"Yes\" or \"No\")");

    if (PurchDate === "yes" || PurchDate === "Yes") {
        //ask the person how long was the warranty when they purchase it
        var WarrantyYear = prompt("How long was the warranty for in years?\n(Like if you bought and item with a year of warranty)");
        //ask the date in which the item was purchased
        var PurchYear = prompt("mr(s)." + LastName + ", What year did you purchase it?");
        var PurchMonth = prompt("What month did you purchase it?\n(for example: \"06\", for June.)");
        var PurchDay = prompt("What day did you pruchase it?\n(for example: \"06\", for the 6th of a month.)");
        var yearsLeftInWarranty = WarrantyYear - (CurrentYear - PurchYear);//finds out how many years are left
        //if the expiration date passed, it will tell the user. If not it will say how many years are left
        if (WarrantyYear < CurrentYear - PurchYear) {
            alert(FirstName + ", sorry but your warranty expired already.");
            console.log("mr(s)." + LastName + " warranty expired already.");
        } else if (WarrantyYear > CurrentYear - PurchYear) {
            console.log("there are " + yearsLeftInWarranty + " years left in the warranty of " + FirstName + "s product.");
        }
        if (PurchYear == CurrentYear) {
            yearsLeftInWarranty = 0;
        }
        var daysInRegYear;
        var daysInYearPurch;
        daysInRegYear = (CurrentYear == leapYears[0] || CurrentYear == leapYears[1] || CurrentYear == leapYears[2] || CurrentYear == leapYears[3] || CurrentYear == leapYears[4] || CurrentYear == leapYears[5] || CurrentYear == leapYears[6]) ? 366 : 365;
        daysInYearPurch = (PurchYear == leapYears[0] || PurchYear == leapYears[1] || PurchYear == leapYears[2] || PurchYear == leapYears[3] || PurchYear == leapYears[4] || PurchYear == leapYears[5] || PurchYear == leapYears[6]) ? 366 : 365;
        var daysleftinwarranty = daysInRegYear - daysInYearPurch - CurrentDay;//Finds out how many days are left
        //makes sure the days left is not a negative number
        if (daysleftinwarranty < 0) {
            if (PurchDay > CurrentDay) {
                daysleftinwarranty = PurchDay - CurrentDay;
            } else {
                daysleftinwarranty = CurrentDay - PurchDay;
            }
        }
        var MonthsLeft;
        if (CurrentYear > PurchYear) {

        }
        alert("There are " + daysleftinwarranty + " days left in the warranty");
        console.log("There are " + daysleftinwarranty + " days left in " + FirstName + "s product until the warranty expires.");
        //subtracts 12 months in a year to the months that have already passed if the year of warranty is 1 and same month and year
        if (yearsLeftInWarranty == 1 && CurrentMonth == PurchMonth && PurchYear == CurrentYear) {

            if (PurchMonth == "01" && CurrentMonth == "01") {
                MonthsLeft = 12;
            } else if (PurchMonth == "02" && CurrentMonth == "02") {
                MonthsLeft = 11;
            } else if (PurchMonth == "03" && CurrentMonth == "03") {
                MonthsLeft = 10;
            } else if (PurchMonth == "04" && CurrentMonth == "04") {
                MonthsLeft = 9;
            } else if (PurchMonth == "05" && CurrentMonth == "05") {
                MonthsLeft = 8;
            } else if (PurchMonth == "06" && CurrentMonth == "06") {
                MonthsLeft = 7;
            } else if (PurchMonth == "07" && CurrentMonth == "07") {
                MonthsLeft = 6;
            } else if (PurchMonth == "8" && CurrentMonth == "08") {
                MonthsLeft = 5;
            } else if (PurchMonth == "09" && CurrentMonth == "09") {
                MonthsLeft = 4;
            } else if (PurchMonth == "10" && CurrentMonth == "10") {
                MonthsLeft = 3;
            } else if (PurchMonth == "11" && CurrentMonth == "11") {
                MonthsLeft = 2;
            } else if (PurchMonth == "12" && CurrentMonth == "12") {
                MonthsLeft = 1;
            } else if (yearsLeftInWarranty == 1) {
                //subtracts and adds the months to get the total months left
                MonthsLeft = PurchMonth - CurrentMonth + parseInt(CurrentMonth);
            }
            else {
                console.log("There was a problem. Unkown reason?");
            }
        }
        else {
            alert(FirstName + ", you did not input a valid month nunber.");
            console.log("There was an error with the user input of the month purchased.");
        }

        alert("So you have " + daysleftinwarranty + " days, " + MonthsLeft + " months, and " + yearsLeftInWarranty + " years left in the warranty.");
        console.log("So you have " + daysleftinwarranty + " days, " + MonthsLeft + " months, and " + yearsLeftInWarranty + " years left in the warranty.");


    } else if (PurchDate === "no" || PurchDate === "No") {
        var RememMonth = prompt("Do you remember the month?(if you do, type it in. \nfor example: \"06\", for June. If not say \"no\"");
        //if the person can't remember the month, then just the year is not helpful
        if (RememMonth === "no" || RememMonth === "No") {
            alert("I'm sorry " + FirstName + " but I can't help you if you don't remember at least the month.");
            console.log("I can't help " + FirstName + " (s)he can't remember things needed to calculate warranty time left");
        } else if (RememMonth === "01" || RememMonth === "02" || RememMonth === "03" || RememMonth === "04" || RememMonth === "05" || RememMonth === "06" || RememMonth === "07" || RememMonth === "08" || RememMonth === "09" || RememMonth === "10" || RememMonth === "11" || RememMonth === "12") {
            var RememYear = prompt("What year did you purchase it?"); //aks the user what year they purchased the item
            //ask the person how long was the warranty when they purchase it
            var WarrantyLeft = prompt("How long was the warranty for in years?\n(Like if you bought and item with a year of warranty)");
            var FinallyYearsLeft;
            var FinallyMonthsLeft;
            if (RememYear < CurrentYear && WarrantyLeft > 1) {
                FinallyYearsLeft = CurrentYear - RememYear;//gets the years left in the warranty

            } else if (WarrantyLeft == 1 && RememYear == CurrentYear) {
                FinallyYearsLeft = 0; //makes 0 years left in the warranty if the year of warranty is one year and it's in the same year
            } else if(WarrantyLeft< CurrentYear - RememYear){
                var YearExpired = CurrentYear - RememYear;
                alert("Sorry "+FirstName+", but your Warranty expired "+YearExpired+" year(s) ago.");
                console.log(FirstName+"s warranty expired "+YearExpired+" year(s) ago.");
            }
            console.log(FirstName + " has " + FinallyYearsLeft + " years left in their warranty.");
            //sets the months left accordingly if it's the same month the item was purchased
            if (RememMonth == "01" && CurrentMonth == "01") {
                FinallyMonthsLeft = 12;
            } else if (RememMonth == "02" && CurrentMonth == "02") {
                FinallyMonthsLeft = 11;
            } else if (RememMonth == "03" && CurrentMonth == "03") {
                FinallyMonthsLeft = 10;
            } else if (RememMonth == "04" && CurrentMonth == "04") {
                FinallyMonthsLeft = 9;
            } else if (RememMonth == "05" && CurrentMonth == "05") {
                FinallyMonthsLeft = 8;
            } else if (RememMonth == "06" && CurrentMonth == "06") {
                FinallyMonthsLeft = 7;
            } else if (RememMonth == "07" && CurrentMonth == "07") {
                FinallyMonthsLeft = 6;
            } else if (RememMonth == "8" && CurrentMonth == "08") {
                FinallyMonthsLeft = 5;
            } else if (RememMonth == "09" && CurrentMonth == "09") {
                FinallyMonthsLeft = 4;
            } else if (RememMonth == "10" && CurrentMonth == "10") {
                FinallyMonthsLeft = 3;
            } else if (RememMonth == "11" && CurrentMonth == "11") {
                FinallyMonthsLeft = 2;
            } else if (RememMonth == "12" && CurrentMonth == "12") {
                FinallyMonthsLeft = 1;
            } else {
                console.log("The month it was purchased, is not the same as the current month.");
            }
            //sets the months left if it's the same year
            if (FinallyYearsLeft == 0) {
                FinallyMonthsLeft = 12 - RememMonth;
                //adds the month they are on to the equation
                if (RememMonth == "02") {
                    FinallyMonthsLeft = FinallyMonthsLeft+1;
                } else if (RememMonth == "03") {
                    FinallyMonthsLeft = FinallyMonthsLeft+2;
                } else if (RememMonth == "04") {
                    FinallyMonthsLeft = FinallyMonthsLeft + 3;
                } else if (RememMonth == "05") {
                    FinallyMonthsLeft = FinallyMonthsLeft + 4;
                } else if (RememMonth == "06") {
                    FinallyMonthsLeft =  FinallyMonthsLeft + 5;
                } else if (RememMonth == "07") {
                    FinallyMonthsLeft = FinallyMonthsLeft + 6;
                } else if (RememMonth == "8") {
                    FinallyMonthsLeft = FinallyMonthsLeft + 7;
                } else if (RememMonth == "09") {
                    FinallyMonthsLeft = FinallyMonthsLeft + 8;
                } else if (RememMonth == "10") {
                    FinallyMonthsLeft = FinallyMonthsLeft + 9;
                } else if (RememMonth == "11") {
                    FinallyMonthsLeft =  FinallyMonthsLeft + 10;
                } else if (RememMonth == "12") {
                    FinallyMonthsLeft = FinallyMonthsLeft + 11;
                }

            } else if (FinallyYearsLeft > 1) {
                var totalmonthsinyears = FinallyYearsLeft * 12;//gets the total months in the warranty years the item has
                var obsoluteMonthsLeft = totalmonthsinyears - CurrentMonth;

            }


        } else {
            alert("Sorry mr(s)." + LastName + " I couldn't understand what you typed");
            console.log(FirstName + " didn't type something understandable.");
        }
        if(FinallyMonthsLeft==undefined){
            //checks if "FinallyMonthsLeft" has value assigned to it
            alert("There are " + obsoluteMonthsLeft + " months, and " + FinallyYearsLeft + " years left in the warranty. Counting the month you are in.");
            console.log("The item purchased has " + obsoluteMonthsLeft + " months, and " + FinallyYearsLeft + " years left in the warranty. Counting the month "+FirstName+" is in.");
        }else if(obsoluteMonthsLeft==undefined){
            //checks if "obsoluteMonthsLeft" has value assigned to it, if not it uses FinallyMonthsLefts to let the user know how many months are left
            alert("There are " + FinallyMonthsLeft + " months, and " + FinallyYearsLeft + " years left in the warranty. Counting the month you are in.");
            console.log("The product purchased has " + FinallyMonthsLeft + " months, and " + FinallyYearsLeft + " years left in the warranty. Counting the month "+FirstName+" is in.");
        }
    }

    else {
        alert("I didn't quite get what you said, " + FirstName + ". \nWhen I asked you if you wanted to know about your warranty.");
        console.log(FirstName + " didn't type something understandable.");
    }
}
/*
I said the current day was 2014, month 12 day 30. The warranty is 1 year. The year purchased was year 2014, day 01,
month 02 and it gave me 29 days, 11 months, and 0 years left in my warranty.

For the second part, I did the same as above. and it gave me 11 months, and 0 years are left in the warranty.
 */

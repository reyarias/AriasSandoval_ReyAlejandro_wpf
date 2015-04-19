/**
 * Created by reyarias1 on 4/15/15.
 */
    /*
    Rey Alejandro Arias Sandoval
    04/16/15
    Expressions assignment, week 2.
     */
//Asks the user their name and welcome them
var name = prompt("Want to know how much you make a month or a year? Type your name!");
alert("Welcome "+name+"!");

//Find out their salary each day
var salary = prompt("How much do you get paid an hour?\n(Please type the number, no letters.)");
var WorkHours = prompt("How many hours do you work each day? \n (Please type the number, no letters.)");
var DayEarnings =  salary * WorkHours;
console.log(name+" makes $"+DayEarnings+ " each day.");

//Find out how much they make each week
var DaysWork = prompt("How many days do you work each week?\n(Type only a number please)");
var WeekEarnings =  DaysWork * parseInt(DayEarnings);
console.log(name+" makes $"+WeekEarnings+" each week");

//We find out how much they make a month and tells the user
var WeeksInMonth = prompt(name+", how many weeks does the month have?");
var MonthEarnings = WeekEarnings * parseInt(WeeksInMonth);
var array = [DayEarnings, WeekEarnings, MonthEarnings];//Puts the Day, Week, and month earnings in an array
console.log(name+" makes $"+array[2]+" each month!");
alert(name+", you make $"+array[2]+" each month!");

//Asks the use if they want to know how much they make a year
var YearlySalQ = prompt(name+", do you want to know how much you make a year? (Yes or No)");
var yearlyEarn = parseInt(array[2]) * 12;//gets the yearly earnings ready if said yes
//give the user their yearly earnings
if(YearlySalQ==="Yes"){
    alert(name+", you make $"+yearlyEarn+" each year!");
    console.log(name+" makes $"+yearlyEarn+" each year!");
}  else if(YearlySalQ==="yes"){
    alert(name+", you make $"+yearlyEarn+" each year!");
    console.log(name+" makes $"+yearlyEarn+" each year!");
} else if(YearlySalQ==="No"){
    alert("Have a nice day/night/evening "+name+"!");
    console.log(name+" did not want to know his yearly earnings.");
}else if(YearlySalQ==="no"){
    alert("Have a nice day/night/evening "+name+"!");
    console.log(name+" did not want to know his yearly earnings.");
} else{
    alert(name+", i'm sorry but I couldn't understand what your response was.")
    console.log(name+"s input was not valid or recognized. He/she has to refresh the page.")
}

/*
I said I get paid $15 an hour, work 7 hours a day, 7 days a week, on a month that has 4 weeks. Which in return, I make
$2,940 a month and $35,280 a year.
 */
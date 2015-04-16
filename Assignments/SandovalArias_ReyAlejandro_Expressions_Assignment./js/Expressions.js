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
var EarningsDay =  salary * WorkHours;
console.log(name+" makes $"+EarningsDay+ " each day.");

//Find out how much they make each week
var DaysWork = prompt("How many days do you work each week?\n(Type only a number please)");
var WeekEarnings =  DaysWork * parseInt(EarningsDay);
console.log(name+" makes $"+WeekEarnings+" each week");

//We find out how much they make a month
var WeeksInMonth = prompt(name+", how many weeks does the month have?");
var MonthEarnings = WeekEarnings * parseInt(WeeksInMonth);
console.log(name+" makes $"+MonthEarnings+" each month!");
alert(name+", you make $"+MonthEarnings+" each month!");

//Asks the use if they want to know how much they make a year
var YearlySalQ = prompt(name+", do you want to know how much you make a year? (Yes or No)");
var yearlyEarn = parseInt(MonthEarnings) * 12;//gets the yearly earnings ready in case if said yes
//give the user their yearly earnings if said yes
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
    console.log(name+"s input was not valid or recognised. He/she has to start all over again.")
}

/*
I said I get paid $15 an hour, work 7 hours a day, 7 days a week, on a month that has 4 weeks. Which in return, I make
$2,940 a month.
 */
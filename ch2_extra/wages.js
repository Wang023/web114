//gana sehaki 03/25/2025
console.log("script running..."); //to make sure our console log is running

// get the hourly wage
const hourlyWage = prompt("what is your hourly wage ?");
if (hourlyWage <= 0 || (isNaN(hourlyWage))){
    alert("Please enter a positive value...");
}

//confirm the hourly wage
const confirmWage = confirm(`is ${hourlyWage}  your hourly wage ?`);
        if (confirmWage){
            alert("You clicked Yes!")
        } else {
            alert("You clicked No!");
        }

// get the number of hours worked
const hoursWorked = prompt("How many hours did you work this week ?");
if (hourlyWage < 0){
    alert("Please enter a positive value or null...");
}

//confirm the nuber of hours worked 
const confirmHours = confirm(`is ${hoursWorked}  the number of hours you worked ?`);
        if (confirmHours){
            alert("You clicked Yes!")
        } else {
            alert("You clicked No!");
        }
        
// Convert inputs to numbers
const wage = Number(hourlyWage);
const hours = Number(hoursWorked);

// Calculate the weekly earnings
const weeklyEarnings = wage * hours;

// Calculate the tax (20%)
const taxAmount = weeklyEarnings * 0.20;

// Subtract taxes from the weekly earnings
const finalWeeklyEarnings = weeklyEarnings - taxAmount;

// Display the final weekly earnings with 2 decimal places
console.log(`Your weekly earnings after tax is: $${finalWeeklyEarnings.toFixed(2)}`);
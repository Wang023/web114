//gana sehaki 03/27/2025
//script running
console.log("script running...")

//variables
let income;
let rent;
let groceries;
let utilities;

//get the numbers from user
income = parseFloat(prompt("What is your monthly income ?"));
rent = parseFloat(prompt("What is your monthly rent payment ?"));
groceries = parseFloat(prompt("What is your monthly grocery spending ?"));
utilities = parseFloat(prompt("What is your monthly utility spending ?"));

//output the total expenses
let totalExpenses = rent + groceries + utilities;
console.log(`Your total expenses is $${totalExpenses.toFixed(2)}`);

//output the remaining money
let remainingMoney = income - totalExpenses;
console.log(`Your remaining money is $${remainingMoney.toFixed(2)}`);

//percentages counting
let rentPercentage = (rent/income)*100;
let groceriesPercentage = (groceries/income)*100;

rentPercentage = Math.max(rentPercentage, 0);
groceriesPercentage = Math.max(groceriesPercentage, 0);

//outputs
console.log(`The percentage spent on rent is %${rentPercentage.toFixed(2)}`);
console.log(`The percentage spent on groceries is %${groceriesPercentage.toFixed(2)}`);
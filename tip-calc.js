const readlineSync = require("readline-sync");

//Get the total amount of the bill. Wait for user's response.
const totalAmount = readlineSync.questionFloat("What's the total amount of the bill: $");

//get the % of the tip from the user

const tipPercentage = readlineSync.questionFloat("What % would you like to tip?");

//Get the party size from the user

const totalPartySize = readlineSync.questionInt("How many people are in your party?");

// Repeat all of those things back to the user.
console.log(`The total amount of your bill is $${totalAmount.toFixed(2)}`);
console.log(`The total party size is $${totalPartySize}`);
console.log(`The total party size is ${tipPercentage}%`);
//The bill tip is the (totalAmount * tipPercentage divided by 100)
let percentage = tipPercentage / 100
let totalAmountToTip = totalAmount * percentage;
//Total bill is the bill plus the tip
let billWithTip = totalAmount + totalAmountToTip;
//Get the total amount of the bill divided by the # of people
let totalPerPerson = billWithTip / totalPartySize;
//Calculate how much everyone is paying
console.log(totalAmountToTip.toFixed(2));
console.log(billWithTip.toFixed(2));
console.log(totalPerPerson.toFixed(2));


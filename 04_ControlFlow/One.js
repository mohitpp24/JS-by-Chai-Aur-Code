// //Operators that are used to check conditions: 
// //>, <, >=, <=, ==, !=, ===(strict checking), !==(strict checking)

// //If: used to check only one conditon
// //Condition must only be true, then only the code inside {} will be executed
// if (2 <= 3) {   // if this condition is true, then this block of code will be executed
//    console.log("Executed"); 
// }

// //If-else: used to check more than one codition
// //If condition is true then If block of code will be executed and if condition is false else block of code will be executed
// if (2>=3) { //conditon is false so else block of code will be executed
//     console.log("Executed if block"); 
// } else {
//     console.log("Executed else block"); 
// }

// const score = 200;
// if (score>100) {
//     let power = "fly"; //not a global scope, can be accessed only inside this if block
//     //Note: if insted of let if we use var then it can be accessed outside this if block bcz var has bydefault global scope
//     console.log(`User power: ${power}`);
// }
// console.log(`User cannot ${power}`); //Error power is not defined

// //if-elseif
// const balance = 1000;
// if (balance < 500) {
//     console.log("Balance is less than 500");
    
// } else if (balance < 750) {
//     console.log("Balance is less than 750");

// } else if (balance < 900) {
//     console.log("Balance is less than 900");
    
// } else {
//     console.log("Balance is less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
let score = "33abc";  //try setting value to null, undefined, string and boolean values
//for null score value in number will be = 0
//for undefined score value in number will be = NaN(Not a Number)
//for string score value in number will be = NaN
//for boolean if true score value in number will be = 1 & if false score value in number will be = 0

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//-----------------------------------------------------

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1 => true 0 => false and numbers other than zero(eg.: 30) => true
//"" => false,  "Mohit" => true

//-----------------------------------------------------

let someNum = 33;

let stringSomeNum = String(someNum);
console.log(stringSomeNum);
console.log(typeof stringSomeNum);




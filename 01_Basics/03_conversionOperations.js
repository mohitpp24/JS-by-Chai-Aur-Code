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

//********************OPERATIONS************************

let value = 3;
let negativeValue = - value;
console.log(negativeValue);

// console.log(2+2); //addition
// console.log(2-2); //subtraction
// console.log(2*2); //multiplication
// console.log(2**2);//power
// console.log(2/2); //division
// console.log(2%2); //module-gives remainder


let str1 = "Hello";
let str2 = " Mohit";
let str3 = str1 + str2;
// console.log(str3); // Hello Mohit

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log(1 + "2" + 2); //122

// console.log( (1 + 2) * 3 / 3); //use brackets

// console.log(true); //true
// console.log(+true); //1
// console.log(true+); //error
// console.log(+""); //0

let gameCounter = 100;
gameCounter++; //read mdn docs regarding precidence operators - increment and decrement
console.log(gameCounter);











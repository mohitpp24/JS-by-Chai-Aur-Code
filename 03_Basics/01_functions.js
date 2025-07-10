// //function: koi same kaam agr aapko baar baar repeat krne ki jarurat pade tb aap function ka estemal krskte ho
// //Function definition : function ko likhne ka tarika
// //function sayMyName(param){}
// function sayMyName(){
//     console.log("M");
//     console.log("o");
//     console.log("h");
//     console.log("i");
//     console.log("t");
// }

// //function reference: 
// sayMyName; //eska koi output nhi aayega
// //function execution:
// sayMyName();

// //add two numbers function:
// function addTwoNum (num1, num2){  //parameters
//     console.log(num1 + num2);
// }
// addTwoNum(3, 4); //7 //argument

// const result = addTwoNum(5, 5); //10
// console.log("Result: ", result); //but eska result undefined aayega, kyuki function result ko return nhi kr rha

// //Return concept and adding three numbers 
// function addThreeNum (num1, num2, num3){  //parameters
//     let add = num1 + num2 + num3;
//     console.log("Mohit"); //return k pehle hai toh print hojayega
//     return add; //ending of fun hota hai
//     console.log("Patil");// unrechable code kyuki return k baad koi bhi code likho vo function run nhi krta
// }
// addThreeNum(3, 4, 5); //sirf Mohit print hoga bcz, ye parameters ko humne kisi variable me store krke print nhi kiya hai
// const addition = addThreeNum(5, 5, 5); 
// console.log("Addition is: ", addition); //abb undefined nhi aayega bcz function 3 no ka sum ko return kr rha hai

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage("Mohit")); //Mohit just logged in
// console.log(loginUserMessage("")); //just logged in
// console.log(loginUserMessage()); //undefined just logged in


//rest operator ...:  allows the collection of an indefinite number of elements into a single array.
function calCartPrice1(...num){
    return num
}
console.log(calCartPrice1(200, 300, 400)); //[200, 300, 400]

function calCartPrice2(val1, val2, ...num){
    return num
}
console.log(calCartPrice2(2000, 3000, 4000, 5000, 6000)); //[4000, 5000, 6000]
//val1 k andr 2000 chala jayega and val2 me 3000(humne en dono ko return nhi kiya esliye out sirf ...num wala he aaya hai)


//Object ko function me kaise pass kiya jata hai:
//creating an obj
const user = {
    username: "hitesh",
    id: 199
}
//passing object into function
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and id is ${anyobj.id}`);
}
//handleObject(user); //Username is hitesh and id is 199
handleObject({
    username: "Mohit",
    id: 299
}); //Username is Mohit and id is 299


//Array ko function me kaise pass kiya jata hai:
//creating an array
const myArr = [10, 20, 30, 40];

//passing array into function
function return2ndValue(getArray){
    return getArray[1] //accessing 2nd element of an array using indexing
}
//console.log(return2ndValue(myArr)); //20
console.log(return2ndValue([10, 20, 30, 40])); //20

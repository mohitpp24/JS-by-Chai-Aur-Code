// //Scopes in js 
// //{} curly braces ko he scope kehte hai 
// let a = 100;
// const b = 200;
// var c =300;  //Global scope

// if(true){   //Block scope 
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log("Inner: ", a);
// }
// console.log(a); //a is not defined
// console.log(b); //b is not defined
// console.log(c); //30



// function one(){
//     const username = "Mohit";

//     function two(){
//         const website = "Youtube";
//         console.log(username);
//     }

//     // console.log(website);
 
//     //two();

// }
// //one();



// if (true) {
//     const username = "Mohit";
//     if (username === "Mohit") {
//         const website = " Youtube";
//         console.log(username + website);
//     }
//     //console.log(website);   //error
// }
// //console.log(username);   //error


//Different ways to declare a function
//without variable:
addOne(5); ////ye return toh hua hai but print nhi hoga
console.log(addOne(6)); //7

function addOne(num){
    return num + 1;
}


//with variable
//addTwo(8); //reference error: cannot access before initialization
//console.log(addTwo(9)); //reference error: cannot access before initialization
const addTwo = function(num){
    return num + 2;
}
//addTwo(8);  //ye return toh hua hai but print nhi hoga
console.log(addTwo(9)); //11
// //for-in:

// //for-in loop for object:
// const myObj = {
//     game1: "NFS",
//     game2: "GTA Vice City",
//     game3: "IGI",
//     game4: "Counter Strike"
// }
// for (const key in myObj) {
//     console.log(key);
//     console.log(myObj[key]);
//     console.log(key, ":", myObj[key]);
// }


// //for-in loop for array:
// const myArr = ["NFS", "GTA", "IGI", "PUBG"];
// for (const key in myArr) {
//     // console.log(key);
//     // console.log(myArr[key]);
//     console.log(key, ":", myArr[key]);
// }


// //for-in loop for map():
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


//imp Note: Map objects are not iterable with for...in in JavaScript.
//for...in only works on enumerable properties of plain objects, not on Map instances.
//A Map object is not a plain object — it's a special data structure. 

// //Array specific loops:
// //for of loop:

// //for of loop on array:
// const myArray = [1, 2, 3, 4, 5];
// for (const element of myArray) {
//     console.log(element);
// }


// //for of loop on string:
// const username = "Mohit Patil";
// for (const letters of username) {
//     if (letters == " ") {
//         continue;           //name k bich wala space htt jayega
//     }
//     console.log(letters);
// }



// //Map(): object ki trh hota hai, bss esme aap unique values dete ho, koi value repeat nhi krte. Aur values jis order me aapne enter ki hai usi order me print hogi
// const map = new Map();  //creating map
// map.set("IN", "India"); //setting key and values using set("key", "value");
// map.set("USA", "United States of America"); //setting key and values using set("key", "value");
// map.set("FR", "France"); //setting key and values using set("key", "value");
// map.set("IN", "India"); //ye value already humne daal di hai toh wps ye print nhi hogi bcz Map() me unique values he deni hoti.

//console.log(map);

// for (const key of map) { //Not proper syntax to follow, just for knowledge
//     console.log(key);  //pura map array k format me print hoga
// }

// for (const [key, value] of map) { //must follow syntax
//     //onsole.log(key, ":-", value); //printing key and value both
//     //console.log(key); //printing only keys
//     console.log(value); //printing only values
// }


//for of loop on object:  
const myObj = {
    game1: "NFS",
    game2: "GTA Vice City",
    game3: "IGI",
    game4: "Counter Strike"
}
// for (const key of myObj) { 
//     console.log(key);   //myObj is not iterable
// } 

for (const [key, value] of myObj) {
    console.log(key, ":-", value);  //myObj is not iterable
}

// Imp Note: for-of for...of does not work directly on objects, but it does work on arrays.
//Plain objects {} are not iterable unless you convert them into an array form (e.g. with Object.keys, Object.entries).

// for...of works with iterables like:
// Arrays

// Strings

// Maps

// Sets

// TypedArrays

// DOM collections (like NodeList)
//Arrays- A collection of similar or multiple data types elements stored in a single variable


// const myArray = [0, 1, 2, 3, 4, 5]; //Simple array- square brackets k andr hote hai elements //Numeric array
// //Note : Jaruri nahi ki same type k elements ho, ek single array alg data type wale elements ko bhi contain kr skta hai
// //Eg:
// const myArray1 = [0, 1, true, "Mohit"];

// //In javascript arrays are resizable and can contain mix of different data types
// //JS arrays are not associative arrays means array elements cannot be accessed using arbitrary strings as indexes
// //array indexing starts with zero
// //Eg:
// console.log(myArray1[true]); //undefined - you cannot access the elements like this
// console.log(myArray1["Mohit"]); //undefined - you cannot access the elements like this
// console.log(myArray1[3]); //Mohit - to access the elements you have to define the index no (1st element index is = 0)

// //Javascript array-copy operations create shallow copies rather than deep copies 
// //Shallow copies: A shallow copies of an object is a copy whose properties share the same reference point- mtlb agr aap kisi copy wale array me changes krte ho to original array me bhi change hota hai
// //Deep copies: A deep copies of an object is a copy whose properties do not share the same reference point- mtlb agr aap kisi copy wale array me changes krte ho to original array me change nhi hota hai

// const myHeroes = ["Krrish", "Shaktiman", "Raone", "Nagraj"]; //String array

 const myArr = new Array(0, 1, 2, 3, 4, 5); //You can define array usind this syntax
// console.log(myArr[0]);

// //Array methods:
// //Push()- adds element at the last of an array, we have to define which element we have to add
// myArr.push(6);
// myArr.push("Mohit");
// console.log(myArr); 

// //Pop()- removes the last element from an array, we don't have to define the element which is at last
// myArr.pop();
// console.log(myArr);

// //unshift()- adds element at the start of an array, we have to define which element to add (Note: new element start me add hone k karn baki elemnents aage shift ho jate hai, jo ki bade data k liye acha nhi hai)
// myArr.unshift(9);
// console.log(myArr);

// //shift()- removes the starting element from an array, we don't have to define the element which is at start
// myArr.shift();
// console.log(myArr);

// //Kuch jo methods hoti hai vo questionair methods hote hai mtlb unka ans true ya fir false he hoga
// //Eg:
// //includes()- checks weather the element is present in the array or not
// console.log(myArr.includes(9));

// //indexof()- tells the index value of the element (parenthesis k and element likhte hai, index nahi)
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(19)); //jb ye element present nhi hota toh output -1 milta hai


// //join()- converts all the elements of an array to string
// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

//slice() and splice():

console.log("A ", myArr);
//slice(): ending index wala element include nhi hota
const myn1 = myArr.slice(1, 3); //Starting index = 1, ending index = 3
console.log(myn1); //[1, 2] 
console.log("B", myArr); //slice original array me koi change nhi krta

//splice(): ending index wala element include hota hai
const myn2 = myArr.splice(1, 3); //Starting index = 1, ending index = 3
console.log(myn2); //[ 1, 2, 3 ]
console.log("C", myArr); //splice original array se utna part hata deta hai, means original array me change krdeta hai

//Interview pov: slice original array me koi change nhi krta, splice original array me change krta hai- jo bhi defined index hai utna part array se hata deta hai






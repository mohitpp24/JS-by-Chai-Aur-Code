// //note: filter() me jo condition di hogi vo agr true hogi toh he print hoga, agr false hogi toh print nhi hoga, map() me esa nhi hota

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const myNums = myNumbers.map( (elements) => { return elements > 4});
// console.log(myNums);
// // output of the above code: [
// //   false, false, false,
// //   false, true,  true,
// //   true,  true,  true,
// //   true
// // ]


//chaining: aap ek he code p multiple methods apply kr skte hai
//jo bhi first method values return krega vo second method ko pass hogi, and second ki fir third ko
//Eg:
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chainedNums = myNumbers.map( (elements) => elements * 10).map((elements) => elements + 1).filter((elements) => elements >= 50);
console.log(chainedNums); //[ 51, 61, 71, 81, 91, 101 ]

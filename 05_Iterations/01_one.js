//for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`${element} is a good number`);  //pehle ye print hoga
//     }
//     console.log(element); //fir ye
// }
// //console.log(element); //Scope Error: Element is not defined outside the scope 


// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == i) {
//         console.log(`${element} is a good number`);  //pehle ye print hoga
//     }
//     console.log(element); //fir ye
// }
// //console.log(element); //Scope Error: Element is not defined outside the scope 


// //Loop inside loop:
// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value ${i}`);
//     console.log(`${i} table`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop value is ${j} and Outer loop value is ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


//for loop with array
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}


//break and continue

//break: jaise he break ko apply krte hai, aap loop se bahar aajaoge
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//    console.log(`Value of i is ${index}`);
    
// }


//continue: loop ko 1 baar skip krke loop continue hota hai
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
    
}

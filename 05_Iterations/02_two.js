// //While loop: same as for loop bs syntax difference hai and condition check hone k baad kaam hoga

// let index = 0;
// while (index <= 10) {
//     console.log(`Index value is: ${index}`);
//     index = index + 2;  //index ko 2 se increament kiya hai
// }


// //while loop with array:
// let index = 0;
// let myArray = ["Flash", "Batman", "Superman"];
// while (index < myArray.length) {
//     console.log(`${myArray[index]}`);
//     index++;
// }


//Do-while loop: yaha pehle kaam hoga fir condition check ki jayegi
let score = 1; 
//try changing score to 11 and check the output
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10); //codition: to run the code jbtk score less than equal 10 hai, agr score 10 se jyada hai toh bs ek baar score ki value print ho jayegi
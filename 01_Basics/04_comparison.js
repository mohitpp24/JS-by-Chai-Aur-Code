console.log(2>1); //true
console.log(1<2); //true
console.log(2>=2); //true
console.log(2<=2); //true
console.log(2!=1); //true
console.log(2==2); //true

console.log("2">1); //true---javascript automatically converts the data type whereas typescript only allows comparison betn similar data types

console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true
//The reason is that equality check == and comparisons > < >= <= works differently
//Comparison converts null to a number, treating it as 0
//That's why (3) null>=0 is true & (2) null==0 is false

console.log(undefined > 0); //false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false

console.log("2"==2); //true  
console.log("2"===2);//false
//=== (Strict Equality Operator): It returns true only if both the value and the type of the operands are identical.


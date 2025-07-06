/*JavaScript is a dynamically typed language.
This means that:
Type checking occurs at runtime:
The data type of a variable is determined when the code is executed, not during a separate compilation phase.
Variable types are flexible:
A variable can hold values of different data types throughout the program's execution. For example, a variable initially assigned a number can later be reassigned a string without causing a type error.

Eg:
let myVariable = 10; // myVariable is a number
console.log(typeof myVariable); // Output: "number"

myVariable = "Hello"; // myVariable is now a string
console.log(typeof myVariable); // Output: "string"

In contrast, statically typed languages (like Java or C++) require variables to have their data types explicitly declared and checked at compile time, and these types cannot change during runtime.
*/

//Data ko memory me store and access kiss tarah se kiya jata hai-toh eska categorisation 2 types me kiya gya hai=>Primitive and Non-Primitive

//Primitive DataType: Ye call by value hote hai mtlb jb bhi aap esko kahise kahi copy krte hai toh enke original data ka reference aapko nhi diya jata, balki uska copy aapko diya jata hai and fir aap uss copy me jo bhi value change krna chaho krskte ho(original me change nhi hota kuch)
//7 types: Number, BigInt, String, Boolean, Null, Undefined, Symbol

//Note: jb aap do alg variables ko same value dete ho, and equality check krte ho tb vo true output dega
// But it is different in case of symbols, symbols uniqueness show krne k liye use krte hai esliye, jb aap do alg variables ko same Symbolic value dete ho, and equality check krte ho tb vo false output deta hai
const number = 123;
const digit = 123;
console.log(number === digit); //true

const snum = Symbol('123');
const sdigit = Symbol('123');
console.log(snum === sdigit);//false
console.log(snum == sdigit);//false


//Non-Primitive DataType(Reference type): Ye call by reference hote hai mtlb enka reference aapko memory me directly allocate kiya jaa skta hai
//Arrays, Objects, Functions


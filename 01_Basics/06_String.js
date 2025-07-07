const name = "Mohit";
const repoCount = 50;

console.log(name + repoCount + " value"); //Outdated syntax for concatenation

console.log(`My name is ${name.toUpperCase()} and my repo count is ${repoCount}.`); //Modern syntax for concatenation called as String interpolation.

//We can also define string in another way:
const gameName = new String ('Vice-City'); //Run at console
console.log(gameName);

console.log(gameName[0]); //Value at zeroth index
console.log(gameName.__proto__); //Gives object which have functions and methods, you can also access the methods and functions without writing __proto__(this is just a syntax)
console.log(gameName.length); //Gives length of the string, same way you can access the methods/funct of prototype obj
console.log(gameName.toUpperCase()); //Capitalize all the letters
console.log(gameName.charAt(4)); //Shows char at perticular index
console.log(gameName.indexOf('C')); //Shows the index value of perticular charachter. (Note: characters should be mentioned inside Quatation mark)

const newString = gameName.substring(0, 4); //Vice //0-start 4-end => 0,1,2,3 (4 will not be included)
console.log(newString);

const anotherString = gameName.slice(4); //Vice will be sliced //0-start 4-end => 0,1,2,3 (4 will not be included) //try=> -1(slice- y)  and 0(slice entire string)
console.log(anotherString);
// Difference between substring and slice is, in substring you cannot take negative indexes whereas in slice you can take negative indexes

const newStringOne = "   Moh  it    ";
console.log(newStringOne);
console.log(newStringOne.trim()); //removes starting and ending space

const url = "https://mohit.com/mohit%20patil";
console.log(url.replace('%20', '-')); //replace %20 with -
console.log(url.includes('mohit')); //returns true as url has 'mohit' inside it
console.log(url.includes('sundar')); //returns false as url does not have 'sundar' inside it
 
const newStringTwo = "Mohit Patil .Com";
console.log(newStringTwo.split(' ')); //splits the string on the basis of spaces and converts the string into an array
 
const newStringThree = "Mohit-Patil-.Com";
console.log(newStringThree.split('-')); //splits the string on the basis of dash and converts the string into an array



const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["batman", "superman", "flash"];
//Push(): existing array me he push krdeta hai new array
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);  //dc_heroes wale array as a single array leta hai
// console.log(marvel_heroes[3][1]);

//Concat(): existing array me change nhi krta, ek naya array deta hai 
const allHeroes = marvel_heroes.concat(dc_heroes); 
console.log(allHeroes);
//eski ek limitation hai concat aap sirf 2 arrays ko jodne k liye he use krskte ho, agr jyada hoge toh spread operator use krna padega

//Spread Operator: same output dega as concat but yaha aap multiple arrays ko jod skte ho , ... array_name ka use krke
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

//flat(): Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_arr = [1, 2, 3, [4, 5, [5, 8], 6], 7,[6, 7, [4, 5]]];  //ek single array k andr multiple array hai
//green []= 1st depth, yellow [] = 2nd depth
const real_another_arr1 = another_arr.flat(1); //esme kitne depth concatenate krna hai vo likhna hota hai 
console.log(real_another_arr1);
const real_another_arr2 = another_arr.flat(Infinity); //use Infinity jb aapko depth na pata ho, ye automatically jitne bhi depth tk array hoge sbko concatenate krdega
console.log(real_another_arr2);

//isArray(): batata hai ki whether it is an array or not
console.log(Array.isArray("Mohit")); //false bcz ye ek string hai
//from(): jo bhi value di hai usko array me convert krdega
console.log(Array.from("Mohit")); //['M', 'o', 'h', 'i', 't']
console.log(Array.from("mohit, patil")); //['m', 'o', 'h', 'i', 't', ',', ' ', 'p', 'a', 't', 'i', 'l']

console.log(Array.from({name: "Mohit"})); //[](output) = yaha batana padega ki key ya fir value kisko array me convert krna hai

//of(): Returns a new array from a set of elements.
let score1 = 100;
let score2 = 200;
let score3 = 300; 
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]





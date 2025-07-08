//+++++++++++++++++++++++++++NUMS+++++++++++++++++++++++++++++++++++++
const score = 400; //yaha properties ko access nhi kr skte
console.log(score);

const balance = new Number(100); //if used this syntax aapko num ki properties bhi milegi 
console.log(balance);

console.log(balance.toString()); //converts number to string
console.log(balance.toString().length); //toString ko use krke aap strings ki properties ko bhi access kr skte hai

console.log(balance.toFixed(2)); //toFixed k andr jitni value hogi, point k baad uthe digits aapko dikhenge

const otherNum = 123.896;
console.log(otherNum.toPrecision(3)); //Gives precise value 

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //UN standards k hisaab se coma(,) lag jayenge
console.log(hundreds.toLocaleString('en-IN')); //Indian standards k hisaab se coma(,) lag jayenge

//++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++

console.log(Math); //ye ek object hai, eski properties dekhni ho toh run it in console

console.log(Math.abs(-5)); //absolute value- negative ko positive num me convert krne k liye use hota hai(Note: positive ko negative me convert krne k liye nhi use hota)
console.log(Math.abs(5)); //absolute value- negative ko positive num me convert krne k liye use hota hai(Note: positive ko negative me convert krne k liye nhi use hota)

console.log(Math.round(4.67)); //round of krne k liye use krte hai

console.log(Math.ceil(4.2)); //5 - yaha round off nhi hota, bs point k baad agr 5 se km bhi agr koi value ho tb bhi higher value dega
console.log(Math.floor(4.9)); //4 - yaha round off nhi hota, agr point k baad 5 se badi value ho fir bhi lower value choose krega

console.log(Math.pow(2, 3)); //gives 2 to the power 3
console.log(Math.sqrt(34)); //gives square root of 34

console.log(Math.min(4, 2, 6, 8)); //gives minimum value - 2
console.log(Math.max(4, 2, 6, 8)); //gives maximum value - 8

console.log(Math.random()); //gives random value between 0 and 1 every time you hit enter
console.log(Math.random()*10);//gives random value between 0 and 9 (by multiplying by 10 decimal is shifted to right)
console.log((Math.random() * 10) + 1); //gives random value between 1 to 10 (used to avoid zero)
console.log(Math.floor(Math.random() * 10) + 1); //decima; k baad k no. htt jayenge (value from 1 to 10)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min  +1)) + min); // gives values between min 10 and max 20 










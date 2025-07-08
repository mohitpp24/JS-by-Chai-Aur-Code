//Dates and Time

let myDate = new Date();

// console.log(typeof myDate); //object


// console.log(myDate); //2025-07-08T05:17:56.477Z
// console.log(myDate.toString()); //Tue Jul 08 2025 05:17:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Tue Jul 08 2025
// console.log(myDate.toLocaleString()); //7/8/2025, 5:17:56 AM
// console.log(myDate.toISOString()); //2025-07-08T05:17:56.477Z
// console.log(myDate.toJSON()); //2025-07-08T05:17:56.477Z
// console.log(myDate.toLocaleDateString()); //7/8/2025
// console.log(myDate.toLocaleTimeString()); //5:17:56 AM
// console.log(myDate.toTimeString()); //05:17:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); //Tue, 08 Jul 2025 05:17:56 GMT
 
let myCreatedDateOne = new Date(2025, 0, 8); //in javascript month starts from 0 (January = 0)
console.log(myCreatedDateOne); //2025-01-08T00:00:00.000Z
console.log(myCreatedDateOne.toString()); //Wed Jan 08 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

let myCreatedDateTwo = new Date(2025, 6, 8, 11, 5);
console.log(myCreatedDateTwo); //2025-07-08T11:05:00.000Z
console.log(myCreatedDateTwo.toLocaleString()); //7/8/2025, 11:05:00 AM

let myCreatedDateThree = new Date("2025-01-14"); //Date format- yyyy-mm-dd (here 01 = January)
console.log(myCreatedDateThree.toLocaleString()); //1/14/2025, 12:00:00 AM

let myCreatedDateFour = new Date("01-14-2025"); //Date format- mm-dd-yyyy (here 01 = January)
console.log(myCreatedDateFour.toLocaleString()); //1/14/2025. 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDateFour.getTime());

console.log(Date.now()); //Current date
console.log(Math.floor(Date.now()/1000)); //converted into seconds

let newDate = new Date();
console.log(newDate.getDate()); //gives todays date
console.log(newDate.getDay()); //gives todays day
console.log(newDate.getFullYear()); //gives current year
console.log(newDate.getHours()); 
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMonth());
console.log(newDate.getTime());


newDate.toLocaleString('default', {         //this is used for customization 
    weekday: 'long', 
})
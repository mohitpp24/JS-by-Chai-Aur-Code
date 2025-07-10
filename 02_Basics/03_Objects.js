//Objects ko declare krne k 2 tarike hai ek- literals ki trh and ek- constructor ki trh
//koi bhi constructor se agr aap object banate hai toh ye ek singleton object bnta hai mtlb ye apni trh ka ek he object hai
//literals se singleton nahi banta, obj agr constructor se banta hai toh singleton banega

//Object declaration 

//Object literals:
//const JsUser = {}  ==> Simple method to create an object

const mySym = Symbol("myKeyone"); //symbol ko directly object k andr define nhi kr skte, usko pehle bahar define krna padta hai 
const JsUser = {            //Eske andr hum key: value pairs dete hai
    name: "Mohit",         //by default key ko system as a string man leta hai 
    "full name": "Mohit Patil",
    [mySym]: "myKey1",      //symbol ko define krne ka tarika (use [] sqr brackets)
    age: 24,                //value kuch bhi daal skte ho num, string, boolean, etc
    location: "Jaipur",
    email: "mohitpatil@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name); //one way to access obj
// console.log(JsUser["name"]); //agr brackets use kr rhe ho toh name ko as string likhna padega bcz by default key ko system as a string man leta hai 
// console.log(JsUser["full name"]); //Jo key already as string defined hai usko aap '.' wale method se access nhi kr skte ho
// // So best way to access the object is to write the key as a string 
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]); //string
// console.log(typeof mySym); //symbol

// JsUser.email = "mohit@google.com"; //value ko change krne ka tarika 
// Object.freeze(JsUser); //object ko ek bar agr freeze krdiya toh agr uske baad kuch change agr object me krna ho toh vo change apply nhi hoga
// //Eg:
// JsUser.email = "mohit@yahoo.com"; //ye object me change nhi hoga bcz object ko freeze krdiya hai
// console.log(JsUser);

//Adding function to object:
JsUser.greetings = function() {
    console.log("Hello Js User");
}
JsUser.greetingsTwo = function() {
    console.log(`Hello Js User, ${this.name}`);  //same object k agr kisi key ko access krna ho toh "this" keyword ka use krte hai
}
console.log(JsUser);
console.log(JsUser.greetings()); //function execute hua = Hello Js User
console.log(JsUser.greetings); //[Function (anonymous)] => function execute nhi hua hai, sirf function ka reference aaya hai
console.log(JsUser.greetingsTwo()); //Hello Js User, Mohit

//Object constructor/Singleton object

const tinderUser = new Object(); //===> Singleton object
//const tinderUser = {} ===> Non-Singleton Object
//const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "mohitpatil@gmail.com",
    fullname: {
        userfullname: {                         //ek k andr ek aur object = esko nesting kehte hai
            firstname: "Mohit",
            lastname: "Patil"
        }
    }
}

//accessing values
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


//Combining objects:
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};
//way 1:
const obj4 = Object.assign({}, obj1, obj2, obj3); //agr {} nhi dete hai toh sari values obj1 me chali jayegi
console.log(obj4);
//way 2:
const obj5 = Object.assign(obj1, obj2, obj3); //output same he aayega upr jaisa
console.log(obj5);
//way 3: mostly used and most easiest (same as array)
const obj6 = {...obj1, ...obj2, ...obj3}; //spread operator
console.log(obj6); //will give same output as above

//Jb database se values aayegi tb aap ye syntax use krenge
const users = [
    {
        id: 1,
        email: "mohit@gmail.com"
    },
    {
        id: 1,
        email: "mohit@gmail.com"
    },
    {
        id: 1,
        email: "mohit@gmail.com"
    },
]

console.log(users[1].email); //array hai esliye value ese access krenge []me index value denge (yaha 1st object k email ko access kr rhe hai)

//Obj methods:
//Key(): obj k keys ko print krega
console.log(Object.keys(tinderUser)); //ye output array me dega toh array ki methods bhi espe laga skte ho

//values: obj k values ko print krega
console.log(Object.values(tinderUser)); //yaha bhi output array me hoga

//entries(): returns an array of key: value pairs of an object
console.log(Object.entries(tinderUser));

//hasOwnProperty(): check whether the object contains that property or not
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
console.log(tinderUser.hasOwnProperty("isLogged")); //false


//Destructuring of object
const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
//you can access value using: course.courseInstructor syntax
//but esse aapko baar baar course. likhna padta hai
//ek aur tarika hai:
const {courseInstructor} = course; 
console.log(courseInstructor); //Hitesh
//agr aapko courseInstructor ye naam bhut lamba lgrha hai toh aap esko koi aur naam bhi de skte hai:
const {courseInstructor: instructor} = course;
console.log(instructor); //output same milega

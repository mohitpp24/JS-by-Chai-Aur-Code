//Immediately Invoked Function Expression (IIFE): Global scope k pollution se problem hoti hai kai baar toh function ko immediately run krne me dikkat aaskti hai, esliye iife ka use krte hai taki function immediately run ho jaye
//(function definition)(function execution) ==>syntax for iffe
//Eg:

(function chai(){       //called as named iife bcz eska ek naam hai chai
    console.log(`DB CONNECTED`);
})();  //DB CONNECTED, ; se end krna jaruri hai vrna aage jo bhi iife ka use krke fuction execute krne ka try krenge toh vo execute nhi hoga

( () => {           //Arrow function used , unnamed iife
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`My name is ${name}`);
})("Mohit");
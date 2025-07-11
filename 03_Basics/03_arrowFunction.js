const user = {
    username: "Mohit",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this);
        
    }
}
// user.welcomeMessage(); //Mohit, welcome to website
// user.username = "Sam";
// user.welcomeMessage(); //Sam, welcome to website

//console.log(this); //{} yaha empty object print hog, but agr same syntax aap agr browser me run kroge tb ye aapko windows object jo ki ek global object hota hai browser me usko print krke dega

function chai(){
    let username = "Mohit";
    console.log(this.username); //undefined bcz function k andr aap this ka use nhi kr skte
}
chai();

const chai1 = function(){
    let username = "Mohit";
    console.log(this.username); //undefined bcz function k andr aap this ka use nhi kr skte
}
chai1();

const chai2 = () => {
    let username = "Mohit";
    console.log(this.username); //undefined bcz arrow function k andr bhi aap this ka use nhi kr skte
}
chai2();

//Explicit return: jb aap return keyword use krte hai
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 5)); //8

//implicit return: yaha return aur {} nhi diye toh bhi output milta hai , (Ye react me kafi use hoga)
const addThree = (num1, num2) => (num1 + num2);  //agr() laga rhe ho toh return likhne ki jarurat nhi, but agr {} laga rhe ho toh return likhne ki jarurat hogi
console.log(addThree(2, 6));//8

const myObj = (num1, num2) => ({username: "Mohit"});
console.log((myObj()));

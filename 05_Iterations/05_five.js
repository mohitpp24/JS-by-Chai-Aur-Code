//for-each():

// const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach(element => {  //yaha arrow function use kiya hai to get the parameter
//     console.log(element);
// });

// coding.forEach( function (val){   //array ki hr element ko as a parameter leke aayega // yaha normal function use kiya hai to get the parameter
//     console.log(val);
// });

// function printMe(element){
//     console.log(element);
// }
// coding.forEach(printMe);  //bss function ka reference dena hai use execute nhi krna.

// coding.forEach((element, index, completeArray) => {
//     console.log(element, index, completeArray);
// });


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(element => {
    console.log(element);
    console.log(element.languageName);
    console.log(element.languageFileName);
});
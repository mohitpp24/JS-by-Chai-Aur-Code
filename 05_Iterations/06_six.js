
//Note: For-each koi bhi value ko return nhi krta
// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach(element => {
//     console.log(element);
//     return element;         
// });
// console.log(values); //undefined


//Use filter() to get values returned from the function:
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (elements) => elements > 4);  //filter( callback arrow function (uske elements) => condition kya return karana hai) //filter value ko return krta hai esliye un values ko koi naye variables me store krna pdta hai
// console.log(newNums);
// //note: agr arrow fun use kr rhe ho and condition ko kisi curly brackets me nhi likh rhe toh return keyword use krne ki jarurat nhi, direct same line me condition likh skte ho
// //but agr {} use kr rhe toh return keyword use krna padega due to scope
// //Eg:
// const newNumbers = myNums.filter( (elements) => {
//     //elements > 3; //[]=output genetered, try this by commenting return elements > 3
//     return elements > 3;
// })
// console.log(newNumbers);


// //If you want to use for-each for the same, you can use it but need to apply some logic:
// const newNumsOne = [];
// myNums.forEach(elements => {
//     if (elements > 4) {
//         newNumsOne.push(elements)
//     }
// });
// console.log(newNumsOne);


//More practice:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks1 = books.filter( (items) => items.genre === "Non-Fiction");
//console.log(userBooks1);

let userBooks2 = books.filter( (items) => items.publish > 2000);
//console.log(userBooks2);

userBooks2 = books.filter( (items) => {
    return items.publish > 1995 && items.genre === "Science";
});
console.log(userBooks2);

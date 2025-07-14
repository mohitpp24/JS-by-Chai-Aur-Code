//reduce():
//ess method ka calculation step by step:
//step 1: just at starting:- previousVal == initialValue and currentVal == array first element 
//step 2:                    previousVal == first return value and currentVal == array second element
//step 3:                    previousVal == second return value and currentVal == array third element
//step 4:                    previousVal == third return value and currentVal == array fourth element

//note: agr initialValue is not declared then previousVal == array First element and currentVal == array second element 
                                            //previousVal == first return value and currentVal == array third element
                                            //previousVal == second return value and currentVal == array fourth element


const myNums = [1, 2, 3, 4];
// const initialValue = 1;
// const myTotal = myNums.reduce( function (previousVal, currentVal){
//     console.log(`Previous Value: ${previousVal} and Current Value: ${currentVal}`);
//     return previousVal * currentVal;
// }, initialValue);
// console.log(myTotal);


// //Note: aap initial value without assigning any variable bhi declare kr skte -- direct value likh do
// //reduce using array function and without {} and return keyword
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


// //More Eg:
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const priceToPay = shoppingCart.reduce( (preVal, currVal) => {
    return preVal + currVal.price;
}, 0);
console.log(priceToPay);

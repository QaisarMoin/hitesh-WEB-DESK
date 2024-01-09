// .reduce((accumulator,CurrentValue) => {acc+currval},0)

// here ,0 is the initial value of the accumulator .

// .reduce method accumulator takes the intial value and current value is pointing towards the element of the array one by one .

// accumulator adds with current value then there sum gets stored in the accumulator and the cycle goes on until the array ends 

// In result we get the sum of all the elements of the array 


const myNums = [1,2,3,4]

// 1) first method with classic function
let myTotal = myNums.reduce(function (acc,currval){
    console.log(`accumulator : ${acc} and current_value : ${currval}`);
    return acc+currval
},0)
//here 0 is the initial value of accumulator 
console.log(myTotal);

// 2) second method with arrow function

myTotal = myNums.reduce((acc,currval) =>(acc+currval),0)
console.log(myTotal);

//--------------------------><----------------------\\
//Now here is the task that we have to calculate the total price of the shopping cart 

const shoppingCart = [
    {
        itemName : "js Course",
        itemPrice : 2999
    },
    {
        itemName : "computer scientist ",
        itemPrice : 12999
    },
    {
        itemName : "python Course",
        itemPrice : 4999
    },
    {
        itemName : "app development Course",
        itemPrice : 6999
    },
]

let totalOfShoppingCart = shoppingCart.reduce( (item , price) => (item + price.itemPrice),0 )

console.log(totalOfShoppingCart);
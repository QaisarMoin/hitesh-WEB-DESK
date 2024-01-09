//method to define a function in javascript 

// function name_of_function(parameters) {

                // Body of Function

// }

//---------------------------><------------------------\\

function printMyName(){
    // console.log("Qaisar Moin inside function");
}

//method to call function

printMyName 
// this is the refrence of my function 
printMyName() 
// () brcket means execute the function .This function is not returning anything it only printing my name 

//---------------------------><------------------------\\

function addTwoNumbers (number1 , number2){
    // console.log(number1 + number2)
    //it is printing sum of two numbers not returning anything
}

// in js we can store value of a function in a variable 

let container = addTwoNumbers(3,5)
// console.log(container);
 // the conatiner is undefined because function is not returnong any thing 

//---------------------------><------------------------\\

function addTwoNumber2 (num1 , num2){
    const num3 = num1+num2 //OR
    // return num1 +num2 directly 

    return num3 
    // here function returning value of num3 not printing it 
}

let container2 = addTwoNumber2(3,4)
// console.log(container2);

//---------------------------><------------------------\\

function loginUserName (username) {
    // username === undefined is true when there is no argument is passed in parameter 

    // username === undefined is whole condition can written in another form also    ----->     !username.        this means that there is no username

    // if (username === undefined){
    //     console.log(`please enter a valid name `);
    //     return
    // }


    if (!username){
        console.log(`please enter a valid name `);
        return // return means is function ke bahahr chale jao 
    }

    return `${username} Just LoggedIn`
}

// console.log(loginUserName())
// console.log(loginUserName("Qaisar "))


//---------------------------><------------------------\\

//We can give default value also to a function 
// har haal me Moin print hoga kiyo ke username ke default value "Moin" hai 
function defaultName (username = "moin"){
    if (!username){
        console.log(`please enter a valid name `);
        return // return means is function ke bahahr chale jao 
    }

    return `${username} Just LoggedIn`
}

console.log(defaultName());
console.log(defaultName("Qaisar"));// ye value uss default value ko overwrite kar dega 

//---------------------------><------------------------\\

//problem is here that we have to add the number which is added to cart on shoping website 

//there is the problem that we don't know that how many product is added by the customer to make function which can add all of them 

function calculateCartPrice0 (item1){
        return item1
}
// in the above function the problem is that it has only one item to store if we pass multiple items in that it store only the first item 

console.log(calculateCartPrice0(400,200,3000)) //item1 only hold the price 400 

//To solve these problem we have to use rest operator (...item1) this operator store all the values into the array 

function calculateCartPrice1(...item2){
    return item2
}

console.log(calculateCartPrice1(100,3445,6,8,8,66666));

//---------------------------><------------------------\\

// Now we are learning here that how we can pass objects and arrays to function 

// 1) Objects  

const user = {
    username : "Qaisar Moin",
    price : "12345",
    mobile_no : "7869752084"
}


// in this function we have to pass the refrence of anyObject not of user because function don't know about user 
function handelObject(anyObject){
    console.log(`Hello! I am ${anyObject.username} , My coaching price is ${anyObject.price} call me on my number ${anyObject.mobile_no} `)
}

handelObject(user)//we can pass the pre defined object into function 

//And we can also pass the whole object in the argument 
handelObject({
    username : "Meer Ashraf",
    price : "123"
})


// 2) Array

const myNewArr = [100,200,300,400]

function extractSecondValue (anyArr){
    return anyArr[1]
}

console.log(extractSecondValue(myNewArr))
//here we pass pre-defined array

console.log(extractSecondValue([100,300,200,400]))
//here we pass the full array in the argunment 


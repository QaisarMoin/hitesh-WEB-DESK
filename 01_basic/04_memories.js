//Stack (primitive {call by value type})

let myName = "Qaisar Moin"

let myAnotherName = myName//myAnotherName ko myName ka copy diya jayga

myAnotherName = "Meer Ashraf"

// console.log(myName);
// console.log(myAnotherName);

// As we can see that there is no change in original value of the variable 


//Heap(non-primitive type {call by refrence type})

let myObj1={
    username:"Qaisar Moin",
    upi: "1234@ybl"
}

let myObj2 = myObj1//myObj2 ko original object ka refrence diya jayga

myObj2.username = "Meer Ashraf" // this is the method by which we can access the element of an object 

// console.log(myObj1);
// console.log(myObj2);

//Here we can see that the original value is also get changed 
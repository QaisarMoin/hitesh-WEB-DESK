// primitive (call by value)
             // string,number,null,undefined,boolean,symbol,BinInt

let int=23
let float=23.23

let boolean = false
let null1 = null

let userEmail;//undefined

//-------------->Symbol

let id = Symbol('123')//here we can see that both the 
              //symbol having same value ))((But they are not equal))
let anotherId = Symbol('123')

// console.log(id === anotherId);//output is false


// non-primitive (refrence type)
                        // arrays,objects,functions 

let myArr = ["Qaisar moin",1234]

let myObj = {
    name1:"Qaisar",
    age1 : 23,
    name2: "Meer Ashraf",
    age2:20,
    name3: "shraf",
    age3:233
}
// console.log(myObj);

//----------------> Function

let myFunction= function(){
    console.log("Hello World")
}

// myFunction()
// calling the function

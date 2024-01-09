// {} jab kabhi Function ke sath ya phir if-else ke sath aata hai tab is {} ko scope bolte hai 

if(true){ 
    // a,b,c ka kaam if if ke andar hona chiyea but (c var se define hua hai is liye wo bahar ke kesi bhi element se overwrite ho jayga ye hai problem var ke sath )

    let a = 10
    const b = 20 
    var c = 30 
    // console.log("Inner a : ",a);
}

// console.log(a);
//this can't be accessible

// console.log(b);
//this can't be accessible

console.log(c);
//c if ke bahar bhi print ho jayga this is the problem 


//--------------------------><----------------------\\

//Jo scope ke bahar hai wo pura GLOBAL SCOPE hai 

//scope ke bahar ke variable  ko scope access kar sakta hai but scope ke andar ke variable ko scope ke bahar access nahi kar sakte hai  

//--------------------------><----------------------\\

//--------------------------><----------------------\\
                    // NESTED SCOPE \\

function one (){

    const username = "Qaisar"

    function two(){
        const website = "MacBook"
        console.log("variable of fun one Calling from fun TWO :",username);
//we can always access the variable of func one on fun two 
//here we are accessing variable of function one in function two 
    }

    // console.log(website);
    //we cannot access the variable of fun two on fun one 
    //here we are accessing variable of function two in function one 

    two()//here we are calling function two for showing result 
}

one()//here we are calling function one for showing result 



// nested scope in if-else 

if (true) {
    const username = "In first IF Qaisar "

    if (username === "In first IF Qaisar ") {

        const website = "MacBook"
        console.log(username + website);

    }
    // console.log(website);
    //it is not accessible outside of second if-else scope
}

// console.log(username);
//it is not accessible outside of first if-else scope


//+++++++++++++++++++++ Intresting +++++++++++++++++++++\\

 //Example of hoisting {we can call function before declaring it }

 //here is possible

 console.log(addone(5)) // calling addone function before declaring it 

 function addone(num) {
    return `After adding one in num is ${num +1}`//this is returning not printing
 }


 //here it is not possible

console.log(addTwo(5));
// when we hold a function in a variable hoisting is not possible 

 const addTwo = function(num){
    return `After adding two in num is ${num +2}`
 }
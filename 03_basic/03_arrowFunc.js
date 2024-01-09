// firstly we have to discuss the ( This. ) function 

//----------------------------><--------------------------\\

// 1) Inside Object we must have to use this. funtion to call the value inside the object 

const user = {
    username : "Qaisar Moin",
    price : "999",

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
    }//here we are accessing key value of object in the 3rd key of that object only with the help of ( this. ) function

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// const {welcomeMessage: name123} = user
// name123()
//we cannot call the function inside the object like this by this second method 

//----------------------------><--------------------------\\

// In node the default this is an empty object but in browser this is filled object with different key and values in it 

//----------------------------><--------------------------\\

// (this.) function inside a function 

function fun1 (){
    console.log(this);// inside the function (this) show all the keys and value in that object it is not an empty object.
}
// fun1()

//----------------------------><--------------------------\\

 // this.   function  is not useful to see all the property of an variable defined inside the function 

//  function fun2(){
//     const username = "Qaisar-Moin"
//     console.log(this.username);//this will show the undefined result
//  }

const fun2 =function(){
    const username = "Qaisar-Moin"
    console.log(this.username);//this will show the undefined result
 }

//  fun2()
//----------------------------><--------------------------\\
                        //arrow function
//----------------------------><--------------------------\\
 
//Normal function 
  
const fun3 = function(){

}

//Arrow function
//kuch nahi bas function keyword hata do or parenthesis ke baad arrow bana do 

const fun4 = () => {
    const username = "Qaisar-Moin"
    console.log(this.username);//this will show the undefined result
}

fun4()

//----------------------------><--------------------------\\
                   // more arrow function
//----------------------------><--------------------------\\

const fun5 = (num1 , num2) => {
    return num1 + num2
}
const fun6 = (num1 , num2) =>  num1 + num2 // agar ek line me kuch return karna ho tab aesa karo

const fun7 = (num1 , num2) =>  (num1 + num2) // isko apan ek parethesis me bhi wrap kar sakte hai 

// console.log(fun7(3,6));

//  agar cruly bracess laga diye to return keyword use karna padega compulsory hai 

//    Method to return an object from this above method

const fun8 = () => ({ //ye pura usi single parenthesis ke andar hai 
    username : "Qaisar Moin",
    password : "9893676520",
    city : "Jabalpur"
})

// console.log(fun8())

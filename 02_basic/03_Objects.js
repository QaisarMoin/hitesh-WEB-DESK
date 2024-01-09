//singleton 
//Obeject.create

//object literals 
/* object = {
    key: value,
    key: value
} */

const mysym = Symbol("Qaisar")

const jsUser = {
    name : "Qaisar Moin",
    //key ko system as a string "name" process karta hai
    age:18,
    "brother" : "Meer Asharf",//this element can only be accessiable by second method only 
    location:"jabalpur",
    [mysym]:"Qaisar moin",//using symbol as a key 
    email : "qaisarashraf685@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday" , "tuesday"]
}

// method of calling elements of an objects. There are two method in which we can call element of an object 

//first 

// console.log(jsUser.email);
// console.log(jsUser.mysym);
//cannot be accessible

//second

// console.log(jsUser["email"]);
//in this method we have to give input in String form 
// console.log(jsUser["brother"]);
// console.log(jsUser[mysym]);

//how to overwirte or update key value of object 
jsUser.email = "meerashrafi685@gmail.com"
// console.log(jsUser.email);

//how to freeze an object so that no one can overwrite it 
// Object.freeze(jsUser)

jsUser.name = "Qaisar Ashraf"
// console.log(jsUser.name);
//it will not update the value because i freeze's the object 


let newJsUser = {
    name:"world heavy ",
    greeting : function(){
        console.log(`Hello I am  ${jsUser.name}`);
    }
}
// console.log(newJsUser.greeting());
//to print value we have to call function like this 

// console.log(newJsUser.greeting);
//this only tell that greeting is a function 

//we can insert new element in object like given below 
newJsUser.personalName = "Mohammah Qaisar Moin Ashrafi"
//inserting an new element in an object 

// console.log(newJsUser.personalName);
//printing new object 


//inserting new function in an object 

newJsUser.Newgreeting = function(){
    console.log(`hello i am new `);
}
// console.log(newJsUser.Newgreeting());


//if I require to access all the properties of an object method is given below  we are using  this.name_of_key

newJsUser.usegreeting = function(){
    console.log(`hello My name is , ${this.name}`);
}
console.log(newJsUser.usegreeting());


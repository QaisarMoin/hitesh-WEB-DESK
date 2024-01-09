// const tinderUser = new Object()

let newTinderUser = {}
//initillizing object here 

newTinderUser.id = "abc123"
newTinderUser.name = "Mohd Qaisar Moin"
newTinderUser.isLoggedIn = false 
//in above three statement we are inserting element in an array 


let regularUser = {
    email : "qaiarashrafi685@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Qaisar",
            lastname : "Moin"
        }
    }
}
//in above object there is ek object ke andar dusra object and us object ke andr phir tisra object to access all the keys use format is given below 

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);




//Now we are learning how to merge two object properly


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "a",
    6: "b"
}

let obj4 = {obj1,obj2,obj3} 
//isse kiya hua ki ek object ke andar bhaut sare object insert ho gaye 
// console.log(obj4);


//The proper way to merge two object are as follow 

//method 1
let obj5 = Object.assign({},obj1,obj2,obj3)
//  .assign() ke andar jo pehla object hoga wo target objext hota hai ussi me sab add ho jayenge 
// console.log(obj5);

//method 2

let obj6 = {...obj1,...obj2,...obj3}
// console.log(obj6);



//----------------------->database<-----------------------\\
//isme array ke nadar objects aate hai 

const user = [
    {
        id : 1,
        email : "q@gmail.com"
    },
    {
        id : 2,
        email : "q@gmail.com"
    },
    {
        id : 3,
        email : "q@gmail.com"
    },
    {
        id : 4,
        email : "q@gmail.com"
    },
]

// console.log(user[1].email);
//this the method to access all the values of an object inside in array 



//------------------->keys and values<--------------------\\

//in newTinderUser if i want to print all the keys or values ufe following method 

//Object.key(name_of_object)

// console.log(Object.keys(newTinderUser));
// console.log(Object.values(newTinderUser));
// console.log(Object.entries(newTinderUser));

//we can ask some questions also 
// wit the help of name_of_object.hasOwnProperty('name_of_property') it gives answer in boolean format 

// console.log(newTinderUser.hasOwnProperty('isLoggedIn'));
// console.log(newTinderUser.hasOwnProperty('LoggedIn'));






//----------------------------><--------------------------\\

//Now we are learning Destructuring of Object 
//                      and JASON API 

let course = {

    coursename : "js hindi",
    price :"999",
    courseInstructor : "Qaisar"

}

//if we wnat to print any key and value from the object we can do log(course.courseInstructor)  but baar baar aesa likhna accha nahi hai 

//iss ke liye ek second method bhi hai jis mehtod se ham key name ko ek ne name se bhi bula sakte hai and value call kare ne liye direct key ka naam likho na ke baar baar course.key course.key nahi likho 

// const {name of key of object : new name of key} = Object_Name

//Example
const {courseInstructor : teacher} = course

console.log(teacher);

//----------------------------><--------------------------\\

// JASON API 
 //it is similar to objject which does not has any name and key value are written in string format 

// 1) Jason in form of object 

//  {
//     "name" : "Mohd_Qaisar",
//     "branch" : "Information technology"
//     "Address" : "ansar nagar"
//  }

// 2) Jason in form of Array
//ek array jis ke andar bhaut sare object's hai 

[
    {},
    {},
    {}
]


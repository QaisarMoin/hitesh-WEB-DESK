//truthy means that we assume that it is true
// true,"0",'false'," ",[],{},function(){}
//in simple double coted or single coated ke andar kuch bhi chaiye space he kiyo na ho and other listed example

//falsy means that we assume that it is false
// false,0,-0,BinInt 0n,"",null,undefined,NaN

//----------------------------><--------------------------\\

// method to find that ua array is empty or not and object is empty or not

// 1) Array

let myArr = [];

if (myArr.length === 0) {
  // console.log("Array is Empty");
} else {
  // console.log("Array is not Empty");
}

// 2) For OBJECT

let emptyObj = {
  name: "Qaisar",
};
//we know all the properties of an object
//Object.keys(name_of_object) returns an array
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
} else {
  console.log("Object is not Empty");
}

//----------------------------><--------------------------\\
// Nullish Coalescing Operator (??): null and undefine par khelta hai
//----------------------------><--------------------------\\

let val;
val = 5 ?? 10;
// console.log(val);
//dono value hai toh pheli value store kar lega

//null or undefined ko ignore kar ke acchi wali value utha lega
val = null ?? 10;
// console.log(val);

val = undefined ?? 10;
// console.log(val);

val = undefined ?? 10 ?? 50; //agar pheley shai value mil gai toh use store kar lega
// console.log(val);

//----------------------------><--------------------------\\
// Terniary Operator ( condition ? true : false ): null and undefine par khelta hai
//----------------------------><--------------------------\\

let iceTeaprice = 100;

iceTeaprice >= 80
  ? console.log("Greater than 80")
  : console.log("Less that 80");

iceTeaprice = 60;

iceTeaprice >= 80
  ? console.log("Greater than 80")
  : console.log("Less that 80");

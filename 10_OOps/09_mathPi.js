// Dekho math.pi ki value 3.14.. hoti hai and apan iske value change nahi kar sakte But aesa kiyo ??
//kiyo ke uski math ek object hai and pi uski ek key value hai . Math object ke kuch properties disable kari gai hai

Math.PI = 5;
console.log(Math.PI);
//You cannot change it

// But can we make an object in which we can controll it properties by myself so the answer is YES

//object ki properties. enable hai ya disable hai isko dekhne ka ek tarika hai
//Object.getOwnPropertyDescriptor(Object-ka-naam, "Key-ka-naam")

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

//For Example given below

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  chaiOrder: function () {
    console.log("chai nahi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//Now ab mohd Qaisar Moin chate hai ke chai.name ko koi change na kar sake uski overwrite karne wali property ko disable kardo
//ToDo this we have to use {defineProperty(object-name , 'key-ka-name') , {change in property given below}}

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// ab name change nahi ho ga
chai.name = "Meer";
console.log(chai.name);

//enumerable ka mtlb hota hai ke loop nahi chalega iske upper

// for-of loop mein directly object pass nahi kar sakte hai

// for (const [key, value] of Object.entries(chai)) {
//   console.log(`${key} : ${value}`);
// }

// console.log(`${key} : ${value}`) karne ke baad output aesa aayga
//isko khte hai code pathna kiyo function ko dekho hame aesa output nahi chiye hota hai hame sirf key and value pair chiyr hota hai  iske liye if condition laga do

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

// {
// name : ginger chai
// price : 250
// isAvailable : true
// chaiOrder : function () {
//   console.log("chai nahi bani");
// }

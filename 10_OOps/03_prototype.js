//In javascript all the things are Object only
// String -----------------> Object ---------->null
// Array -----------------> Object ---------->null
// Function -----------------> Object ---------->null

// object ke upper kuch nahi
// string,Array and Function bhai bhai hai inka abbu Object hai

//--------------------------><----------------------\\
//--------------------------><----------------------\\

// Ab mere pass ek task hai ke ek trueLength() ka method banana hai jo ke har string me avaliable ho Na ke ek do mein ho . Jo names me space ko alag kar deta ho

let myName = "Qaisar      ";
//console.log(myName.trueLength());
// output will we   "Qaisar"

console.log(myName.length); // like this

let myHeroes = ["Thor", "Spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is : ${this.spiderman}`);
  },
};

// Kiya ham ek aesa methos bana sakte hai for all Object jo sab me kaam kare ??
// kiyo ke Function,Array,String  sab ke sab object he toh hai
//kiya ye method mein apni taraf se inject kar sakta hu YES

//Mein chata hu ke koi bhi Object declare ho to mera banaya method usme bhi accessible ho and agar object mein add karde toh array,string,function sab wahi se pass hote hai ye method un sab mein bhi automatic chale gayga
// phle Object ko select karlo and prototype se apna methos banalo

Object.prototype.Qaisar = function () {
  console.log(`Qaisar is present in all object`);
};

// now checking this for Object {heroPower} and array [myHeroes]

heroPower.Qaisar();
// sucessful in object

myHeroes.Qaisar();
// sucessful in Array

//--------------------------><----------------------\\
//--------------------------><----------------------\\

//Abhi hamne object mein methods add kare hai toh ye method array,string, and funcion ke pass bhi hai

//BUT agar ham ye method Array,String and Function mein se kesi ek ko bhi dete toh yeh methods sirf ussi ke pass hoti . Agar Array ko dete toh String, Function and Object ke pass nahi hoti vice and versa
//Example is given below

Array.prototype.onlyArrayPower = function () {
  console.log(`This property is present only on Array `);
};

//using this property to object
// heroPower.onlyArrayPower();
// not working

//using this property to array
myHeroes.onlyArrayPower();
// sucessful working in array only

//--------------------------><----------------------\\
//--------------------------><----------------------\\

//INHERITANCE

const user = {
  username: "Qaisar",
  email: "Qaisar@google.com",
};
const Teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const TAsupport = {
  makeAssgnment: "JS assignment",
  fullTime: true,
};

// I am learning directly modern syntax

// Object.setPrototypeOf(jisme property add karna hai , jiske property add karna hai );

Object.setPrototypeOf(Teacher, user);
Object.setPrototypeOf(teachingSupport, Teacher);

console.log(teachingSupport.makeVideo);
// now teachingSupport can access the key value of the Teacher

//--------------------------><----------------------\\
//--------------------------><----------------------\\

// Solving my problem
let MyName = "Qaisar        ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`${this}`); //print in string formmat
  console.log(`TrueLenght is : ${this.trim().length}`);
};

MyName.trueLength();
// MyName ne call kiya MyName me "Qaisar        " hai mtlb "Qaisar        " ne call kiya trueLength() ko toh "Qaisar        " he this hai print kar ke dekh lo trueLength function mein

"Moin".trueLength();
// jis ne call kiya wo he this hai yaha "Moin" and "MeerAshraf" he this hai
"MeerAshraf".trueLength();

//this.trim().length meaning is this means jo bhi aa raha hai use trim kro and legth lelo print kardo

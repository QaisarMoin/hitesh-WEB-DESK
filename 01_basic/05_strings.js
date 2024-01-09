let name = "Qaisar Moin ";
let age = 20;

//old way to write an string by adding them

// console.log("My name is "+name+"and my age is "+age);

//Now,there is an modern way to wirte an string by creating 'placeholder in them' ${}  <--- this is called paceholder
//and we have to use backtecks ``

console.log(`My name is ${name} and my age is ${age}`);

//By this method we can use many properteis associated with string like .lenght .toUpperCase and etc... in the placeholder



//------------------><----------------------\\

//Now we have to declare string as an object so that we can access all properites of an object to the string 
//the way is down below with the help of (new) keyword 

let gameName = new String('qaisar-moin')//declaring string like an object 
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName[1]);//Accessing values from key value 
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName[4]);

//we can direct access all the property of an object 
//Examples are given below 

console.log(gameName.length);//length of an object

console.log(gameName.charAt(3));//print the character at the index of 3{counting starts from zero}

console.log(gameName.toUpperCase());//convert all the character to upper case 

console.log(gameName.toLowerCase());//convert all the character to lower case 

console.log(gameName.indexOf('s'))//it will print the index of character given to it 


//the method by which we can remove all the space from the given string {For that we we use trim()  function}

let newStringOne = "    Qaisar     "
console.log(newStringOne.trim());
console.log(newStringOne);

//-------------------><---------------------\\

//Method to replace any word charater from given string for that we use .replace('to be replaced','new inserted item')

const url = "https://qaisarmoin.com/meer%20ashraf%20mahmood.com"

console.log("old one:- "+url.replace('%20','-'));
//It will replace only first %20 not all the %20 

//to replace all the %20 we have to use replaceAll('to be replaced','new inserted item')

const url1 = "https://qaisarmoin.com/meer%20ashraf%20mahmood.com"
console.log("new one:- "+url1.replaceAll('%20','-'));

//-------------------><---------------------\\

//the method from which we can convert string to array on the base of given parameter like 
//we have to divide an string and convert it into an array when space,dash or something userdefined comes. for that we use .split('seperator')

let myNameFamily = "Qaisar Moin-Meer Asharf-Mahmood Ahmed-Shabeena Begum"
console.log(myNameFamily.split('-'));


//practice
let myName = "Qaisar Moin"
let myNumber = "789752084"
console.log(`Hi I am here for you all your ${myName} and my mobile number is ${myNumber}`) //modern way to write a string so,that we can use many proerties of string with out any problem


let newString = new String('12345')
console.log(newString);
console.log(typeof(newString));



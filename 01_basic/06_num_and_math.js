//---------------------->Numbers<------------------------\\

let score = 400 
//here js itself recognaize it is number 

//if user want that i need specfically number the method is given below

let newScore = new Number(300)
//it declare that the input is number only it is a object it allows many properites

//to verify we can print it 
// console.log(newScore);

// console.log(newScore.toString());
//toString() is a method to convert number object to string      


// console.log(newScore.toString().length);
//by converting number into string we can access all the properties of string like length

// console.log(newScore.toFixed(2));
//point ke baad 2 value show karega

let otherNumber = 11.895
// console.log(otherNumber.toPrecision(2));
//it is a method to round off the number to precise start form leftmost number to till conting of user given number

let zeros = 10000000
// .toLocalString() is a method by by we can put comma(,) betwwen the zeroes 

// console.log(zeros.toLocaleString());
//it will put comma in USA standard 

//to put comma in indian standards wirte in bracket 'en-In'
// console.log(zeros.toLocaleString('en-In'));


//------------------------>Maths<--------------------------\\

//------------------------>Maths(Part 1)<--------------------------\\
let number = 254.6
let number1 = -254.6

// console.log(Math);
//Math is libarary in Js having many property 

// console.log(Math.abs(number1));
//it will convert negative number to positive

// console.log(Math.round(number));
//it will round of the number to nearest integer 

// console.log(Math.ceil(number));
//next greatest integer 4.1 -> 5

// console.log(Math.floor(number));
//previous integer 4.9 -> 4

// console.log(Math.min(2,4,6,7,2,1,));
//find the minimum number in the given array 

// console.log(Math.max(2,4,6,7,2,1,));
//find the maximum number in the given array 

//------------------------>Maths(Part 2)<--------------------------\\

// console.log(Math.random());
//it will generate random value between 0 to 1 (it will not hit 1 in anyway)

//Now if i want to customise it between my range ,Here we can apply some arithematic operations to achieve it

// console.log(Math.random()*10);
//Now it will generate value between 0 to 10 but from here also it can produce value value like 0.3232,0.03745 and etc to avoid this we add 1 in my next step 

// console.log((Math.random()*10)+1);
//Now it will produce value between 1 to 10 . To bound this value to its lowest value we use Math.floor()

// console.log(Math.floor((Math.random()*10)+1));

//Now the best method by which we can put my range from my use of perspective 
//Declare min and max value for your range 

let min = 10
let max = 30 

// console.log(Math.floor(Math.random()*(max - min + 1) + min));

//Math.floor() ---> is used to achive integer value
//(max - min + 1 ). -----> max - min convert point to integer and    (+ 1) is there  to avoid 0
// And last (+ min) provide value between given range 









// for-each loop

// objectname.forEach( call back function )
// call back function does not hav any name

//--------------------------><----------------------\\

// objectname.forEach( function (name of variable of your choice) {
// operation or function body
// } )

//Example are down below

//--------------------------><----------------------\\

const coding = ["Javascript", "C++", "Ruby", "Python"];

// 1) Normal Function
coding.forEach(function (item) {
  // console.log(item);
  // it will print all the elements of given array
});

// 2) arrow function
coding.forEach((val) => {
  // console.log(val);
});

// 3) External Function
function print(item3) {
  console.log(item3);
}

coding.forEach(print); // right
// coding.forEach(print()) // Wrong
//give only refrence (print) not execute there (print())

//--------------------------><----------------------\\

// for-each contain parameters in them
// coding.forEach( ( value, Index, fullArray) => {
//})

coding.forEach((val, Index, fullArr) => {
  console.log(val, Index, fullArr);
  // you can see the power of forEach loop
});

//--------------------------><----------------------\\

// forEach loop in array with object

const myCoading = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// this type of problem i face many time in the above course and this carrer
//there is the method how we can solve this proble with the help of forEach loop

myCoading.forEach((key) => {
  console.log(key.languageName);
  //the method of extracting key-value form an object which is inside an array OR an element of an array
});

// in above case key refers to the elements of object means I give the name of (key) to all the object and by ( .languageName ) we can acces all the elements of an object  which is inside of an array.

//--------------------------><----------------------\\
//this is the power of forEach loop
//--------------------------><----------------------\\

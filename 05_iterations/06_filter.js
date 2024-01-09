// something very important about forEach loop 
// what if I want to store its value in a variable 

// const coding = ["Javascript","C++","Ruby","Python",]

// let values = coding.forEach((item)=> {
    // console.log(item)
    // return item
    // chiye return likho ya na likho forEach loop kabhi value return nahi karega  only print karega 
// });

// console.log(values);
// always undefined aayga 


//--------------------------><----------------------\\
//--------------------------><----------------------\\

// .filter( call_back_fun(Any_name) => condition ) operation ye bhi apne andar call back function leta hai 

// .filter() it returns the value not like forEach() not returning any thing 

const myNumber = [1,2,3,4,5,6,7,8,9,10]
// 1) First Way 
const holdTheValue = myNumber.filter((nums)=> nums >4)
// console.log(holdTheValue);

// 2) second Way
const holdTheValue1 = myNumber.filter((nums)=> {
     return nums > 5
     //in curly bracess we have already learnt that we must have to write return keyword in curly bracess
})
// console.log(holdTheValue1);

// In the above filter method we have goal to print number with some condition 
// Now I am learning the method do the same work with the forEach loop 

let newArr = []

myNumber.forEach((key) => {
    if(key > 5){
        newArr.push(key)
    }
})
// console.log(newArr);
// In this case i require more intelligence to do same kind of work 


//--------------------------><----------------------\\
//--------------------------><----------------------\\

//Now i have some collection of books
// and  want to filter it out on the basis of genre or publish date or genre and publish date 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   1) first method without curly bracess
  let userBooks = books.filter((key) => key.genre === "Science" && key.publish > 2009)
//here i am filtering out books on the basis of genre and publish date 
console.log(userBooks);


//   2) second method with curly bracess and we know that in curly bracess we must have to write return keyword
userBooks = books.filter((key) => { return key.genre === "Science" && key.publish > 2009})
// return keyword is important there 
  console.log(userBooks);
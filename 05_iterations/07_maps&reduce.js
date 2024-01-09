//.map(call_back_function(give_some_name) => operation)

const myNumber = [ 1,2,3,4,5,6,7,8,9,10]

let store = myNumber.map( (key)=> key+10)
console.log(store);

store = myNumber.map( (key)=> {return key+10})
console.log(store);

//--------------------------><----------------------\\
// Now I am learning chaining means 
// ham ek ke baad ek differnet ya same method run kar sakte hai jese .map().filter().map().... and many more method 

let newNumber = myNumber
                    .map( (num) => num *10)
                    .map( (num1) => num1 + 1)
                    .filter( (num) => num>40)
//first ka result second me pass jayga chaning me and then second ka third ke pass jayga and so on ...
console.log(newNumber);



 


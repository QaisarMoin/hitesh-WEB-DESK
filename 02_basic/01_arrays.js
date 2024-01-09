let arr = new Array(1,2,3,4,5,6,7)//initilazing array with by making object 

let myArr = ["Qaisar Moin","Meer Ashraf","Abbujan","Ammi",1,2,3,4]//normal array

let practiceArr = [1,2,3,4]

// console.log("Type of obeject is :- " ,typeof arr);

// console.log(arr);

// console.log(myArr);

// console.log(arr[1]);


//Methods in Array 

practiceArr.push(9)
//push() is used to add element at the back of an array 
practiceArr.push(10)
// console.log(practiceArr);

practiceArr.pop()
//pop() is used to delete an element from the last of an array 
// console.log(practiceArr);

practiceArr.unshift(9)
//it add the element at the front of an array
//the problem is that all the element on the array get shifted to new index 

practiceArr.shift()
//This remove the element from the start of an array


//We can also ask some questions regarding arrays

// console.log(practiceArr.indexOf(4));
//it will print the index of given array , if element is not present in the array then it will return value (-1)

// console.log(practiceArr.includes(4));
//it return boolean value like true or flase 



let newArr1 = practiceArr.join()
//  .join() will convert the array into String 

// console.log(newArr1);
// console.log(typeof (newArr1));


//------------------>slice and splice<----------------\\


let newArr = [1,2,3,4,5,6,7,8,9]

console.log("Slice array:- ",newArr.slice(1,3)); 
console.log("Original array:- ",newArr);
//  .slice() it will only print element from [1,3) yes it will not print the last value 

console.log("Splice array:- ",newArr.splice(1,3)); 
//in splice it will cut out the region given above [1,3] yes it include the last value 
console.log("Original array:- ",newArr);

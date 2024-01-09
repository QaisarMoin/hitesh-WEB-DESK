//For-In loop

// for (const key in object) {


    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // } 
    // is comment out part ko turant hata do koi kaam ka nahi hai 


// }

const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "Python",
}

// for-in loop hamesha index/(key) return kara hai na ke direct value jesa ke for-of loop karta tha 

for (const obj in myObject) {

    // console.log(obj);
    // it will return key 

    // console.log(myObject[obj]);
    // now this will return values 

    // console.log(`${obj} is the shortcut of ${myObject[obj]}`);
    //This will return the prefect sentence 
}

//----------------------------><--------------------------\\ 
// now can we use this for-in loop inthe array 
// Yes we can 

const programming = ["js","rb","cpp","py"]

for (const lang in programming) {
   
    // console.log(lang);
    // This will print the key values of the array 
    // like 0,1,2,3,4,5... etc

    //to print actual values of the array method is down below 
    // console.log(programming[lang]);
}

//----------------------------><--------------------------\\
// Now can we use this for-in loop in Maps
// No we cannot 

let map = new Map()
map.set ('In',"India")
map.set ('USA',"United States Of America")
map.set ('Fr',"France")

// for (const key in map) {
//    console.log(key);
// }


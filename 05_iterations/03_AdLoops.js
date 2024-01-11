// for-of loop

// for (const iterator of object) {

// }
//here iterator means the name (which you you want to give) the element. AND object means the name of array or object (in which you want to apply this loop)

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

// ye loop means (num) in this above case har ek element ko ek ek karke access karega
//chahai wo array ke element ho ya phir string wagera ke

const str = "Qaisar Moin";
for (const string of str) {
  // console.log(string);
}

// Maps

// Declaration  let map = new Map()
// yes map is also an object in javascript

//map.set('key', "value")

let map = new Map();
map.set("In", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set("In", "India");
// map mai app ek se jada baar same key and value store nahi kar sakte hai wo show he nahi karega

for (const country of map) {
  console.log(country);
  // it will print in the form of array
}
//if I want Key and Value saperately form the map for that we can destructure that map in the given below way

//         [Key   ,  values]
for (const [keys1, values1] of map) {
  console.log(`${keys1} :- ${values1}`);
}

// now we use this same loop in the object to access all the keys and values of it

let myObj = {
  game1: "PUBG",
  game: "BGMI",
};

// for (const obj of myObj) {
//     console.log(obj);
// }
//  In For-of loop Object is not iterable so we cannot use this loop in object

const marvel_heros = ["ironman","spiderman","thor"]
const dc_heros = ["batman","flash","superman"]

// marvel_heros.push(dc_heros)

//aese push karne se ye hua ek array ke andar dusra array aa gaya 2nd array 4th element hai first array ka

// console.log(marvel_heros);
// console.log(marvel_heros[3]);


//to merge two properly we use 1) concat and 2)spread [...name1OfArray,...name2OfArray,...name3OfArray,etc]

//Spread is very important 

//Concat()[in concat we can merge only two arrays]

let new_heros = marvel_heros.concat(dc_heros)
//concat() return an new array thats why we have to save it in new variable
// console.log(new_heros);


//spread(very easy and important)

//in spread[] we can merge as many arrays as we can 
// let all_new_heros = [...marvel_heros,...dc_heros]


//agar ek array ke andar bhaut sare array ho toh un sab ko ek single array kese banaye

const another_arr = [1,2,3,[3,4,5,2],7,[7,[2,3,6,8]]]
//we can convert it into an single array by  .flat(depth) method[depth can be 1,2,3... Infintiy]
let use_arr = another_arr.flat(Infinity)
console.log(use_arr);

//we can also convert and ask some question s from array 

// like asking question 

console.log(Array.isArray("Qasiar Moin"));
console.log(Array.from("Qasiar_Moin"));

// coverting multiple variable to Array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4));

// Object litreal (means that literally an object)

const user = {
  username: "Qaisar moin",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details from DataBase");
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());

//--------------------------><----------------------\\
//--------------------------><----------------------\\

//Importannt Phase chalu hota hai
// user name setoh 10-15 object bana do but compiler ko kese pata chalega ke tum kis context ke baat kar rahe ho
// to solve this problem WE USE { .this}
// this means jisne call kiya hai wo he this hai

const userOne = {
  username: "Qaisar moin",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log(`UserName : ${username}`);
    // Agar aese likho ge toh username Not defined aay ga kyo ke compiler ko pata he nahi hai ke kis username ke baat kar rahe ho

    // Best Method is Given Below this keyword means that we are talking about current context
    console.log(`UserName of userOne : ${this.username}`);

    //to see current context directly print this
    console.log(this);
    // it will return full object in which we are working
  },
};

// console.log(userOne.username);
// console.log(userOne.getUserDetails());

//--------------------------><----------------------\\
//--------------------------><----------------------\\

// Now form here we are now start talking about new keyword
// const promiseOne = new Promise(function (resolve, reject) {});
// const date = new Date();
//what is the use of new keyword

// new keyword means that mujhe ek new copy do original function,object.... ke
//For Example down below

//--------------------------><----------------------\\
//--------------------------><----------------------\\

function User(username, isLoggedIn, loginCount) {
  // prefer ye hai ke variable ke naam same rakho lekin fir pata kese chelega ke argument me aaya variable kon sa hai or function ke andar define variable kon sa hai
  //uske liye jo variable function ke andar wala ho uske sath this.Name_of_variable = argument_wala_name

  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.loginCount = loginCount;
  this.greeting = function () {
    console.log(`Hello I am ${this.username}`);
  };

  // {this.} means that is context me ek naya variable username add karo jis ke value aay hue parameter ke barabar ke hai {this.username = username;} ye iska Explanation hai

  return this;

  //agar {new} keyword ko use nahi kar rahe ho and  function mein parameters pass kar rahe toh {return this} function ke end mein likhna he padega nahi toh undefine show kerega

  // BUT

  //agar {new} keyword ko use karne baad function mein parameters pass kar rahe toh {return this} karo chiye na karo koi farq nahi padtha hai
}

//agar {new} keyword ko use nahi kar rahe ho and  function mein parameters pass kar rahe toh {return this} function ke end mein likhna he padega nahi toh undefine show kerega.  EXAMPLE given below

const user1 = User("Mohd Qaisar Moin", true, 9);
console.log(user1);

//agar {new} keyword ko use karne baad function mein parameters pass kar rahe toh {return this} karo chiye na karo koi farq nahi padtha hai. EXAMPLE given below

const user2 = new User("Mohd Meer Ashraf", false, 10);
console.log(user2);

// {new} keyword ka mtlb hota hai ke ek nahi copy of original ke bana ke do taki original mein overwrite na ho

//--------------------------><----------------------\\
//--------------------------><----------------------\\

const user3 = User("User3", false, 99);
const user4 = User("User4", true, 100);
console.log(user3);
//in upper walo mein user4 ne user3 ko overwrite kar diya hai console.log(user3) karo ge tab bhi data user4 ka he show karega

//To prevent this problem we use {new} keyword so i get a frest new copy of the original one so that no one can overwrite that

const user5 = new User("user5_withNew", true, 123);
const user6 = new User("user6_withNew", false, 321);
console.log(user5);
console.log(user6);
console.log(user6.greeting());
//this how we can access the internal variable of the function

//Ab indo user5 and user6 me user6 ne user5 ko overwrite nahi kiya hai wo do independent hai ek dusre se
// print karke dekh lo
//   koi overWrite ke problem nahi hai

//--------------------------><----------------------\\
//--------------------------><----------------------\\

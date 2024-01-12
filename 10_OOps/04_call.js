// function setUserName(username) {
//   this.username = username;
//   console.log("called");
// }

// function createUser(username, email, password) {
//   setUserName(username);
//   //passing parameter to setUserName function
//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser("Mohd", "Qaisar@gooale.com", "123");
// console.log(chai);

//aap yaha dekho ge ke username print nahi hua hai kiyo ke function call toh ho raha hai but execution time khatam hote he wo remove ho jata hai islye username print nahi ho raha hai
//AND
// Called toh print ho ga kiyo ke function toh call ho raha hai

//--------------------------><----------------------\\
//--------------------------><----------------------\\

function setUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  //passing parameter to setUserName function
  this.email = email;
  this.password = password;
}

const chai = new createUser("Mohd", "Qaisar@gooale.com", "123");
console.log(chai);

// dusre function mein agar this.username formate me save kare ho toh jab usko call karoge dusre funcyion me se toh {.call} keyword ka use karna padta hai and parameter send karne ke phle ek {this} bhi send karna padta hai kiyo ke ye parameter wala this createUser function ke context ko refer karta hai and ye this setUserName wale function ke {this} ko replace kar deta hai jisse puri problem solve ho jati hai

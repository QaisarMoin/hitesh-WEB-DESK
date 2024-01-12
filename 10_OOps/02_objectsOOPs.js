//In javascript all the things are Object only
// Strign -----------------> Object ---------->null
// Array -----------------> Object ---------->null
// Function -----------------> Object ---------->null

// object ke upper kuch nahi

//Now we are testing that if all the things in the Js iss Object only so we can access them as an object only

function multiplyBy5(num) {
  return num * 5;
}

//Adding an parameter by object method into the function
multiplyBy5.Name = "mohd Qaisar Moin";
console.log(multiplyBy5(5));
console.log(multiplyBy5.Name);
// in the above statement we are printing the added name in the function with object method

//--------------------------><----------------------\\
//--------------------------><----------------------\\

// if Function bhi object hai toh kiya mein khuch additional functionality add kar sakta hu ??
//YES we can
//For this hame phle function ka naam .prototype.apna banaya hua featrue ka naam likh do
//Example createUser.prototype.printQaisar = function(){}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// declaring new feature to createUser

createUser.prototype.increment = function () {
  return this.score++;
  //agar ham sirf score++ likhengetoh compliler ko toh pata he nahi chelega ke kon se score ke baat chal rahe hai to remove this problem we have to use this.
  // jis ne bhi bulaya hai uska kaam kardo
};

createUser.prototype.printMe = function () {
  console.log(`Price is : ${this.score}`);
};

//ab hamne function createUser me kuch mere banaye hue properties add kardiye hai
// lekon jab mein ne numm ke andar createUser() ke parameters de kar store kiya toh mein ne numm ko pata he nahi ke function creatUser me mein kuch properties add kare hai
// to REMOVE THIS problem we have to use {new} keyword so that it give me brand new copy of the function

let numm = new createUser("QaisarMoin", 50);
console.log(numm.increment());
console.log(numm.printMe());

class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `Your Password is : ${this.password}abc`;
  }

  changeUserName() {
    return `Your username is : ${this.username.toUpperCase()}`;
  }
}

const chai = new user("chai", "chai@google.com", "123");
console.log(chai.changeUserName());
console.log(chai.encryptPassword());

//--------------------------><----------------------\\
//               above ka Behind The Scene          \\

// Aggar ham yahi functionality class ke bjaye function se banate toh kese ??

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `fucntion encryptPass : ${this.password}Qaisar`;
};

User.prototype.changeUserName = function () {
  return `Your changed userName is : ${this.username}`;
};

const callFunction = new User("Qaisar", "hcl@google.com", "HCLCL");

console.log(callFunction.changeUserName());
console.log(callFunction.encryptPassword());

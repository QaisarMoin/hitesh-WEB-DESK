//props means properties
//ho sakta hai ke ham ke class banaye and useki function ka access kisi ko nahi deha chiyhe
//toh ye {static} keyword se possible hia

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`UserName : ${this.username}`);
  }

  static createId() {
    return "1234567890";
  }
  //createId ek unique id deti hai har user ko jo login karta hai and iska access mujhe kisi ko nhai dena hai
}

const qaisar = new User("Qaisar");
qaisar.logMe();
//logMe is accessible

// console.log(qaisar.createId());
// BUT crreateId is not accessible

//--------------------------><----------------------\\
//createId ka access User se inherit hone wali class ke pass bhi nahi ho ga
//EXAMPLE

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const moin = new Teacher("Moin", "moin@gmail.com");
//moin logMe ko toh access kar sakta hai
moin.logMe();

//But moin createId ko access nahi kar sakta hai
// console.log(moin.createId());

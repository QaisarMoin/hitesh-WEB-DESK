//There is a problem that how to connect two classes with each other
// The method which is used to this is known as
// name-of-first-class want to aquire properties extends name-of-second-class jis ke properties hai wo class second class hai
// toh iss se second class ke properties of first class access kar sakte hai

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Your UserName is : ${this.username}`);
  }
}

class Teacher extends User {
  //user se teacher bana hai toh constructor overwrite kar rahe hai
  constructor(username, email, password) {
    // User.constructor.call(this, username);
    //is uppar wale ke jageh bas super(username) likho
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`Course Added by ${this.username}`);
  }
}

const calling = new Teacher("Qaisar", "Qai@google.com", "13579");
console.log(calling);
calling.addCourses();
//calling Userclass function logMe from the Teacher class
calling.logMe();
// Teacher class ke pass logMe and all function inthe User ka access hai kiyo ke Teacher class ne inhert kiya hai

//--------------------------><----------------------\\

// Ab hame dekhna hai ke User ke pass Teacher ke functions ka access hai ke nahi

const user = new User("Qaisar_Moin");
// user.addCourses();
//addCourse ka access toh nahi hai mtlb User class ke pass teacher class ke functions ka access nahi hai
user.logMe();
//logMe toh User class ka he function hai toh koi problem nahi hai

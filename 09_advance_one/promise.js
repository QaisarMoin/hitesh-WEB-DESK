//promise is a object jo kukhuch time leta hai koi work karta hai and value provide karta hai

// ho sakta hai ke promise complete ho jay and ho sakta hai ke promise complete na ho

// completion ke case me we .then() use karte hai
//AND
//Imcompletion ke case me .catch() use karte hai
// AND
// .finally() toh use karte he hai

//--------------------------><----------------------\\
//--------------------------><----------------------\\

//Promise ke do part hote hai
// 1) create karna
// 2) consume karna

// 1) create karna
// promise apne andar ek call back function leta hai

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  //do DataBase call ,cryptography ,network
  setTimeout(function () {
    console.log("Async Task is Completed");
    //step 2) using resolve
    resolve();
  }, 1000);
});

//--------------------------><----------------------\\

//But in the above promise resolve and reject kiya kya ??
// Dekho resolve ka direct connection hai .then(call-function) se
//resolve ko use karne ke liye promise ko consume kar na ho ga

// step 1)
// promiseOne.then(function () {

//   //is function ke andar jo result promise one ne complete kiya hai uska result automatically aa jayga But uske liye do no ko appas me connect karna ho ga

//   console.log("resolve start working");
// });

//--------------------------><----------------------\\

//ye upar hame promise create and consume alag kiye hai now i you the way in which i can do same work in a single piece

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("promise 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   // ye dekho .then() ko directly connect kar diye
//   console.log("promise 2 resolve");
// });

//--------------------------><----------------------\\
//--------------------------><----------------------\\

// Third promise in which we are learning that how i can pass parameter from resovle to .then() call back function
// The first letter of pof promise is capital P
let promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Mohd Qaisar Moin", password: "12345" });
  }, 1000);
});

// i add (data) name variable to hold the value which is returned by promise
promiseThree.then(function (data) {
  console.log(data);
  // This data name variable automatically holds the object or any value returned the resolve in the creation of the promise
});

//--------------------------><----------------------\\
// Now Promise four
// In this case we are now talking about errors (means rejection => .catch(call back function))

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; //put ture or false
    if (!error) {
      resolve({
        userName: "Mohd Qaisar Moin",
        password: "1234567890",
      });
    } else {
      reject("ERROR: Something Went Wrong in PromiseFour");
    }
  }, 1000);
});

promiseFour
  .then(function (data) {
    // .then() means sucessful ho toh ye karo
    console.log(data);
    //yaha par data ko print karwa rahe hai
    return data.userName;
    // data me se username extract karke agle .then() ke pass bhej diye hai .. Aese ham jitne chiyhe .then() ka use kar sakte hai
  })
  .then(function (username) {
    // is uppar wale username variable me pichle .then() se aaya hua data se original userName stroe ho jayga
    console.log(username);
  })
  .catch(function (rejection) {
    // .catch() means reject ho jay toh yeh karo
    console.log(rejection);
  })
  .finally(function () {
    // .finally means Error aaya OK sucessful hua Thab bhi OK but mujhe battao he ke hua ke nahi
    // .finally() hamesha run hoga chiye sucesss mille ya rejection mille

    console.log("This is final reult of the PromiseFour ");
  });

//--------------------------><----------------------\\
//--------------------------><----------------------\\

//Handelling promise with Async But this is my opnion to use only .then().catch().finally()

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // error wala case dekhne ke liye true kardo error ko
    if (!error) {
      resolve({ userName: "Qaisar Moin", Password: "9893676520" });
    } else {
      reject("ERROR: JS went Wrong PromiseFive");
    }
  }, 1000);
});

// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }
//--------------------------><----------------------\\
// await ka mtlb hai kuch der ruko and jab kaam pura ho jaay toh aage badho
//--------------------------><----------------------\\

async function consumePromiseFive() {
  try {
    // try means agar sucessful hua hai toh check karo
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    // catch means that agar rejection milla ha toh check karo
    console.log(error);
  }
}

consumePromiseFive();
// isme Function call karna hota hai

//--------------------------><----------------------\\
//--------------------------><----------------------\\

// https://api.github.com/users/hiteshchoudhary

// Now from here we are start using fetch() It means it return promise only
//fetch likho fetch pura data apne app le aayga and return promise he karega

async function studyFetch() {
  try {
    //fetch me await isliye use kare hai ke data ko lane mai kuch time lagta hai
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );
    // fetch data ko string form me laata hai so we have to convert string to json so that we can extract data from it

    const toJson = await response.json();
    //   response ko json me convert hone ke liye kuch time lagta hai isliye tiJson me await ka use kare hai
    console.log(toJson);
  } catch (error) {
    console.log("ERROR Mohd Qaisar Moin se Batao", error);
  }
}
// studyFetch();

//--------------------------><----------------------\\
// abhi hamne uppar ek api se data nikale async method se but hame yahi kaam .then wagera method de karenge
//--------------------------><----------------------\\

fetch("https://api.github.com/users/hiteshchoudhary")
  .then(function (data) {
    console.log(typeof data);
    //converting coming data to json format
    return data.json();
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (rejection) {
    console.log("Error", rejection);
  });

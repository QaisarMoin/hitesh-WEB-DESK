// let str1 = `Qaisar Moin`;
// let str2 = ` Qaisar Moin`;

// console.log(str1 + str2);

// //to replace anything from the variable of the string we use .replace('what we have to replace' , 'by replaced')

// let number = 1234;
// // console.log(number.toString());
// // console.log(number);

// let arr = [1, 2, 3, 4, 5];
// // console.log(typeof arr.toString());
// // console.log(arr);

// let maths = Math.random() * 10;
// // console.log(Math.round(maths));
// // console.log(Math.floor(maths));
// // console.log(Math.ceil(maths));

// console.log(Math.max(Number(arr)));
// console.log(Math.min(1, 2, 3, 4, 5, 6));

// let myObj = {
//   username: "Qaisar",
//   Password: "1234",
// };

// const storeIt = Object.keys(myObj);
// console.log(typeof Boolean(storeIt));

// const leastNum = Math.min(Math.round(Math.random() * 20 + 1 + 10));

// let newPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       console.log("Qaisar moin 1 Sec late ");
//       resolve(leastNum);
//     } else {
//       reject("Js went wrong during fteching");
//     }
//   }, 1000);
// });
// .then((result) => {
//   console.log(typeof String(result));
// });

// async function randomPrinter() {
//   try {
//     const response = await newPromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// randomPrinter();

//====================================================\\

//Fetch()

// async function learnFetch() {
//   try {
//     let response = await fetch("https://api.github.com/users/hiteshchoudhary");
//     let convert = await response.json();
//     console.log(convert.id);
//   } catch (error) {
//     console.log("Hello there is error in fetching");
//   }
// }

// learnFetch();

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (responseId) {
//     console.log(responseId.id);
//   })
//   .catch(function (error) {
//     console.log("there is an error ", error);
//   });

let str1 = "Qaisar";
let str2 = " Moin";

let str3 = [...str1, ...str2];

str4 = str3.toString();

console.log(str4.replaceAll(",", ""));

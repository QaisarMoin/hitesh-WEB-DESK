// For loop 

for (let i = 1; i <= 10; i++) {
    // console.log(i + "Qaisar");
}
//it will print number form 1 to 10 
//for(let i = "starting point"; (ending point);increment/decrement){ scope }

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j <= 5; j++) {
    //    console.log(`Inner loop ${j} , Outer loop ${i}`);
        
    }
}

//--------------------------><----------------------\\

//Loops on array 

let myArr = ["flash","superman","batman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

//--------------------------><----------------------\\

// Loops with Break and Continue

//jis par continue hai mtlb us particular element or value ko choro(skip karo) aur aage ki pure element or value execute kardo 

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`5 is Detected`);
        continue
    }
    console.log(`value of index is ${index}`);
}

//jis par break hai mtlb us particular element ke baad kuch bhi execute mat karna

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`5 is Detected`);
        break
    }
    console.log(`value of index is ${index}`);
}
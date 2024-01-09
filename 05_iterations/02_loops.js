//Simple use of while loop

let index = 0 //initilizing variable

while (index <= 10) {
    // console.log(index); 
    // printing 
    index= index+2 // upgradation 
}

// use of while loop on array 

let myArr = ["Qaisar","Meer","shabeena","Mahmood"]
let arr = 0
while (arr < myArr.length) {
    // console.log(myArr[arr]);
    arr++
    
}

//--------------------------><----------------------\\
//             Do{}while() loop

let score = 1
do {
    console.log(`score1 is  ${score}`);
    score++
} while (score<=10);

//Do-while loop kam se kam ek baar toh run hoga kiyoke ye execute phle hota hai and condition baad me check hote hai 
let score1 = 11
do {
    console.log(`score1 is ${score1}`);
    score1++
} while (score1<=10);

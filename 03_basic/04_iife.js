// Immediately Invoked Function Expression (IIFE)

// The function is written inside the pranthesis and after that another pranthesis is also attached to it for its execution and after all of that to iife we have to put an ; mark 

// 1)  Named IIFE

(function chai() {
    console.log(`Data-Base Connected`);
})() ;
// this last paranthesis is for execution

( (name) => {
    console.log(`hello i am ${name}`);
})('Qaisar moin'); 
//Here we passing the argunment to the function 



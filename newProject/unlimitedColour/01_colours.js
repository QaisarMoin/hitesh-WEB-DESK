// Firstly we have to create umlimited colurs using HexColour code for color generation

//This is function which create unlimited colour for background
let unlimitColourGenerator = function () {
  let hexColour = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour = colour + hexColour[Math.floor(Math.random() * 16)];
  }
  return colour;
};

//This is function which create unlimited colour for h1 TEXT
let unlimitColourGeneratorh1 = function () {
  let hexColour = "0123456789ABCDEF";
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour = colour + hexColour[Math.floor(Math.random() * 16)];
  }
  return colour;
};

//intilizing variable
let container = null;
let container1 = null;

//This is the function which execute the background and colour into running
let startGenerating = function () {
  //And condition isliye laga rahe hai kiyo ke baar baar click karne se problem na ho and value overwrite na ho
  if (container === null) {
    container = setInterval(changeBackground, 1000);
    // container sirf refrence ke liye hai bas taki ham usse outside the function bhi use kar sake
  }

  if (container1 === null) {
    container1 = setInterval(changeColor, 1000);
  }

  //for background colour change
  function changeBackground() {
    document.body.style.backgroundColor = unlimitColourGenerator();
  }

  //for h1 Tag colour change
  function changeColor() {
    document.getElementById("hello").style.color = unlimitColourGeneratorh1();
  }

  console.log("start");
};

//This is the function which stopes the execution of the function
let stopGenerating = function () {
  clearInterval(container);
  clearInterval(container1);

  // null isliye kar rahe hai tak ke puri value reset ho jay

  container = null;
  container1 = null;
  console.log("stop");
};

document.querySelector("#start").addEventListener("click", startGenerating);

document.querySelector("#stop").addEventListener("click", stopGenerating);

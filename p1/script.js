// ------------------------------------------------------------------
// Functions in javascript
// Q1 - What is a Function Declaration? 

function square(num) {
  return num * num;
}

// ------------------------------------------------------------------
// Q2 - What is a function Expression
// after the equal sign this is an anonymous function 
const subtractTwo = function (num) {
  return num - 2;
}
// ------------------------------------------------------------------
// Q3 - What are First Class Functions?
// function can be treated as a variable (everything a var can do a function can also do)

function displaySub2(fn) {
  num = 10;
  console.log(`${num} - 2 = ` + fn(num))
}
// ------------------------------------------------------------------
//Q4 What is IIFE?
// Immediately Invoked Function Expression

(function (name = 'bawa') {
  console.log("Your name is " + name)
})();
// ------------------------------------------------------------------
// Q5 - IIFE O/P Based Question
(function (x) {
  return (function (y) {
    console.log(x)
  })(2)
})(1)
// ------------------------------------------------------------------
// Q6 - Function Scope
// function check its local scope if var is not found it keeps going out until it finds the var or the var doesn't exist
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Baltej";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()) // Returns 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // Returns "Baltej scored 5"


// ------------------------------------------------------------------
// Q7 - Function Scope - O/P Based Question
// What if you change i from let to var 
// A: With var "i" get assigned to the global scope 
// This means its changed the value of i in the settimeout callback
// with let i gets called with its function scope 

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 100)
// }
// ------------------------------------------------------------------

// Q8 - Function hoisting 

funcName();

function funcName() {
  console.log("Bawa Coder");

}

// ------------------------------------------------------------------

// Q9 - Function hoisting  - O/P Based Question 

var x = 21;


var fun = function () {
  console.log(x);
  var x = 20;
}
fun();

// ------------------------------------------------------------------

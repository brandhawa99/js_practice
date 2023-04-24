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
//  What gets console logged 
//  Answer: undefined because the local scope 
// x has gone through part one of the two step process
// where it gets initialized  but not assigned a value

var x = 21;


var fun = function () {
  console.log(x);
  var x = 20;
}
// fun();

// ------------------------------------------------------------------
// Q10 - Params vs Arguments

function sum(num1, num2) { //params
  return num1 + num2
}
sum(2, 3) //arguments 

// Spread vs Rest operator 
// res operator in this situation 
function multi(...num) {
  return num[0] * num[1];
}
const arr = [2, 3]
// spread operator in this situation
// multi(...arr);

// ------------------------------------------------------------------
// Q 11 - Params vs Arguments O/P Question

// What is the output ?????
// Answer: There is an error the rest operator must be last 
// function whatout(a,b, ...num, x,y){
//   console.log(x,y); 
// }

// ------------------------------------------------------------------
// Q 12 - What is a callback function 

let nums = [1, 2, 3, 4];
// this is the callback 
function x2(num) {
  return (num * 2);
}
// let vals = nums.map(x2)
// console.log(vals)


// ------------------------------------------------------------------
// Q:13 - Arrow Functions
// 1 - Syntax 
// 2 - Implicit "return" keyword
const add = (num1, num2) => num1 + num2

// 3 - No arguemnts keyword in arrow function 
// 4 - "this" keyword
let user = {
  user: "bawa",
  rc1: () => {
    console.log("sub to " + this.user)
  },
  rc2() {
    console.log("sub to " + this.user);
  }
}
// will be undefined becasue the the is scoped to the global scope 
user.rc1();
// will be bawa because scoped to local scope 
user.rc2();
// ------------------------------------------------------------------

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


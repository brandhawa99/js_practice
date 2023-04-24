// Currying in Javascript
// Example fn(a,b) int fn(a)(b)
// WHY - avoid passing same variable again and again 
// - create high order function;
// - make func pure and less prone to errors 


// Q1 1 - sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return (a + b + c);
    }
  }
}

// console.log(sum(2)(6)(1));

function eval(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multi") return a * b;
      else if (operation === "div") return a / b;
      else if (operation === "sub") return a - b;
      else return "invalid operation"
    }
  }


}
// we can create a multiply func very easily off this
// let multi = eval("multi");
// console.log(multi(4)(10))


// QUESTION 3 - Infinite Currying => sum(1)(2)(3)... (n);

function infiniteSum(a) {
  return function (b) {
    if (b) return infiniteSum(a + b);
    return a;
  }
}

// console.log(infiniteSum(2)(6)(5)())


// QUESTION 4 - Currying vs Partial Application 

function sum(a) {
  return function (b, c) {
    return a + b + c;
  }
}




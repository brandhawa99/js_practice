// Closures In Javascript

// Lexical Scope
var name = "bawa 123";

// global scope 
function local() {
  // local scope 
  console.log(name)
}


function sub() {
  var name = "pizza";

  function displayName() {
    alert(name);
  }
  displayName();
}
// sub();
// closures give us access ot outer function scopes inside inner functions

// 
// Q2: Write a functoin that would allow you to do this
// Q2: Write a functoin that would allow you to do this
// Q2: Write a functoin that would allow you to do this
// 
/**
 * var addSix createBase(6);
 * addSix(10) // return 16
 * addSix(21) // return 27
 */

function createBase(base) {
  return function (val) {
    return base + val;
  }
}
// var addTen = createBase(10);
// console.log(addTen(5)); 

// 
// Q3: Time Optimization
// Q3: Time Optimization
// Q3: Time Optimization
// 

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  // this closure optimized the code 
  return function (index) {
    console.log(a[index])
  }
}

// const closure = find();
// console.time("6")
// closure(6);
// console.timeEnd("6")
// console.time("12")
// closure(800)
// console.timeEnd("12")

// 
// Q3/4: SetTimeout output 
// Q3/4: SetTimeout output 
// Q3/4: SetTimeout output 
// 

function a() {
  for (var i = 0; i < 3; i++) {
    function b(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000 * i)

    }
    b(i);
  }
}
// a();

// 
// Q5: How would you use a closure to create a private counter
// Q5: How would you use a closure to create a private counter
// Q5: How would you use a closure to create a private counter
// 

function counter() {
  var _counter = 0;

  function add(incre) {
    _counter += incre;
  }
  function get() {
    return _counter
  }
  return {
    add, get
  };

}

// const c = counter();
// c.add(20);
// c.add(5);
// console.log(c.get());

// 
// Q6: What is a Module Patttern 
// Q6: What is a Module Patttern 
// Q6: What is a Module Patttern 
// 

const calc = (function () {
  var sum = 0;
  function add(num) {
    sum += num;
    display();
  }
  function sub(num) {
    sum -= num;
    display();
  }
  function display() {
    console.log(sum)
  }
  return {
    add,
    sub,
  }
})();
// calc.add(20);
// calc.sub(10);
// calc.add(19);

// 
// Q7 Make it run once; 
// Q7 Make it run once; 
// Q7 Make it run once; 
// 

let view;
function runsOnce() {
  let runs = 0;
  return function () {
    if (runs === 0) {
      view = "bawa is cool";
      runs += 1;
      console.log("HELLO " + view);
    } else {
      console.log("ALready RUN ");
      runs += 1;
    }
  }
}

// let fn = runsOnce();
// fn()
// fn();
// fn();
// fn();

// 
// Q8 Once Polyfill
// Q8 Once Polyfill
// Q8 Once Polyfill
// 

function oneRun(fn, ctx) {
  let run;
  return function () {
    if (fn) {
      run = fn.apply(ctx || this, arguments);
      fn = null;
    }
    return run;
  }
}

// let hello = oneRun((a, b) => { console.log("Hello", a, b) });
// hello(1, 2)
// hello(1, 2)
// hello(1, 2)

// 
// Q9: Memoize Polyfill 
// Q9: Memoize Polyfill 
// Q9: Memoize Polyfill 
// 

function myMemoize(fn, ctx) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(ctx || this, ...args);

    }
    return res[argsCache]
  }

}

let betterStuff = myMemoize((a, b) => {
  for (let i = 0; i < 10000000; i++) { };
  return (a + b)
})

console.time("hello")
console.log(betterStuff(2, 3));
console.timeEnd("hello")
console.time("hello2")
console.log(betterStuff(2, 3));
console.timeEnd("hello2")


// 
// Q10: What is the difference between closure and scope
// 
// Answer: 
// - Closure func in another func inner func is closure 
// - Scope what vars you have access too 
//     - inner outer global local
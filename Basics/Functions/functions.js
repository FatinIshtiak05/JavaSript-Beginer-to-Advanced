/*1️⃣ What Is a Function?

A function is a block of reusable code that performs a specific task.
You can call it anytime instead of repeating code.*/

function sayHello(){
    console.log("Hello World");
}

sayHello();

/*2️⃣ Function with Parameters (Inputs)

Parameters are variables you pass into a function.
They make your function flexible.*/

function greet(name){
    console.log("Hello, "+name+"!");
}
greet("Anik");

/*3️⃣ Function with Return Value

Functions can return a result to the place where they’re called.
*/

function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8

function sub(c, d){
    return c - d;
}
console.log("Substract: "+sub(5,4)); // Output: 1

function mul(a,b){
    return a*b;
}
console.log("Multiply: "+mul(4,5)); // output: 20

function div(a,b){
    return a/b;
}
console.log("Division: "+div(20,5)); //output: 4

/*4️⃣ Default Parameters

If you don’t pass a value, the function can use a default one.*/

function greet1(name = "Guest"){
    console.log("Welcome, "+name);
}
greet1("Anik"); //Output: Welcome, Anik
greet1(); // Output: Welcome, Guest

/*5️⃣ Function Expression (Assigned to Variable)

You can store a function inside a variable:*/

const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // 20

/*6️⃣ Arrow Function (Modern ES6+ Syntax)

A shorter and cleaner way to write functions.*/

// Normal Function

function add(a, b) {
  return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // 8

const subArrow = (a,b) => a - b;

console.log(subArrow(10,2)); // 8

/* When to use arrow functions:

When you need short, simple functions
Common in React or modern JS */

/*7️⃣ Arrow Function with Block Body
If your arrow function has multiple statements, wrap them in { } and use return. */
const grt = (name) => {
  let msg = `Hello, ${name}`;
  return msg;
};
console.log(grt("Anik"));

/*8️⃣ Function without Parameters*/

const sayHi = () => console.log("Hi there!");
sayHi(); // Output: Hi there!

/*9️⃣ Example: Combine Concepts*/

const calculateBill = (food, tax) => {
  const total = food + food * tax;
  return total;
};

let bill = calculateBill(100, 0.1);
console.log("Total Bill:", bill); // 110
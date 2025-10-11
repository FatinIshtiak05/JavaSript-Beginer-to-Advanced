//Arithmatic Operator

let a = 10, b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33 (Division)
console.log(a % b); // 1  (Modulus = remainder)
console.log(a ** b); // 1000 (Exponentiation)

//Assignment Operators

let x = 5;
x += 3; // x = 8
x -= 2; // x = 6
x *= 2; // x = 12
x /= 3; // x = 4

//Comparison Operators
console.log(5 == "5");   // true  (loose equality, type ignored)
console.log(5 === "5");  // false (strict equality, type checked)
console.log(10 != 5);    // true
console.log(10 !== "10");// true
console.log(10 !== 10);
console.log(10 > 5);     // true
console.log(10 >= 10);   // true
console.log(5 < 3);      // false

//Logical Operators

let isAdmin = true;
let isLoggedIn = false;

console.log(isAdmin && isLoggedIn); // false (AND)
console.log(isAdmin || isLoggedIn); // true  (OR)
console.log(!isAdmin);              // false (NOT)

//Ternary Operator (Shortcut for if-else)
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult
let name="Anik";
let Identity = (name === "Anik") ? "True" : "False";
console.log(Identity);

let name2 = "Shafi";
let idn = (name2 === "Anik") ? "True" : "False";
console.log(idn);



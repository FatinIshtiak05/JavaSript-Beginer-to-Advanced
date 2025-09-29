/*Data Types in JavaScript

JavaScript has 8 main data types.

🔸 Primitive Types (single value, immutable)

Number → integers & decimals*/



let num = 42;
let price = 19.99;


//String → text (inside " ", ' ', or ` `)

let name = "Alice";
let greeting = `Hello, ${name}!`;


//Boolean → true or false

let isLoggedIn1 = true;

let x1;
console.log(x1); // undefined


//Null → empty or no value

let y1 = null;


//Symbol → unique identifier

let sym = Symbol("id");


//BigInt → very large numbers

let big = 12345678901234567890n;

//🔸 Non-Primitive Type

//Object → collections of data

let person = { name: "Alice", age: 25 };
let arr = [1, 2, 3];

/*3. Operators in JavaScript

Operators are symbols that perform actions on values.*/

//🔹 Arithmetic Operators

let a = 10, b = 3;
console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.33 (Division)
console.log(a % b); // 1  (Modulus = remainder)
console.log(a ** b); // 1000 (Exponentiation)

//🔹 Assignment Operators

let x = 5;
x += 3; // x = 8
x -= 2; // x = 6
x *= 2; // x = 12
x /= 3; // x = 4

//🔹 Comparison Operators

console.log(5 == "5");   // true  (loose equality, type ignored)
console.log(5 === "5");  // false (strict equality, type checked)
console.log(10 != 5);    // true
console.log(10 !== "10");// true
console.log(10 > 5);     // true
console.log(10 >= 10);   // true
console.log(5 < 3);      // false

//🔹 Logical Operators

let isAdmin = true;
let isLoggedIn2 = false;

console.log(isAdmin && isLoggedIn2); // false (AND)
console.log(isAdmin || isLoggedIn2); // true  (OR)
console.log(!isAdmin);              // false (NOT)

//🔹 Ternary Operator (Shortcut for if-else)

let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult

//✅ Sumup

/*Use let for values that change, const for fixed values.

Know the 8 data types (Number, String, Boolean, Undefined, Null, Symbol, BigInt, Object).

Practice operators: arithmetic, assignment, comparison, logical, and ternary.*/

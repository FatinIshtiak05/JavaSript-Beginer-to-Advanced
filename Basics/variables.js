/*
1. Var
About---
i. Function-scoped.
ii. Can be redeclared and updated.
iii. Supports hoisting (moved to the top before execution).

Problem: 
i. var causes unexpected bugs due to redeclaration and hoisting.
ii. Rarely used in modern JavaScript.
*/

var name = "Anik";
var name = "ANika";  // ✅ Allowed (redeclare)
name = "Avi";  // ✅ Allowed (update)
console.log(name); // Avi

/*
2. let
About---
i. Block-scoped (limited to { ... }).
ii. Can be updated, but not redeclared in the same scope.

👉 Best for values that change (e.g., counters, user input).
*/

let n1 = "Lovely";
n1 = "Susmita";
console.log(n1);

let age = 25;
age = 26;        // ✅ Allowed (update)
// let age = 30;  // ❌ Error (can’t redeclare in same scope)

/*
3. Const
About---
i. Block-scoped.
ii. Must be initialized at declaration.
iii. Cannot be updated or redeclared.
👉 Best for constants or values that should never change.
*/

const pi= 3.1416;
// pi = 3.14;     // ❌ Error (can’t update)
// const pi = 22; // ❌ Error (can’t redeclare)
console.log(pi);


/*⚡ Special Notes on const

If a const is an object or array, the reference is constant but the contents can be changed.
*/
const person = { name: "Alice", age: 25 };
person.age = 30;        // ✅ Allowed
// person = { name: "Bob" }; // ❌ Error (reassignment not allowed)

const numbers = [1, 2, 3];
numbers.push(4);        // ✅ Allowed
console.log(numbers);   // [1, 2, 3, 4]

/*📊 Comparison Table
Feature	var	let	const
Scope	Function	Block	Block
Redeclare	✅ Yes	❌ No	❌ No
Reassign	✅ Yes	✅ Yes	❌ No
Hoisting	✅ Yes	❌ No (TDZ*)	❌ No (TDZ*)

👉 TDZ = Temporal Dead Zone (can’t access before declaration)

✅ Rule of Thumb

Use const by default.

Use let if the value changes.

Avoid var in modern code.*/

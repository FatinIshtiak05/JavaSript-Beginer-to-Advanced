/*1️⃣ Arrays (list of values)

An array stores multiple values in a single variable.*/

let fruits = ["apple", "banana", "mango"];
console.log(fruits);

/*Access Array Elements*/

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana

/*Modify Elements*/

fruits[1] = "orange";
console.log(fruits); // [ 'apple', 'orange', 'mango' ]

/*
Common Array Methods
Method---------------	Description----------------	Example
push()--------------- Add item at end	----------- fruits.push("grape")
pop()----------------	Remove last item----------- fruits.pop()
unshift()-----------	Add item at start----------	fruits.unshift("kiwi")
shift()-------------	Remove first item---------- fruits.shift()
length--------------  Count items	--------------- fruits.length
includes()----------	Check if value exists------	fruits.includes("apple") */

/*Objects (key–value pairs)

Objects hold data in property: value format.*/

let person = {
  name: "Anik",
  age: 26,
  isStudent: true
};

//Access Object Properties

console.log(person.name);     // Anik
console.log(person["age"]);   // 26

//Modify / Add Properties

person.age = 27;              // Update
person.country = "Bangladesh"; // Add new
console.log(person);

//Loop through an Object

for (let key in person) {
  console.log(key + ": " + person[key]);
}
//Nested Object Example

let student = {
  name: "Rafi",
  marks: {
    math: 85,
    english: 90
  }
};

console.log(student.marks.math); // 85

//Array of Objects

//Used a lot in real-world apps:

let users = [
  { name: "Anik", age: 26 },
  { name: "Rafi", age: 22 },
  { name: "Nila", age: 25 }
];

for (let user of users) {
  console.log(user.name + " is " + user.age + " years old.");
}

/* 2 filter() — filters elements based on a condition
Returns a new array with only the elements that match a condition.*/

let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter((num) => num % 2 === 0);
console.log(even); // [2, 4, 6]

//Use filter() to select items that meet certain criteria.
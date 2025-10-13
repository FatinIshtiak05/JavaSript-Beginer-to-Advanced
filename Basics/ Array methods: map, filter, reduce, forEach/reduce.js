/*4️⃣ reduce() — reduces array to a single value
It accumulates all array values into one result (sum, average, total, etc.).*/

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10


/*Explanation:

total → accumulator (starts at 0)

num → each array value

adds all values together*/
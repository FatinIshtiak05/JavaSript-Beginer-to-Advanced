//Combine them together!

let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
  .filter((n) => n % 2 === 0)  // keep even
  .map((n) => n * 10)          // multiply by 10
  .reduce((sum, n) => sum + n, 0); // sum them up
console.log(result); // 120

/*Summary Table
Method-------------	Returns new array?	----------Purpose
forEach()----------	❌ No------------------------	Loop through elements
map()-------------	✅ Yes	----------------------Transform elements
filter()----------	✅ Yes	--------------------- Keep specific elements
reduce()----------	❌ (returns single value)---	Combine all elements*/

/* 4. forEach() — just loops through the array
It runs a function on each element in the array.
It doesn’t return a new array. */


let numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  console.log(num * 2);
});

//⚠️ forEach() is used only for looping — it doesn’t create or return anything new.
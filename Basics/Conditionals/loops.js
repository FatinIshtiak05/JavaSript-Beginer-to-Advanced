/*Loops — Repeat tasks easily
▶️ for Loop

Used when you know how many times to repeat.*/

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

/*while Loop
Used when you don’t know how many times to repeat — runs while condition is true.
*/

let count = 1;

while (count <= 5) {
  console.log("Number:", count);
  count++;
}
/*for...of Loop

Used to loop through arrays or strings.*/

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

/*1️⃣ Conditionals — if, else if, else

Conditionals let your program decide what to do based on conditions (true/false).

*/

let score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 60) {
  console.log("Good Job!");
} else {
  console.log("Try Again!");
}

/*2️⃣ Switch Statement

When you have many possible cases, use switch.*/

let day = "Saturday";

switch (day) {
  case "Saturday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is coming!");
    break;
  case "Sunday":
    console.log("Holiday!");
    break;
  default:
    console.log("Just another day.");
}

let title = document.getElementById("title");
let message = document.querySelector(".msg");

title.textContent = "Hello JavaScript DOM!";
message.style.color = "blue";
message.textContent = "You’ve just manipulated the DOM successfully!";

/*1️⃣ Selecting Elements

There are multiple ways to select elements in the DOM.

✅ Common Selectors
Method	                                Description	                         Example
document.getElementById()	          Selects by ID	                    document.getElementById("title")
document.getElementsByClassName()     Selects all with class           	document.getElementsByClassName("item")
document.getElementsByTagName()	      Selects by tag	                document.getElementsByTagName("p")
document.querySelector()	          Selects first matching element	document.querySelector(".class" or "#id")
document.querySelectorAll()	          Selects all matching elements 	document.querySelectorAll("div.item")/*/
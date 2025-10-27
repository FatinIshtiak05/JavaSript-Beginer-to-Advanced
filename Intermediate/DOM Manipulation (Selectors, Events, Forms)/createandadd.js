//3️⃣ Creating and Adding Elements

//You can add new elements dynamically to the page.

let newItem = document.createElement("li");
newItem.textContent = "New Task";
document.body.appendChild(newItem);

//You can also insert inside a specific parent:

let list = document.getElementById("taskList");
list.appendChild(newItem);
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
  
    if (taskText === "") return alert("Please enter a task!");
  
    let li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button onclick="completeTask(this)">✔</button>
        <button onclick="deleteTask(this)">🗑</button>
      </div>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  
  function deleteTask(button) {
    button.parentElement.parentElement.remove();
  }
  
  function completeTask(button) {
    let task = button.parentElement.parentElement;
    task.classList.toggle("completed");
  }
  
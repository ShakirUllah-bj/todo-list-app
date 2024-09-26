var addBtn = document.getElementById("addBtn");
var todoInput = document.getElementById("inputField");
var todoList = document.getElementById("list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
    let taskText = todoInput.value;

    if (taskText.trim() !== "") {

        let newTask = document.createElement("li");
        let taskTextNode = document.createTextNode(newTask);
        newTask.appendChild(taskTextNode);

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";

    } else {
        alert("con't add empty task!")
    }
}
var addBtn = document.getElementById("addBtn");
var todoInput = document.getElementById("inputField");
var todoList = document.getElementById("list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
    let taskText = todoInput.value;

    if (taskText.trim() !== "") {

    } else {
        alert("con't add empty task!")
    }
}
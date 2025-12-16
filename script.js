//your code here

//your code here

const input = document.getElementById("newTodoInput");
const btn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

btn.addEventListener("click", function () {
  let value = input.value.trim();

  // Do not allow empty input
  if (value === "") {
    return;
  }

  // Create new li
  let li = document.createElement("li");
  li.textContent = value;

  // Append to list
  list.appendChild(li);

  // Clear input
  input.value = "";
});

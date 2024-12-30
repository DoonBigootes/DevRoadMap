const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const clean = document.getElementById("clean-btn");

clean.addEventListener("click", () => {
  list.innerHTML = "";
  console.log("Elementos borrados.");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  const item = document.createElement("li");
  item.textContent = text;

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Eliminar";
  deletebtn.classList = "delete-btn";
  deletebtn.style.display = "none";

  item.addEventListener("click", function () {
    item.classList.toggle("completed");

    if (item.classList.contains("completed")) {
      deletebtn.style.display = "inline-block";
    } else {
      deletebtn.style.display = "none";
    }
  });

  deletebtn.addEventListener("click", function (e) {
    e.stopPropagation();
    item.remove();
  });
  item.appendChild(deletebtn);
  list.appendChild(item);

  input.value = "";
});

const inputControll = document.querySelector(".taskAdder");
const inputbar = document.querySelector("#inputField");
const taskControll = document.querySelector(".tasks");
const inputButton = document.querySelector("#inputButton");
const ul = document.querySelector(".tasks");

let li = document.createElement("li");
let p = document.createElement("p");

function Click() {
  if (inputbar.value === "" || inputbar.value === " ") {
    alert("Wrtie SomeThing ");
  } else {
    p.textContent = inputbar.value;
    li.appendChild(p);
    ul.appendChild(li);
    console.log(li);

    let spanDele = document.createElement("span");
    spanDele.className = "deleteButton";

    let spanEdit = document.createElement("span");
    spanEdit.className = "editButton";

    spanDele.innerText = "Delete";
    spanEdit.innerText = "Edit";
    li.appendChild(spanDele);
    li.appendChild(spanEdit);
  }
  inputbar.value = "";
}

inputButton.addEventListener("click", () => {
  Click();
});

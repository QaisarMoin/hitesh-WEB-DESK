const inputBox = document.querySelector("#inputField");
const inputButton = document.querySelector("#inputButton");
let ul = document.querySelector("#ul");
const tasksContainer = document.querySelector("#ul");
let deleteButton;
let editButton;
let checkBox;
let li;
let para;
function idGenerator(i) {
  return function () {
    return i++;
  };
}
const idGen = idGenerator(0);

function addTasker() {
  if (inputBox.value !== "" || inputBox.value !== String()) {
    li = document.createElement("li");
    checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "first";
    para = document.createElement("para");
    para.className = "para";
    deleteButton = document.createElement("button");
    editButton = document.createElement("button");
    // const innertext = document.createTextNode(inputBox.value);

    deleteButton.className = "deleteButton";
    editButton.className = "editButton";
    para.textContent = inputBox.value;
    para.className = "red";
    // li.id = idGen();
    //   myLabel.htmlFor = idGen() - 1;

    deleteButton.innerHTML = "Delete";
    editButton.innerHTML = "Edit";

    li.appendChild(checkBox);
    li.appendChild(para);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    // console.log(li.id);
    savedata();
  }
  inputBox.value = "";

  //-------------------------------------------->

  checkBox.addEventListener("click", (e) => {
    console.log(e.target);
    let paraSelector = e.target.parentElement;
    paraSelector.classList.toggle("checked");
    savedata();
  });

  //-------------------------------------------->

  deleteButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    console.log("Deleted");
    savedata();
  });
  //    else {
  //     alert("Type something");
  //   }
}

function savedata() {
  localStorage.setItem("data", tasksContainer.innerHTML);
  console.log("data is stored");
}

function getdata() {
  tasksContainer.innerHTML = localStorage.getItem("data");
}

localStorage.removeItem("data");
getdata("data");

inputButton.addEventListener("click", () => {
  addTasker();
});

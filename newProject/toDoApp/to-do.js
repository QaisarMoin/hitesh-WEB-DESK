const inputText = document.querySelector("#inputText");
const addButton = document.querySelector("#addButton");
const listContainer = document.querySelector("#listContainer");

function listAdder() {
  if (inputText.value === "" || inputText.value === " ") {
    alert("Type Something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputText.value;

    const deleteBtn = document.createElement("button");
    // const editBtn = document.createElement("button");

    deleteBtn.innerText = "";
    // editBtn.innerText = "Edit";

    deleteBtn.id = "deleteNow";
    // editBtn.id = "editNow";

    // li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    listContainer.appendChild(li);
  }
  inputText.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    e.target.classList.toggle("backgreen");
    saveData();
  }

  //   if (e.target.innerText === "EDIT") {
  //     let parent = e.target.parentElement;
  //     // parent.removeAttribute("readonly");
  //     // parent.focus();
  //     // e.target.innerHTML = "save";
  //     let editText = document.createElement("input");
  //     editText.type = "text";
  //     console.log((editText.value = parent.innerText.value));
  //     // parent.appendChild(editText);
  //   }
  //   console.log(e.target.id === "editNow");
  //   console.log(e.target.id === "deleteNow");

  if (e.target.id === "deleteNow") {
    e.target.parentElement.remove();
    saveData();
  }
});

addButton.addEventListener("click", () => {
  listAdder();
  saveData();
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getdata() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getdata();
// localStorage.removeItem("data");

// Remove All (Clear Local Storage)
// localStorage.clear();

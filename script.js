/* const checkTask = function () {
  let allTask = document.querySelectorAll(".singleTask");
  console.log(allTask);
  allTask.forEach(function (task) {
    task.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("bg-secondaryDark");
      e.currentTarget.classList.toggle("text-decoration-line-through");
    });
  });
}; */

const checkTask = function (task, p) {
  task.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("bg-secondaryDark");
    p.classList.toggle("text-decoration-line-through");
  });
};
const deleteTask = function (btn, container) {
  btn.addEventListener("click", function (e) {
    container.remove();
  });
};

/* on click create new task */
const createTask = function () {
  let taskContainer = document.getElementById("tasks");
  let newTask = document.getElementById("newTask");
  if (newTask.value != "") {
    /* create new list item */
    let li = document.createElement("li");
    li.classList.add("bg-secondary");
    li.classList.add("rounded-3");
    li.classList.add("p-3");
    li.classList.add("mt-3");
    li.classList.add("row");
    li.classList.add("align-items-center");
    li.classList.add("singleTask");
    /* popola list item */
    /* paragrafo */
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("col-12");
    taskDiv.classList.add("col-md-10");

    let taskPar = document.createElement("p");
    taskPar.classList.add("text-primary");
    taskPar.classList.add("fs-4");
    taskPar.classList.add("m-0");
    taskPar.classList.add("text-break");

    taskPar.innerText = newTask.value;
    taskDiv.appendChild(taskPar);
    li.appendChild(taskDiv);
    /* bottoni */
    let btn2 = document.createElement("button");
    btn2.classList.add("btn");
    btn2.classList.add("btn-primary");
    btn2.classList.add("ms-auto");
    btn2.classList.add("deleteTask");
    btn2.classList.add("fs-4");
    btn2.classList.add("col-12");
    btn2.classList.add("col-md-2");
    btn2.classList.add("text-secondary");
    btn2.innerHTML = '<i class="bi bi-trash-fill"></i>';
    li.appendChild(btn2);

    taskContainer.appendChild(li);
    /*  */
    checkTask(li, taskPar);
    deleteTask(btn2, li);
    newTask.value = "";
  } else {
    alert("write something");
  }
};

const submit = document.getElementById("submit");
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
submit.addEventListener("click", function () {
  createTask();
});

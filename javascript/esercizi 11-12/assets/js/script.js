let taskList = [];

function addTask() {
    let taskInput = document.querySelector("header input");

    let task = taskInput.value;

    taskList.push(task);

    resetForm(taskInput);
    createTaskList();

}
document.querySelector("button").addEventListener("click", addTask);

function resetForm(node) {
    node.value = "";
}

function createTaskList() {
    let nodeList = document.querySelector("main section");
    nodeList.innerHTML = "";
    let ol = document.createElement("ol");

    taskList.forEach((ele, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${ele} <span><button onclick="removeTask(${i})">Elimina</button></span>`;
        ol.appendChild(li);
    })
    nodeList.appendChild(ol);
}

function removeTask(i) {
    taskList.splice(i, 1);
    createTaskList();
}



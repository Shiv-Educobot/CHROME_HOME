function updateTime() {
    let time = new Date().toString();
    document.getElementById("time").innerHTML = time;
}

setInterval(() => {
    updateTime();
}, 1000);

let TasksList = [
    "to change dashboard design to change dashboard design to change dashboard design",
];

function getLocalStorageTasks() {
    let localSorageTasks = localStorage.getItem("tasks");
    console.log(localSorageTasks);
    if (!!localSorageTasks) {
        TasksList = JSON.parse(localSorageTasks);
    } else {
        localStorage.setItem("tasks", JSON.stringify(TasksList));
    }
    randerTaskList();
}

getLocalStorageTasks();
function addTasks() {
    let task = document.getElementById("taskInput").value;
    if (task.length > 5) {
        TasksList.push(task);
        localStorage.setItem("tasks", JSON.stringify(TasksList));
        randerTaskList();
        alert("Task is Added");
    } else {
        alert("Length of Note is not valid");
    }
}

function randerTaskList() {
    let tasks = ``;
    TasksList.forEach((value, index) => {
        tasks += `<div class="task">${index + 1
            }. ${value}<span onclick="deleteTasks(${index})">Delete Note</span></div>`;
    });
    document.getElementById("TaskListContainer").innerHTML = tasks;
    document.getElementById("count").innerHTML = TasksList.length;
}

function deleteTasks(index) {
    console.log(TasksList);
    TasksList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(TasksList));
    randerTaskList();
}


function openInputWindow() {
    document.getElementById("taskTakingWindow").style.display='flex'
}
function closeInputWindow() {
    document.getElementById("taskTakingWindow").style.display='none'
}